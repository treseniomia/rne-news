import AsyncStorage from "@react-native-async-storage/async-storage";
import { Article } from "./newsService";

const BOOKMARKS_KEY = "@pulse_news_bookmarks";

export const bookmarkService = {
  // Kunin lahat ng bookmarks
  getBookmarks: async (): Promise<Article[]> => {
    const jsonValue = await AsyncStorage.getItem(BOOKMARKS_KEY);
    return jsonValue ? JSON.parse(jsonValue) : [];
  },

  // Mag-add o mag-remove ng article
  toggleBookmark: async (article: Article): Promise<boolean> => {
    const bookmarks = await bookmarkService.getBookmarks();
    const isBookmarked = bookmarks.find((b) => b.id === article.id);

    let newBookmarks;
    if (isBookmarked) {
      newBookmarks = bookmarks.filter((b) => b.id !== article.id);
    } else {
      newBookmarks = [...bookmarks, article];
    }

    await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(newBookmarks));
    return !isBookmarked; // Return true kung kaka-save lang
  },

  // Check kung naka-bookmark na ang isang article
  isArticleBookmarked: async (id: string): Promise<boolean> => {
    const bookmarks = await bookmarkService.getBookmarks();
    return bookmarks.some((b) => b.id === id);
  },
};
