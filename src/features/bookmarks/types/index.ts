import { Article } from "@features/news-feed/types";

export interface BookmarkedArticle extends Article {
  savedAt?: string;
}
