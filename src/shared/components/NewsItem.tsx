import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useAppTheme } from "../../core/ThemeContext";
import { Article } from "../../features/news-feed/services/newsService";
import { BaseCard } from "./BaseCard";

interface NewsItemProps {
  article: Article;
  onPress: (id: string) => void;
}

export const NewsItem = ({ article, onPress }: NewsItemProps) => {
  const { theme } = useAppTheme();

  return (
    <BaseCard onPress={() => onPress(article.id)}>
      <Image
        source={{ uri: article.imageUrl }}
        style={[
          styles.image,
          {
            backgroundColor: theme.colors.border,
            // Kung wala kang borderRadius.sm sa bagong theme,
            // gagamitin natin ang md or manual value
            borderRadius: 8,
          },
        ]}
      />
      <View style={{ marginTop: theme.spacing.sm }}>
        <Text style={[styles.category, { color: theme.colors.primary }]}>
          {article.category.toUpperCase()}
        </Text>
        <Text style={[styles.title, { color: theme.colors.text.main }]}>
          {article.title}
        </Text>
        <Text
          style={[styles.summary, { color: theme.colors.text.muted }]}
          numberOfLines={2}
        >
          {article.summary}
        </Text>
        <Text style={[styles.footer, { color: theme.colors.text.muted }]}>
          By {article.author} • {article.publishedAt}
        </Text>
      </View>
    </BaseCard>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 180,
  },
  category: {
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  summary: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    fontSize: 11,
  },
});
