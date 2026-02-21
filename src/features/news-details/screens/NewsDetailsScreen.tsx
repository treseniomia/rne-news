import { useAppTheme } from "@core/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useBookmarks } from "@features/bookmarks/hooks/useBookmarks";
import { useRouter } from "expo-router";
import React, { useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Animated,
  Image,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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

  const onShare = async () => {
    try {
      await Share.share({
        message: `${article?.title}\n\nBasahin sa PulseNews!`,
        title: article?.title,
      });
    } catch (error) {
      Alert.alert("Error", "Hindi ma-ishare ang article.");
    }
  };

  const progressHeight = scrollY.interpolate({
    inputRange: [0, Math.max(1, contentHeight)],
    outputRange: [0, 150],
    extrapolate: "clamp",
  });

  if (isLoading || !article) {
    return (
      <View
        style={[styles.center, { backgroundColor: theme.colors.background }]}
      >
        <ActivityIndicator color={theme.colors.primary} size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.navOverlay}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.navButton}
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity onPress={onShare} style={styles.navButton}>
            <Ionicons name="share-outline" size={22} color="white" />
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
              size={22}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.fixedTopSection}>
        <Image source={{ uri: article.imageUrl }} style={styles.image} />
        <View
          style={[
            styles.headerContent,
            { backgroundColor: theme.colors.background },
          ]}
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
            <Text style={styles.dot}>•</Text>
            <Text style={[styles.date, { color: theme.colors.text.muted }]}>
              {article.publishedAt}
            </Text>
          </View>
        </View>
        <View style={styles.divider} />
      </View>

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
        contentContainerStyle={{ paddingBottom: insets.bottom + 40 }}
      >
        <Text style={[styles.bodyText, { color: theme.colors.text.main }]}>
          {article.summary}
        </Text>
      </Animated.ScrollView>
    </View>
  );
};
