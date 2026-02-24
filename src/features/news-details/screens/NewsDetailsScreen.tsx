import { useAppTheme } from "@core/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useBookmarks } from "@features/bookmarks/hooks/useBookmarks";
import { useRouter } from "expo-router";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Image,
  Share,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NewsDetailsSkeleton } from "../components/NewsDetailsSkeleton";
import createStyles from "../details.styles";
import { useArticle } from "../hooks/useArticle";

interface Props {
  id: string;
}

export const NewsDetailsScreen: React.FC<Props> = ({ id }) => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { theme } = useAppTheme();

  const { article, isLoading } = useArticle(id);
  const { isSaved, handleToggle } = useBookmarks(article || undefined);

  const styles = useMemo(() => createStyles(theme, insets), [theme, insets]);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = useState(0);

  const onShare = useCallback(async () => {
    if (!article) return;
    try {
      await Share.share({
        message: `${article.title}\n\nRead more on RNE News!`,
        title: article.title,
      });
    } catch (error) {
      Alert.alert("Error", "Can't share this article.");
    }
  }, [article]);

  const progressHeight = scrollY.interpolate({
    inputRange: [0, Math.max(1, contentHeight - 500)],
    outputRange: [0, 150],
    extrapolate: "clamp",
  });

  if (isLoading || !article) {
    return <NewsDetailsSkeleton />;
  }

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <StatusBar barStyle="light-content" />

      {/* 1. Floating Header Controls */}
      <View style={[styles.navOverlay, { paddingTop: insets.top + 10 }]}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.navButton}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <View style={{ flexDirection: "row", gap: 12 }}>
          <TouchableOpacity onPress={onShare} style={styles.navButton}>
            <Ionicons name="share-social-outline" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleToggle}
            style={[
              styles.navButton,
              isSaved && { backgroundColor: theme.colors.primary },
            ]}
          >
            <Ionicons
              name={isSaved ? "bookmark" : "bookmark-outline"}
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* 2. Side Reading Progress */}
      <View style={styles.sideProgressContainer}>
        <Animated.View
          style={[
            styles.sideProgressBar,
            { height: progressHeight, backgroundColor: theme.colors.primary },
          ]}
        />
      </View>

      <Animated.ScrollView
        onContentSizeChange={(_, height) => setContentHeight(height)}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* 3. Hero Image Section */}
        <Image
          source={{
            uri: article.imageUrl || "https://via.placeholder.com/800",
          }}
          style={styles.image}
        />

        {/* 4. Content Area */}
        <View style={styles.headerContent}>
          <Text style={[styles.category, { color: theme.colors.primary }]}>
            {article.category?.toUpperCase()}
          </Text>
          <Text style={[styles.title, { color: theme.colors.text.main }]}>
            {article.title}
          </Text>

          <View style={styles.meta}>
            <Text style={[styles.author, { color: theme.colors.text.main }]}>
              {article.author}
            </Text>
            <Text style={[styles.dot, { color: theme.colors.text.muted }]}>
              •
            </Text>
            <Text style={[styles.date, { color: theme.colors.text.muted }]}>
              {article.publishedAt}
            </Text>
          </View>

          <View style={styles.divider} />

          {/* Article Summary / Body */}
          <Text
            style={[
              styles.bodyText,
              { color: theme.colors.text.main, marginTop: 20 },
            ]}
          >
            {article.summary}
          </Text>

          {/* Action Button */}
          {article.url && (
            <TouchableOpacity
              style={styles.readMoreBtn}
              onPress={() =>
                Alert.alert("Coming Soon", "WebView feature is being prepared!")
              }
            >
              <Text
                style={{
                  color: theme.colors.text.main,
                  fontWeight: "800",
                  fontSize: 16,
                }}
              >
                READ FULL ARTICLE
              </Text>
              <Ionicons
                name="open-outline"
                size={18}
                color={theme.colors.text.main}
              />
            </TouchableOpacity>
          )}

          <View style={{ height: insets.bottom + 40 }} />
        </View>
      </Animated.ScrollView>
    </View>
  );
};
