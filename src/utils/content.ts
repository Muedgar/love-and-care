import { marked } from 'marked';

export async function formatContent(content: string): Promise<string> {
  if (!content) return '';
  return await marked(content);
}

