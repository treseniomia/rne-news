import { useEffect, useState } from "react";
import { bookmarkService } from "../../../services/bookmarkService";
import { Article } from "../../../services/newsService";

export const useBookmarks = (article?: Article) => {
  const [isSaved, setIsSaved] = useState(false);
  const [savedArticles, setSavedArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Idagdag ito

  useEffect(() => {
    const fetchStatus = async () => {
      setIsLoading(true);
      if (article) {
        const status = await bookmarkService.isArticleBookmarked(article.id);
        setIsSaved(status);
      }
      const all = await bookmarkService.getBookmarks();
      setSavedArticles(all);

      // Kaunting delay para makita ang "Pulse" effect
      setTimeout(() => setIsLoading(false), 800);
    };
    fetchStatus();
  }, [article]);

  const handleToggle = async () => {
    if (!article) return;
    const result = await bookmarkService.toggleBookmark(article);
    setIsSaved(result);
    // Refresh the list
    const all = await bookmarkService.getBookmarks();
    setSavedArticles(all);
  };

  return { isSaved, handleToggle, savedArticles, isLoading };
};
