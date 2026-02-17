import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { BaseCard } from "../../../components/BaseCard";
import { theme } from "../../../core/theme";
import { Article } from "../../../services/newsService";

interface NewsItemProps {
  article: Article;
  onPress: (id: string) => void;
}

export const NewsItem = ({ article, onPress }: NewsItemProps) => {
  return (
    <BaseCard onPress={() => onPress(article.id)}>
      <Image source={{ uri: article.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.category}>{article.category.toUpperCase()}</Text>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.summary} numberOfLines={2}>
          {article.summary}
        </Text>
        <Text style={styles.footer}>
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
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.border,
  },
  content: {
    marginTop: theme.spacing.sm,
  },
  category: {
    fontSize: 10,
    fontWeight: "bold",
    color: theme.colors.accent,
    letterSpacing: 1,
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: theme.colors.text.main,
    marginBottom: 8,
  },
  summary: {
    fontSize: 14,
    color: theme.colors.text.muted,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    fontSize: 11,
    color: theme.colors.secondary,
  },
});
