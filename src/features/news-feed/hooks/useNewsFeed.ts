import { useCallback, useEffect, useState } from "react";
import { newsService } from "../services/newsService";
import { Article, NewsCategory } from "../types";

export const useNewsFeed = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>("All");

  const fetchNews = useCallback(async () => {
    setIsLoading(true);
    const data = await newsService.getDevNews();
    setArticles(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);


  const filteredArticles = articles.filter((art) =>
    selectedCategory === "All" ? true : art.category === selectedCategory
  );

  return {
    articles: filteredArticles,
    isLoading,
    refresh: fetchNews,
    selectedCategory,
    filterByCategory: setSelectedCategory,
    categories: ["All", "React Native", "Expo", "Libraries"] as NewsCategory[],
  };
};
