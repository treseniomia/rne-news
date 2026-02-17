import { Ionicons } from "@expo/vector-icons";
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
import { useAppTheme } from "../../src/core/ThemeContext"; // Import dynamic theme
import { useBookmarks } from "../../src/features/bookmarks/hooks/useBookmarks";
import { useArticle } from "../../src/features/news-details/hooks/useArticle";

export default function ArticleDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { theme } = useAppTheme(); // Get the current theme
  const { article, isLoading } = useArticle(id as string);

  const { isSaved, handleToggle } = useBookmarks(article || undefined);

  if (isLoading) {
    return (
      <View
        style={[styles.center, { backgroundColor: theme.colors.background }]}
      >
        <ActivityIndicator color={theme.colors.primary} size="large" />
      </View>
    );
  }

  if (!article) {
    return (
      <View
        style={[styles.center, { backgroundColor: theme.colors.background }]}
      >
        <Text style={{ color: theme.colors.text.main }}>
          Article not found.
        </Text>
      </View>
    );
  }

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.imageContainer,
            { backgroundColor: theme.colors.border },
          ]}
        >
          <Image source={{ uri: article.imageUrl }} style={styles.image} />

          {/* Navigation Overlay */}
          <SafeAreaView style={styles.navOverlay}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.navButton}
            >
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>

            {/* Bookmark Button */}
            <TouchableOpacity
              onPress={handleToggle}
              style={[
                styles.navButton,
                isSaved && { backgroundColor: theme.colors.primary },
              ]}
            >
              <Ionicons
                name={isSaved ? "bookmark" : "bookmark-outline"}
                size={22}
                color="white"
              />
            </TouchableOpacity>
          </SafeAreaView>
        </View>

        <View
          style={[styles.content, { backgroundColor: theme.colors.background }]}
        >
          <Text style={[styles.category, { color: theme.colors.primary }]}>
            {article.category.toUpperCase()}
          </Text>
          <Text style={[styles.title, { color: theme.colors.text.main }]}>
            {article.title}
          </Text>

          <View style={styles.meta}>
            <Text style={[styles.author, { color: theme.colors.text.main }]}>
              By {article.author}
            </Text>
            <Text style={[styles.dot, { color: theme.colors.text.muted }]}>
              •
            </Text>
            <Text style={[styles.date, { color: theme.colors.text.muted }]}>
              {article.publishedAt}
            </Text>
          </View>

          <View
            style={[styles.divider, { backgroundColor: theme.colors.border }]}
          />

          <Text style={[styles.body, { color: theme.colors.text.main }]}>
            {article.summary}
            {"\n\n"}
            This article is now part of your "Pulse" collection if you clicked
            the bookmark icon above. AsyncStorage will keep this safe even if
            you restart the app!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  imageContainer: {
    width: "100%",
    height: 350,
  },
  image: { width: "100%", height: "100%" },
  navOverlay: {
    position: "absolute",
    top: 10,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 24, // spacing.lg equivalent
    marginTop: -24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  category: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 34,
    marginBottom: 16,
  },
  meta: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  author: { fontWeight: "600", fontSize: 14 },
  dot: { marginHorizontal: 8 },
  date: { fontSize: 14 },
  divider: {
    height: 1,
    marginBottom: 20,
  },
  body: {
    fontSize: 18,
    lineHeight: 28,
    paddingBottom: 50,
  },
});
