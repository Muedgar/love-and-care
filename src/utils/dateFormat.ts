import { getNewsArticles } from "@/lib";
import { marked } from 'marked';  // You'll need to install this package

// Format markdown content to HTML
export function formatContent(content: string): string {
  if (!content) return '';
  return marked(content);
}

  // Helper function to get related articles
  export function getRelatedArticles(currentArticle:any, count = 3) {
    
    const allArticles = getNewsArticles();
    
    // Get articles from the same category, excluding the current one
    return allArticles
      .filter(article => 
        article.id !== currentArticle.id && 
        article.category === currentArticle.category &&
        !article.isPlaceholder
      )
      .slice(0, count);
  }