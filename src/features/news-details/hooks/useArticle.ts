import { newsService } from "@features/news-feed/services/newsService";
import { Article } from "@features/news-feed/types";
import { useEffect, useState } from "react";

export const useArticle = (id: string) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;
      setIsLoading(true);
      try {
        const allNews = await newsService.getDevNews();

        const found = allNews.find((a) => a.id === id);
        setArticle(found || null);
      } catch (error) {
        console.error("Error fetching article details:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  return { article, isLoading };
};
