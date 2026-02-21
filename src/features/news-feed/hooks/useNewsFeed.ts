import { useCallback, useEffect, useState } from "react";
import { newsService } from "../services/newsService";
import { Article, NewsCategory } from "../types";

export const useNewsFeed = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>("All");

  const fetchNews = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await newsService.getLatestNews();
      setArticles(data);
      setFilteredArticles(
        selectedCategory === "All"
          ? data
          : data.filter((a) => a.category === selectedCategory)
      );
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory]);

  const filterByCategory = (category: NewsCategory) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter((a) => a.category === category));
    }
  };

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return {
    articles: filteredArticles,
    isLoading,
    selectedCategory,
    filterByCategory,
    refresh: fetchNews,
    categories: ["All", "Libraries", "Expo", "Core", "Test"] as NewsCategory[],
  };
};
