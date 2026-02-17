// import React from "react";
// import {
//   ActivityIndicator,
//   FlatList,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// // Dito natin kukunin ang tamang SafeAreaView
// import { useRouter } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { theme } from "../../../core/theme";
// import { NewsItem } from "../components/NewsItem";
// import { useNewsFeed } from "../hooks/useNewsFeed";

// export const NewsFeedScreen = () => {
//   const {
//     articles,
//     isLoading,
//     refresh,
//     selectedCategory,
//     filterByCategory,
//     categories,
//   } = useNewsFeed();

//   const router = useRouter();

//   if (isLoading && articles.length === 0) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator color={theme.colors.primary} size="large" />
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Pulse News</Text>
//       </View>

//       {/* Category Filter Bar */}
//       <View>
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.categoryList}
//         >
//           {categories.map((cat) => (
//             <TouchableOpacity
//               key={cat}
//               style={[
//                 styles.chip,
//                 selectedCategory === cat && styles.activeChip,
//               ]}
//               onPress={() => filterByCategory(cat)}
//             >
//               <Text
//                 style={[
//                   styles.chipText,
//                   selectedCategory === cat && styles.activeChipText,
//                 ]}
//               >
//                 {cat}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       </View>

//       {/* News List */}
//       <FlatList
//         data={articles}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <NewsItem
//             article={item}
//             onPress={(id) => router.push(`/details/${id}`)} // Ito ang magic!
//           />
//         )}
//         contentContainerStyle={styles.listContent}
//         onRefresh={refresh}
//         refreshing={isLoading}
//         ListEmptyComponent={
//           <View style={styles.center}>
//             <Text style={styles.emptyText}>No news in this category.</Text>
//           </View>
//         }
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: theme.colors.background,
//   },
//   header: {
//     paddingHorizontal: theme.spacing.lg,
//     paddingTop: theme.spacing.md,
//     paddingBottom: theme.spacing.sm,
//   },
//   headerTitle: {
//     fontSize: 32,
//     fontWeight: "900",
//     letterSpacing: -1,
//     color: theme.colors.text.main,
//   },
//   categoryList: {
//     paddingHorizontal: theme.spacing.lg,
//     paddingVertical: theme.spacing.md,
//     gap: 10,
//   },
//   chip: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: theme.borderRadius.round,
//     backgroundColor: theme.colors.surface,
//     borderWidth: 1,
//     borderColor: theme.colors.border,
//     marginRight: 8,
//   },
//   activeChip: {
//     backgroundColor: theme.colors.primary,
//     borderColor: theme.colors.primary,
//   },
//   chipText: {
//     fontSize: 14,
//     fontWeight: "600",
//     color: theme.colors.text.muted,
//   },
//   activeChipText: {
//     color: theme.colors.background,
//   },
//   listContent: {
//     padding: theme.spacing.md,
//   },
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: 50,
//   },
//   emptyText: {
//     color: theme.colors.text.muted,
//     fontSize: 16,
//   },
// });

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../../core/theme";
import { NewsItem } from "../components/NewsItem";
import { useNewsFeed } from "../hooks/useNewsFeed";

export const NewsFeedScreen = () => {
  const {
    articles,
    isLoading,
    refresh,
    selectedCategory,
    filterByCategory,
    categories,
  } = useNewsFeed();

  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  // Search and Category Filter Logic
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (isLoading && articles.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={theme.colors.primary} size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>RNE News</Text>
      </View>

      {/* 🔍 Search Bar - Dynamic filter for RN updates */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color={theme.colors.text.muted}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
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

      {/* Category Filter Bar */}
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.chip,
                selectedCategory === cat && styles.activeChip,
              ]}
              onPress={() => filterByCategory(cat)}
            >
              <Text
                style={[
                  styles.chipText,
                  selectedCategory === cat && styles.activeChipText,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* News List with Pull-to-Refresh */}
      <FlatList
        data={filteredArticles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NewsItem
            article={item}
            onPress={(id) => router.push(`/details/${id}`)}
          />
        )}
        contentContainerStyle={styles.listContent}
        onRefresh={refresh} // Pull to refresh logic
        refreshing={isLoading}
        ListEmptyComponent={
          <View style={styles.center}>
            <Ionicons
              name="search-outline"
              size={50}
              color={theme.colors.border}
            />
            <Text style={styles.emptyText}>
              No matches found for "{searchQuery}"
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: -1,
    color: theme.colors.text.main,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    marginHorizontal: theme.spacing.lg,
    paddingHorizontal: 12,
    height: 45,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.xs,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: theme.colors.text.main,
  },
  categoryList: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: theme.borderRadius.round,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginRight: 8,
  },
  activeChip: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  chipText: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.colors.text.muted,
  },
  activeChipText: {
    color: "#FFFFFF",
  },
  listContent: {
    padding: theme.spacing.md,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  emptyText: {
    color: theme.colors.text.muted,
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
});
