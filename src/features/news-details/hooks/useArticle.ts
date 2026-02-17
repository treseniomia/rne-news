// src/features/news-details/hooks/useArticle.ts
import { useEffect, useState } from "react";
import { Article, newsService } from "../../../services/newsService";

export const useArticle = (id: string) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      setIsLoading(true);
      // Sa totoong app, may api.getArticleById(id) tayo.
      // For now, kukunin natin lahat at hahanapin yung ID.
      const allNews = await newsService.getLatestNews();
      const found = allNews.find((a) => a.id === id);
      setArticle(found || null);
      setIsLoading(false);
    };

    if (id) fetchArticle();
  }, [id]);

  return { article, isLoading };
};
