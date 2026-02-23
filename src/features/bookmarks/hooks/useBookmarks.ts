import { bookmarkService } from "@/features/bookmarks/services/bookmarkService";
import { Article } from "@/features/news-feed/services/newsService";
import { useEffect, useState } from "react";

export const useBookmarks = (article?: Article) => {
  const [isSaved, setIsSaved] = useState(false);
  const [savedArticles, setSavedArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      setIsLoading(true);
      if (article) {
        const status = await bookmarkService.isArticleBookmarked(article.id);
        setIsSaved(status);
      }
      const all = await bookmarkService.getBookmarks();
      setSavedArticles(all);

      setTimeout(() => setIsLoading(false), 800);
    };
    fetchStatus();
  }, [article]);

  const handleToggle = async () => {
    if (!article) return;
    const result = await bookmarkService.toggleBookmark(article);
    setIsSaved(result);

    const all = await bookmarkService.getBookmarks();
    setSavedArticles(all);
  };

  return { isSaved, handleToggle, savedArticles, isLoading };
};
