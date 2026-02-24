import axios from "axios";
import { Article } from "../types";

const RSS_TO_JSON_URL = "https://api.rss2json.com/v1/api.json?rss_url=";

const FEEDS = {
  EXPO: "https://blog.expo.dev/feed",
  REACT_NATIVE: "https://reactnative.dev/blog/rss.xml",
};

export const newsService = {
  getDevNews: async (): Promise<Article[]> => {
    try {
      const [expoRes, rnRes] = await Promise.all([
        axios.get(`${RSS_TO_JSON_URL}${FEEDS.EXPO}`),
        axios.get(`${RSS_TO_JSON_URL}${FEEDS.REACT_NATIVE}`),
      ]);

      const combined = [
        ...expoRes.data.items.map((item: any) => ({ ...item, source: "Expo" })),
        ...rnRes.data.items.map((item: any) => ({
          ...item,
          source: "React Native",
        })),
      ];

      return combined
        .sort(
          (a, b) =>
            new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        )
        .map((item): Article => {
          const rawId = item.guid || item.link;
          const cleanId = rawId.replace(/^https?:\/\//, "").replace(/\//g, "-");

          return {
            id: cleanId,
            title: item.title,
            summary:
              item.description.replace(/<[^>]*>?/gm, "").substring(0, 120) +
              "...",
            imageUrl:
              item.thumbnail ||
              item.enclosure?.link ||
              "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
            author: item.author || item.source,
            publishedAt: item.pubDate,
            category: item.source as any,
            url: item.link,
          };
        });
    } catch (error) {
      console.error("RSS Fetch Error:", error);
      return [];
    }
  },
};
