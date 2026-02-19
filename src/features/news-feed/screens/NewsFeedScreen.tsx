// import { Ionicons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import React, { useState } from "react";
// import {
//   ActivityIndicator,
//   FlatList,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
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
//   const [searchQuery, setSearchQuery] = useState("");

//   // Search and Category Filter Logic
//   const filteredArticles = articles.filter((article) => {
//     const matchesCategory =
//       selectedCategory === "All" || article.category === selectedCategory;
//     const matchesSearch = article.title
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

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
//         <Text style={styles.headerTitle}>RNE News</Text>
//       </View>

//       {/* 🔍 Search Bar - Dynamic filter for RN updates */}
//       <View style={styles.searchContainer}>
//         <Ionicons
//           name="search"
//           size={20}
//           color={theme.colors.text.muted}
//           style={styles.searchIcon}
//         />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search RN updates..."
//           placeholderTextColor={theme.colors.text.muted}
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//         {searchQuery.length > 0 && (
//           <TouchableOpacity onPress={() => setSearchQuery("")}>
//             <Ionicons
//               name="close-circle"
//               size={20}
//               color={theme.colors.text.muted}
//             />
//           </TouchableOpacity>
//         )}
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

//       {/* News List with Pull-to-Refresh */}
//       <FlatList
//         data={filteredArticles}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <NewsItem
//             article={item}
//             onPress={(id) => router.push(`/details/${id}`)}
//           />
//         )}
//         contentContainerStyle={styles.listContent}
//         onRefresh={refresh} // Pull to refresh logic
//         refreshing={isLoading}
//         ListEmptyComponent={
//           <View style={styles.center}>
//             <Ionicons
//               name="search-outline"
//               size={50}
//               color={theme.colors.border}
//             />
//             <Text style={styles.emptyText}>
//               No matches found for "{searchQuery}"
//             </Text>
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
//   searchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: theme.colors.surface,
//     borderRadius: theme.borderRadius.md,
//     marginHorizontal: theme.spacing.lg,
//     paddingHorizontal: 12,
//     height: 45,
//     borderWidth: 1,
//     borderColor: theme.colors.border,
//     marginBottom: theme.spacing.xs,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: theme.colors.text.main,
//   },
//   categoryList: {
//     paddingHorizontal: theme.spacing.lg,
//     paddingVertical: theme.spacing.md,
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
//     color: "#FFFFFF",
//   },
//   listContent: {
//     padding: theme.spacing.md,
//   },
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: 100,
//   },
//   emptyText: {
//     color: theme.colors.text.muted,
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: "center",
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
import { useAppTheme } from "../../../core/ThemeContext"; // Gamitin ang context imbis na static theme
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
  const { theme } = useAppTheme(); // Dito natin huhugutin ang dynamic colors
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
      <View
        style={[styles.center, { backgroundColor: theme.colors.background }]}
      >
        <ActivityIndicator color={theme.colors.primary} size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.colors.text.main }]}>
          RNE News
        </Text>
      </View>

      {/* 🔍 Search Bar - Dynamic filter */}
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
                {
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.border,
                },
                selectedCategory === cat && {
                  backgroundColor: theme.colors.primary,
                  borderColor: theme.colors.primary,
                },
              ]}
              onPress={() => filterByCategory(cat)}
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
        onRefresh={refresh}
        refreshing={isLoading}
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
  },
  header: {
    paddingHorizontal: 24, // spacing.lg
    paddingTop: 16, // spacing.md
    paddingBottom: 8, // spacing.sm
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: -1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12, // borderRadius.md
    marginHorizontal: 24,
    paddingHorizontal: 12,
    height: 45,
    borderWidth: 1,
    marginBottom: 4, // spacing.xs
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  categoryList: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 10,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 25, // borderRadius.round
    borderWidth: 1,
    marginRight: 8,
  },
  chipText: {
    fontSize: 14,
    fontWeight: "600",
  },
  listContent: {
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
});
