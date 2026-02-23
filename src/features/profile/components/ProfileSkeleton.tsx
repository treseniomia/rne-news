import { useAppTheme } from "@core/ThemeContext";
import { Skeleton } from "@shared/components/Skeleton";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ProfileSkeleton = () => {
  const { theme } = useAppTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={[styles.header, { paddingTop: insets.top + 16 }]}></View>

      <View style={styles.content}>
        {/* Avatar Section */}
        <View style={styles.profileHeader}>
          <Skeleton
            width={80}
            height={80}
            style={{ borderRadius: 40, marginBottom: 16 }}
          />
          <Skeleton width={180} height={24} style={{ marginBottom: 8 }} />
          <Skeleton width={140} height={14} />
        </View>

        {/* Stats Card (Fixed theme.colors.surface) */}
        <View
          style={[
            styles.statsCard,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
            },
          ]}
        >
          <View style={styles.statItem}>
            <Skeleton width={40} height={20} style={{ marginBottom: 4 }} />
            <Skeleton width={60} height={12} />
          </View>
          <View
            style={[styles.divider, { backgroundColor: theme.colors.border }]}
          />
          <View style={styles.statItem}>
            <Skeleton width={40} height={20} style={{ marginBottom: 4 }} />
            <Skeleton width={60} height={12} />
          </View>
        </View>

        {/* Menu Section */}
        <View style={styles.menuSection}>
          <Skeleton
            width={100}
            height={12}
            style={{ marginBottom: 20, marginLeft: 8 }}
          />
          {[1, 2, 3].map((key) => (
            <View
              key={key}
              style={[
                styles.menuItem,
                { borderBottomColor: theme.colors.border },
              ]}
            >
              <View style={styles.menuLeft}>
                <Skeleton
                  width={32}
                  height={32}
                  style={{ borderRadius: 8, marginRight: 12 }}
                />
                <Skeleton width={120} height={16} />
              </View>
              <Skeleton width={16} height={16} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 24, paddingBottom: 8 },
  headerTitle: { fontSize: 32, fontWeight: "900", letterSpacing: -1 },
  content: { flex: 1, paddingHorizontal: 24 },
  profileHeader: { alignItems: "center", marginTop: 20, marginBottom: 24 },
  statsCard: {
    flexDirection: "row",
    height: 80,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: "center",
    marginBottom: 32,
  },
  statItem: { flex: 1, alignItems: "center" },
  divider: { width: 1, height: 40 },
  menuSection: { marginTop: 8 },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  menuLeft: { flexDirection: "row", alignItems: "center" },
});
