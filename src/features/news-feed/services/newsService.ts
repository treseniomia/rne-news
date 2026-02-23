import { Article } from "../types";

const DEV_TO_URL = "https://dev.to/api/articles?tag=reactnative&per_page=30"; // Dinamihan natin para mas maraming pagpilian
const HASHNODE_GQL_URL = "https://gql.hashnode.com";

export const newsService = {
  getDevToNews: async (): Promise<Article[]> => {
    try {
      const response = await fetch(DEV_TO_URL);
      const data = await response.json();

      return data.map((item: any) => {
        const content = (item.title + " " + item.description).toLowerCase();

        // Mas malawak na keywords para sa Libraries
        let category = "Core";
        if (
          content.includes("library") ||
          content.includes("package") ||
          content.includes("ui") ||
          content.includes("reanimated") ||
          content.includes("component")
        ) {
          category = "Libraries";
        }

        return {
          id: `devto-${item.id}`,
          title: item.title,
          summary: item.description,
          author: item.user.name,
          publishedAt: item.published_at,
          imageUrl:
            item.cover_image || `https://picsum.photos/seed/${item.id}/400/200`,
          category: category,
        };
      });
    } catch (error) {
      console.error("Dev.to Error:", error);
      return [];
    }
  },

  getHashnodeNews: async (): Promise<Article[]> => {
    // Mas malawak na query para sa Expo/React Native
    const query = `
      query {
        tag(slug: "react-native") { 
          posts(pageSize: 20, page: 1) {
            nodes {
              id
              title
              brief
              author { name }
              publishedAt
              coverImage { url }
            }
          }
        }
      }
    `;

    try {
      const response = await fetch(HASHNODE_GQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();
      const posts = result.data?.tag?.posts?.nodes || [];

      return posts.map((post: any) => {
        const title = post.title.toLowerCase();
        // Kung may "expo" sa title, Expo category. Kung wala, ituring nating Core technical blog.
        let category = title.includes("expo") ? "Expo" : "Core";

        return {
          id: `hash-${post.id}`,
          title: post.title,
          summary: post.brief,
          author: post.author.name,
          publishedAt: post.publishedAt,
          imageUrl:
            post.coverImage?.url ||
            `https://picsum.photos/seed/${post.id}/400/200`,
          category: category,
        };
      });
    } catch (error) {
      console.error("Hashnode Error:", error);
      return [];
    }
  },

  getLatestNews: async (): Promise<Article[]> => {
    try {
      const [devto, hashnode] = await Promise.all([
        newsService.getDevToNews(),
        newsService.getHashnodeNews(),
      ]);

      return [...devto, ...hashnode].sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    } catch (error) {
      return [];
    }
  },
};

export { Article };
