// src/features/news-feed/hooks/useNewsFeed.ts
import { useCallback, useEffect, useState } from "react";
import { Article, newsService } from "../../../services/newsService";

export const useNewsFeed = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchNews = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await newsService.getLatestNews();
      setArticles(data);

      // I-apply ang current filter pagkatapos mag-fetch
      if (selectedCategory === "All") {
        setFilteredArticles(data);
      } else {
        setFilteredArticles(
          data.filter((a) => a.category === selectedCategory)
        );
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory]);

  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter((a) => a.category === category));
    }
  };

  useEffect(() => {
    fetchNews();
  }, []); // Run once on mount

  return {
    articles: filteredArticles,
    isLoading,
    selectedCategory,
    filterByCategory,
    refresh: fetchNews, // Binalik natin ito para sa FlatList
    categories: ["All", "Libraries", "Expo", "Core", "Test"],
  };
};
