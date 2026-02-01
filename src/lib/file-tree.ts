import fs from 'node:fs';
import path from 'node:path';
import { createHighlighter } from 'shiki';

export interface FileNode {
  name: string;
  type: 'file' | 'directory';
  path: string; // Relative path from the root of the config entry
  content?: string;
  highlightedContent?: string;
  children?: FileNode[];
}

let highlighter: any = null;

async function getHighlighterInstance() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['catppuccin-mocha'],
      langs: [
        'lua', 'zsh', 'bash', 'sh', 'json', 'yaml', 'toml', 'markdown', 'typescript', 'javascript', 'python'
      ]
    });
  }
  return highlighter;
}

function getLangFromFile(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  switch (ext) {
    case '.lua': return 'lua';
    case '.zsh':
    case '.shrc':
    case '.zshrc':
    case '.bashrc': return 'zsh';
    case '.sh': return 'sh';
    case '.json': return 'json';
    case '.yaml':
    case '.yml': return 'yaml';
    case '.toml': return 'toml';
    case '.md': return 'markdown';
    case '.ts': return 'typescript';
    case '.js': return 'javascript';
    case '.py': return 'python';
    default: return 'plaintext';
  }
}

/**
 * Recursively scans a directory to build a file tree.
 */
export async function buildFileTree(dirPath: string, rootPath: string): Promise<FileNode[]> {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const hl = await getHighlighterInstance();
  const nodes: FileNode[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.relative(rootPath, fullPath);

    // Ignore index.md as it is used for metadata
    if (entry.name === 'index.md') {
      continue;
    }

    if (entry.isDirectory()) {
      nodes.push({
        name: entry.name,
        type: 'directory',
        path: relativePath,
        children: await buildFileTree(fullPath, rootPath),
      });
    } else {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const lang = getLangFromFile(entry.name);
      
      nodes.push({
        name: entry.name,
        type: 'file',
        path: relativePath,
        content: content,
        highlightedContent: hl.codeToHtml(content, {
          lang,
          theme: 'catppuccin-mocha'
        }),
      });
    }
  }

  // Sort: directories first, then files alphabetically
  return nodes.sort((a, b) => {
    if (a.type === b.type) {
      return a.name.localeCompare(b.name);
    }
    return a.type === 'directory' ? -1 : 1;
  });
}

/**
 * Generates the file tree for a specific config slug.
 */
export async function getConfigFileTree(slug: string): Promise<FileNode[]> {
  const configRoot = path.join(process.cwd(), 'src/content/config', slug);
  
  if (!fs.existsSync(configRoot)) {
    return [];
  }

  return buildFileTree(configRoot, configRoot);
}
