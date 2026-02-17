import { useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../src/core/theme";
import { BookmarkSkeleton } from "../src/features/bookmarks/components/BookmarkSkeleton"; // Import ito
import { useBookmarks } from "../src/features/bookmarks/hooks/useBookmarks";
import { NewsItem } from "../src/features/news-feed/components/NewsItem";

export default function BookmarksScreen() {
  const { savedArticles, isLoading } = useBookmarks();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Saved Stories</Text>
      </View>

      {isLoading ? (
        <BookmarkSkeleton /> // Eto na yung "Pulse" effect habang nag-load
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
              <Text style={styles.emptyText}>No bookmarks yet.</Text>
              <Text style={styles.emptySubtext}>
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
  container: { flex: 1, backgroundColor: theme.colors.background },
  header: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: theme.colors.text.main,
  },
  listContent: { padding: theme.spacing.md },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    color: theme.colors.text.main,
  },
  emptySubtext: {
    fontSize: 14,
    color: theme.colors.text.muted,
    marginTop: 8,
  },
});
