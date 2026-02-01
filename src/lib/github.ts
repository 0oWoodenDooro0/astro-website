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
  
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      // 'Authorization': `token ${import.meta.env.GITHUB_TOKEN}` // Optional: Add if hitting rate limits
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch from GitHub: ${response.statusText} (${url})`);
  }

  const data = await response.json();
  return data;
}

/**
 * Fetches the raw content of a file from GitHub.
 */
export async function getGitHubRawContent(downloadUrl: string): Promise<string> {
  const response = await fetch(downloadUrl);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch raw content: ${response.statusText}`);
  }

  return await response.text();
}
