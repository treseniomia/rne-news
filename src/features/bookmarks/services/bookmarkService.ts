import AsyncStorage from "@react-native-async-storage/async-storage";
// INDUSTRY-GRADE: Import the specific feature type
import { BookmarkedArticle } from "../types";

const BOOKMARKS_KEY = "@pulse_news_bookmarks";

export const bookmarkService = {
  /**
   * Kunin lahat ng bookmarks mula sa local storage
   */
  getBookmarks: async (): Promise<BookmarkedArticle[]> => {
    try {
      const jsonValue = await AsyncStorage.getItem(BOOKMARKS_KEY);
      return jsonValue ? JSON.parse(jsonValue) : [];
    } catch (error) {
      console.error("Error retrieving bookmarks:", error);
      return [];
    }
  },

  /**
   * Mag-add o mag-remove ng article (Toggle functionality)
   */
  toggleBookmark: async (article: BookmarkedArticle): Promise<boolean> => {
    try {
      const bookmarks = await bookmarkService.getBookmarks();
      const isBookmarked = bookmarks.some((b) => b.id === article.id);

      let newBookmarks: BookmarkedArticle[];

      if (isBookmarked) {
        // Remove if already exists
        newBookmarks = bookmarks.filter((b) => b.id !== article.id);
      } else {
        // Add if not in list, include a timestamp for better data management
        const articleWithTimestamp = {
          ...article,
          savedAt: new Date().toISOString(),
        };
        newBookmarks = [articleWithTimestamp, ...bookmarks];
      }

      await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(newBookmarks));
      return !isBookmarked; // Returns true if added, false if removed
    } catch (error) {
      console.error("Error toggling bookmark:", error);
      return false;
    }
  },

  /**
   * Check kung naka-save na ang article sa bookmarks
   */
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
