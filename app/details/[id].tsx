import { useLocalSearchParams, useRouter } from "expo-router";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../src/core/theme";
import { useBookmarks } from "../../src/features/bookmarks/hooks/useBookmarks"; // Import the hook
import { useArticle } from "../../src/features/news-details/hooks/useArticle";

export default function ArticleDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { article, isLoading } = useArticle(id as string);

  // Gagamitin natin ang bookmark hook dito
  const { isSaved, handleToggle } = useBookmarks(article || undefined);

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={theme.colors.primary} />
      </View>
    );
  }

  if (!article) {
    return (
      <View style={styles.center}>
        <Text>Article not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: article.imageUrl }} style={styles.image} />

          {/* Navigation Overlay */}
          <SafeAreaView style={styles.navOverlay}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.navButton}
            >
              <Text style={styles.navText}>✕</Text>
            </TouchableOpacity>

            {/* Bookmark Button */}
            <TouchableOpacity
              onPress={handleToggle}
              style={[styles.navButton, isSaved && styles.activeBookmark]}
            >
              <Text style={styles.navText}>{isSaved ? "★" : "☆"}</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>

        <View style={styles.content}>
          <Text style={styles.category}>{article.category.toUpperCase()}</Text>
          <Text style={styles.title}>{article.title}</Text>

          <View style={styles.meta}>
            <Text style={styles.author}>By {article.author}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.date}>{article.publishedAt}</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.body}>
            {article.summary}
            {"\n\n"}
            This article is now part of your "Pulse" collection if you clicked
            the star icon above. AsyncStorage will keep this safe even if you
            restart the app!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  imageContainer: {
    width: "100%",
    height: 350,
    backgroundColor: theme.colors.border,
  },
  image: { width: "100%", height: "100%" },
  navOverlay: {
    position: "absolute",
    top: 0,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  activeBookmark: {
    backgroundColor: theme.colors.accent, // Magbabago kulay pag saved na
  },
  navText: { color: "white", fontSize: 20, fontWeight: "bold" },
  content: {
    padding: theme.spacing.lg,
    marginTop: -24,
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  category: {
    color: theme.colors.accent,
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: theme.colors.text.main,
    lineHeight: 34,
    marginBottom: 16,
  },
  meta: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  author: { fontWeight: "600", color: theme.colors.text.main, fontSize: 14 },
  dot: { marginHorizontal: 8, color: theme.colors.text.muted },
  date: { color: theme.colors.text.muted, fontSize: 14 },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginBottom: 20,
  },
  body: {
    fontSize: 18,
    lineHeight: 28,
    color: theme.colors.text.main,
    paddingBottom: 50,
  },
});
