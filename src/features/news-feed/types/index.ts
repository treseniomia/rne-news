export interface Article {
  id: string;
  title: string;
  summary: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  category: string;
}

export type NewsCategory = "All" | "Libraries" | "Expo" | "Core" | "Test";
