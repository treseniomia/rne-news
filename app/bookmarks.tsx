import { useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppTheme } from "../src/core/ThemeContext"; // Import ang dynamic theme context
import { BookmarkSkeleton } from "../src/features/bookmarks/components/BookmarkSkeleton";
import { useBookmarks } from "../src/features/bookmarks/hooks/useBookmarks";
import { NewsItem } from "../src/features/news-feed/components/NewsItem";

export default function BookmarksScreen() {
  const { savedArticles, isLoading } = useBookmarks();
  const { theme } = useAppTheme(); // Gamitin ang dynamic theme
  const router = useRouter();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.colors.text.main }]}>
          Saved Stories
        </Text>
      </View>

      {isLoading ? (
        <BookmarkSkeleton />
      ) : (
        <FlatList
          data={savedArticles}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NewsItem
              article={item}
              onPress={(id) => router.push(`/details/${id}`)}
            />
          )}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text
                style={[styles.emptyText, { color: theme.colors.text.main }]}
              >
                No bookmarks yet.
              </Text>
              <Text
                style={[
                  styles.emptySubtext,
                  { color: theme.colors.text.muted },
                ]}
              >
                Stories you save will appear here.
              </Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24, // spacing.lg equivalent
    paddingVertical: 16, // spacing.md equivalent
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "900",
  },
  listContent: {
    padding: 16, // spacing.md equivalent
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
  },
  emptySubtext: {
    fontSize: 14,
    marginTop: 8,
  },
});
