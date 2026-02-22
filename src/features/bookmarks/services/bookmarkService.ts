import AsyncStorage from "@react-native-async-storage/async-storage";
import { BookmarkedArticle } from "../types";

const BOOKMARKS_KEY = "@pulse_news_bookmarks";

export const bookmarkService = {
  getBookmarks: async (): Promise<BookmarkedArticle[]> => {
    try {
      const jsonValue = await AsyncStorage.getItem(BOOKMARKS_KEY);
      return jsonValue ? JSON.parse(jsonValue) : [];
    } catch (error) {
      console.error("Error retrieving bookmarks:", error);
      return [];
    }
  },

  toggleBookmark: async (article: BookmarkedArticle): Promise<boolean> => {
    try {
      const bookmarks = await bookmarkService.getBookmarks();
      const isBookmarked = bookmarks.some((b) => b.id === article.id);

      let newBookmarks: BookmarkedArticle[];

      if (isBookmarked) {
        newBookmarks = bookmarks.filter((b) => b.id !== article.id);
      } else {
        const articleWithTimestamp = {
          ...article,
          savedAt: new Date().toISOString(),
        };
        newBookmarks = [articleWithTimestamp, ...bookmarks];
      }

      await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(newBookmarks));
      return !isBookmarked;
    } catch (error) {
      console.error("Error toggling bookmark:", error);
      return false;
    }
  },

  isArticleBookmarked: async (id: string): Promise<boolean> => {
    try {
      const bookmarks = await bookmarkService.getBookmarks();
      return bookmarks.some((b) => b.id === id);
    } catch (error) {
      console.error("Error checking bookmark status:", error);
      return false;
    }
  },
};
