import { useAppTheme } from "@core/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { NewsItem } from "@shared/components/NewsItem";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
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

  // Custom Hook for Logic
  const {
    articles,
    isLoading,
    refresh,
    selectedCategory,
    filterByCategory,
    categories,
  } = useNewsFeed();

  // Memoized Styles
  const styles = useMemo(() => createStyles(theme), [theme]);

  // Derived State: Filtering Logic
  const filteredArticles = useMemo(() => {
    return articles.filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [articles, searchQuery]);

  // 🦴 Loading State:
  if (isLoading && articles.length === 0) {
    return <NewsFeedSkeleton />;
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* 1. Header Section */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.colors.text.main }]}>
          RNE News
        </Text>
      </View>

      {/* 2. Search Section */}
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

      {/* 3. Horizontal Categories */}
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

      {/* 4. Main Feed */}
      <FlatList
        data={filteredArticles}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        onRefresh={refresh}
        refreshing={isLoading}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <NewsItem
            article={item}
            onPress={(id) => router.push(`/details/${id}`)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.center}>
            <Ionicons
              name="search-outline"
              size={50}
              color={theme.colors.border}
            />
            <Text
              style={[styles.emptyText, { color: theme.colors.text.muted }]}
            >
              No matches found
              {/* "{searchQuery}" */}
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};
