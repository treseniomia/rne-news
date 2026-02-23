import { ScreenHeader } from "@/shared/components/ScreenHeader";
import { useAppTheme } from "@core/ThemeContext";
import { NewsItem } from "@shared/components/NewsItem";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BookmarkSkeleton } from "../components/BookmarkSkeleton";
import { useBookmarks } from "../hooks/useBookmarks";

export const BookmarksScreen = () => {
  const { savedArticles, isLoading } = useBookmarks();
  const { theme } = useAppTheme();
  const router = useRouter();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.colors.text.main }]}>
          Bookmarks
        </Text>
      </View> */}
      <ScreenHeader title="Bookmarks" />

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
};

const styles = StyleSheet.create({
  container: { flex: 1 },

  header: { padding: 24 },
  headerTitle: { fontSize: 28, fontWeight: "900" },
  listContent: { padding: 16 },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  emptyText: { fontSize: 18, fontWeight: "600" },
  emptySubtext: { fontSize: 14, marginTop: 8 },
});
