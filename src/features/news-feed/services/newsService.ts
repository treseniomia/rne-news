import { Article } from "../types";

export const MOCK_ARTICLES: Article[] = [
  {
    id: "rn-1",
    title: "React Native 0.78: The New Architecture by Default",
    summary:
      "Everything you need to know about the performance gains with the new Bridgeless mode.",
    author: "Meta Engineering",
    publishedAt: "2026-02-10",
    imageUrl: "https://picsum.photos/seed/react/400/200",
    category: "Core",
  },
  {
    id: "expo-1",
    title: "Expo SDK 54: Router Enhancements",
    summary:
      "Exploring the new server actions and typed routes in the latest Expo ecosystem.",
    author: "Expo Team",
    publishedAt: "2026-02-14",
    imageUrl: "https://picsum.photos/seed/expo/400/200",
    category: "Expo",
  },
  {
    id: "lib-1",
    title: "Reanimated 4.0 Preview",
    summary:
      "A first look at the shared element transitions and improved worklet performance.",
    author: "Software Mansion",
    publishedAt: "2026-02-15",
    imageUrl: "https://picsum.photos/seed/reanimate/400/200",
    category: "Libraries",
  },
];

export const newsService = {
  getLatestNews: async (): Promise<Article[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_ARTICLES), 800);
    });
  },
};

export { Article };
