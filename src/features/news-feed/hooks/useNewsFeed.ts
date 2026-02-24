// import { useCallback, useEffect, useState } from "react";
// import { newsService } from "../services/newsService";
// import { Article, NewsCategory } from "../types";

// export const useNewsFeed = () => {
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState<NewsCategory>("All");

//   const fetchNews = useCallback(async () => {
//     setIsLoading(true);
//     try {
//       const data = await newsService.getLatestNews();
//       setArticles(data);

//       // Initial filter based on what's currently selected
//       if (selectedCategory === "All") {
//         setFilteredArticles(data);
//       } else {
//         setFilteredArticles(
//           data.filter((a) => a.category === selectedCategory)
//         );
//       }
//     } catch (error) {
//       console.error("Hook Error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [selectedCategory]);

//   const filterByCategory = (category: NewsCategory) => {
//     setSelectedCategory(category);
//     if (category === "All") {
//       setFilteredArticles(articles);
//     } else {
//       // Direct filtering from the main articles pool
//       const results = articles.filter((a) => a.category === category);
//       setFilteredArticles(results);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//   }, []); // Run only once on mount to prevent infinite loops

//   return {
//     articles: filteredArticles,
//     isLoading,
//     selectedCategory,
//     filterByCategory,
//     refresh: fetchNews,
//     categories: ["All", "Libraries", "Expo", "Core", "Test"] as NewsCategory[],
//   };
// };

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

  // Client-side filtering para sa instant feedback
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
