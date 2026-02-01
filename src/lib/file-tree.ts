import fs from 'node:fs';
import path from 'node:path';

export interface FileNode {
  name: string;
  type: 'file' | 'directory';
  path: string; // Relative path from the root of the config entry
  content?: string;
  children?: FileNode[];
}

/**
 * Recursively scans a directory to build a file tree.
 * @param dirPath The absolute path to the directory to scan.
 * @param rootPath The absolute path to the root of the config entry (used for relative paths).
 * @returns A FileNode representing the directory or file.
 */
export function buildFileTree(dirPath: string, rootPath: string): FileNode[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

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
        children: buildFileTree(fullPath, rootPath),
      });
    } else {
      nodes.push({
        name: entry.name,
        type: 'file',
        path: relativePath,
        content: fs.readFileSync(fullPath, 'utf-8'),
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
 * @param slug The slug of the config entry (e.g., 'nvim').
 * @returns The root nodes of the file tree.
 */
export function getConfigFileTree(slug: string): FileNode[] {
  const configRoot = path.join(process.cwd(), 'src/content/config', slug);
  
  if (!fs.existsSync(configRoot)) {
    return [];
  }

  return buildFileTree(configRoot, configRoot);
}
