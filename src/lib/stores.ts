import { atom } from 'nanostores';

export interface SelectedFile {
  path: string;
  name: string;
  content: string;
  highlightedContent: string;
}

export const $selectedFile = atom<SelectedFile | null>(null);
