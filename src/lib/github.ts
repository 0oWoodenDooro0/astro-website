/**
 * GitHub API Utility
 * Handles fetching repository contents (tree and raw file content) at build time.
 */

const GITHUB_REPO = 'shaggy-star/dotfiles'; // TODO: Make this configurable if needed
const DEFAULT_BRANCH = 'master';

export interface GitHubFile {
  name: string;
  path: string;
  type: 'file' | 'dir';
  content?: string;
  download_url?: string;
}

/**
 * Fetches the contents of a directory or file from GitHub.
 */
export async function getGitHubContents(path: string): Promise<GitHubFile | GitHubFile[]> {
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${path}?ref=${DEFAULT_BRANCH}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    });

    if (!response.ok) {
      console.warn(`GitHub fetch failed for ${path}, using mock data. Status: ${response.status}`);
      return getMockData(path);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.warn(`GitHub fetch error for ${path}, using mock data.`, e);
    return getMockData(path);
  }
}

function getMockData(path: string): GitHubFile | GitHubFile[] {
  if (path.includes('nvim')) {
    return [
      { name: 'init.lua', path: `${path}/init.lua`, type: 'file', download_url: 'mock' },
      { name: 'lua', path: `${path}/lua`, type: 'dir' },
    ];
  }
  return {
    name: path.split('/').pop() || 'config',
    path: path,
    type: 'file',
    download_url: 'mock'
  };
}

/**
 * Fetches the raw content of a file from GitHub.
 */
export async function getGitHubRawContent(downloadUrl: string): Promise<string> {
  if (downloadUrl === 'mock') {
    return `-- Mock configuration content\nexport PATH=$HOME/bin:$PATH\n# This is a fallback for build-time testing.`;
  }
  
  const response = await fetch(downloadUrl);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch raw content: ${response.statusText}`);
  }

  return await response.text();
}
