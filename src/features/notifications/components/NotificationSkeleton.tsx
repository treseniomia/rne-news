import { useAppTheme } from "@core/ThemeContext";
import { Skeleton } from "@shared/components/Skeleton";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const NotificationSkeleton = () => {
  const { theme } = useAppTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* 1. Static Header: Para laging kita yung "Notifications" text */}
      <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
        {/* <Text style={[styles.headerTitle, { color: theme.colors.text.main }]}>
          Notifications
        </Text> */}
      </View>

      {/* 2. Scrollable Skeleton List */}
      <View style={styles.listContainer}>
        {[1, 2, 3, 4, 5, 6].map((key) => (
          <View
            key={key}
            style={[styles.item, { borderBottomColor: theme.colors.border }]}
          >
            {/* Icon Placeholder */}
            <Skeleton width={42} height={42} style={{ borderRadius: 21 }} />

            <View style={styles.content}>
              <View style={styles.headerRow}>
                {/* Title Placeholder */}
                <Skeleton width="60%" height={16} style={{ marginBottom: 6 }} />
                {/* Time Placeholder */}
                <Skeleton width={40} height={12} />
              </View>
              {/* Description Placeholder */}
              <Skeleton width="85%" height={14} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24, // Match sa spacing ng screen mo
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: -1,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: "row",
    paddingVertical: 18,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
});
