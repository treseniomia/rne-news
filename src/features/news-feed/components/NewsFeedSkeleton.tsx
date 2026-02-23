import { useAppTheme } from "@core/ThemeContext";
import { Skeleton } from "@shared/components/Skeleton";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const NewsFeedSkeleton = () => {
  const { theme } = useAppTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* 1. Static Header */}
      <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
        <Text style={[styles.headerTitle, { color: theme.colors.text.main }]}>
          RNE News
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 2. Search Bar Placeholder */}
        <View style={styles.searchContainer}>
          <Skeleton width="100%" height={45} style={{ borderRadius: 12 }} />
        </View>

        {/* 3. Category Chips Placeholder */}
        <View style={styles.categoryList}>
          {[1, 2, 3, 4, 5].map((key) => (
            <Skeleton
              key={key}
              width={key === 1 ? 60 : 80}
              height={36}
              style={{ borderRadius: 25, marginRight: 10 }}
            />
          ))}
        </View>

        {/* 4. News Cards Placeholder */}
        <View style={styles.listContent}>
          {[1, 2].map((key) => (
            <View
              key={key}
              style={[styles.card, { borderColor: theme.colors.border }]}
            >
              {/* Image Placeholder */}
              <Skeleton
                width="100%"
                height={200}
                style={{ borderRadius: 12 }}
              />

              <View style={styles.cardInfo}>
                {/* Category & Title */}
                <Skeleton
                  width={80}
                  height={12}
                  style={{ marginBottom: 8, marginTop: 12 }}
                />
                <Skeleton width="90%" height={20} style={{ marginBottom: 6 }} />
                <Skeleton
                  width="70%"
                  height={20}
                  style={{ marginBottom: 12 }}
                />

                {/* Summary */}
                <Skeleton
                  width="100%"
                  height={14}
                  style={{ marginBottom: 4 }}
                />
                <Skeleton
                  width="100%"
                  height={14}
                  style={{ marginBottom: 12 }}
                />

                {/* Footer (Author/Date) */}
                <Skeleton width={150} height={12} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 24, paddingBottom: 8 },
  headerTitle: { fontSize: 32, fontWeight: "900", letterSpacing: -1 },
  searchContainer: { paddingHorizontal: 24, marginTop: 8 },
  categoryList: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  listContent: { paddingHorizontal: 24 },
  card: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 20,
  },
  cardInfo: { marginTop: 4 },
});
