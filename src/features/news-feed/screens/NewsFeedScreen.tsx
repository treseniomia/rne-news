import { useAppTheme } from "@core/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { NewsItem } from "@shared/components/NewsItem";
import { useRouter } from "expo-router";
import React, { useCallback, useMemo, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NewsFeedSkeleton } from "../components/NewsFeedSkeleton";
import { createStyles } from "../feed.styles";
import { useNewsFeed } from "../hooks/useNewsFeed";
import { NewsCategory } from "../types";

export const NewsFeedScreen = () => {
  const router = useRouter();
  const { theme } = useAppTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const {
    articles,
    isLoading,
    refresh,
    selectedCategory,
    filterByCategory,
    categories,
  } = useNewsFeed();

  const styles = useMemo(() => createStyles(theme), [theme]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [articles, searchQuery]);

  const renderArticle = useCallback(
    ({ item }: { item: any }) => (
      <NewsItem
        article={item}
        onPress={(id) => {
          router.push({
            pathname: "/details/[id]",
            params: { id: id },
          });
        }}
      />
    ),
    [router]
  );

  if (isLoading && articles.length === 0) {
    return <NewsFeedSkeleton />;
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.colors.text.main }]}>
          RNE News
        </Text>
      </View>

      <View
        style={[
          styles.searchContainer,
          {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <Ionicons
          name="search"
          size={20}
          color={theme.colors.text.muted}
          style={styles.searchIcon}
        />
        <TextInput
          style={[styles.searchInput, { color: theme.colors.text.main }]}
          placeholder="Search RN updates..."
          placeholderTextColor={theme.colors.text.muted}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery("")}>
            <Ionicons
              name="close-circle"
              size={20}
              color={theme.colors.text.muted}
            />
          </TouchableOpacity>
        )}
      </View>

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => filterByCategory(cat as NewsCategory)}
              style={[
                styles.chip,
                {
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.border,
                },
                selectedCategory === cat && {
                  backgroundColor: theme.colors.primary,
                  borderColor: theme.colors.primary,
                },
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  { color: theme.colors.text.muted },
                  selectedCategory === cat && { color: "#FFFFFF" },
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredArticles}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        onRefresh={refresh}
        refreshing={isLoading}
        renderItem={renderArticle}
        ListEmptyComponent={
          <View style={{ flex: 1, alignItems: "center", marginTop: 50 }}>
            <Ionicons
              name="search-outline"
              size={50}
              color={theme.colors.border}
            />
            <Text style={{ color: theme.colors.text.muted }}>
              No matches found
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};
