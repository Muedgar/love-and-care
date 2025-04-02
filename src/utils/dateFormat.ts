import { getNewsArticles } from "@/lib";
import { Article } from "@/types/article";

// Helper function to get related articles
export function getRelatedArticles(currentArticle: Article, count = 3): Article[] {
    
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