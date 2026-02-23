import { useAppTheme } from "@core/ThemeContext";
import { Skeleton } from "@shared/components/Skeleton";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const NewsDetailsSkeleton = () => {
  const { theme } = useAppTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 1. Hero Image Placeholder */}
        <Skeleton width="100%" height={300} />

        <View style={styles.content}>
          {/* 2. Category & Title Placeholders */}
          <Skeleton width={80} height={14} style={{ marginBottom: 12 }} />
          <Skeleton width="95%" height={28} style={{ marginBottom: 8 }} />
          <Skeleton width="70%" height={28} style={{ marginBottom: 16 }} />

          {/* 3. Author & Date Row */}
          <View style={styles.authorRow}>
            <Skeleton width={120} height={12} />
            <Skeleton width={100} height={12} />
          </View>

          {/* 4. Body Content Paragraphs */}
          <View style={styles.body}>
            {[1, 2, 3, 4, 5, 6].map((key) => (
              <Skeleton
                key={key}
                width={key % 3 === 0 ? "80%" : "100%"}
                height={16}
                style={{ marginBottom: 10 }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20 },
  authorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "transparent", // spacing only
  },
  body: { marginTop: 10 },
});
