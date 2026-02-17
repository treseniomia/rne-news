import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../src/core/theme";
import { useBookmarks } from "../src/features/bookmarks/hooks/useBookmarks";

export default function ProfileScreen() {
  const { savedArticles } = useBookmarks();

  const SettingItem = ({
    icon,
    title,
    subtitle,
    isLast,
    isDestructive,
  }: {
    icon: any;
    title: string;
    subtitle?: string;
    isLast?: boolean;
    isDestructive?: boolean;
  }) => (
    <TouchableOpacity
      style={[styles.settingItem, isLast && { borderBottomWidth: 0 }]}
    >
      <View
        style={[
          styles.settingIcon,
          isDestructive && { backgroundColor: "#FFE5E5" },
        ]}
      >
        <Ionicons
          name={icon}
          size={22}
          color={isDestructive ? "#FF4444" : theme.colors.primary}
        />
      </View>
      <View style={styles.settingText}>
        <Text
          style={[styles.settingTitle, isDestructive && { color: "#FF4444" }]}
        >
          {title}
        </Text>
        {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
      </View>
      <Ionicons
        name="chevron-forward"
        size={20}
        color={theme.colors.text.muted}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header / Stats Section */}
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <Text style={styles.name}>React Native Dev</Text>
          <Text style={styles.bio}>Tracking RN 0.78 & Expo 54 Updates</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{savedArticles.length}</Text>
              <Text style={styles.statLabel}>Saved</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Read</Text>
            </View>
          </View>
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Settings</Text>
          <SettingItem
            icon="moon-outline"
            title="Dark Mode"
            subtitle="System default"
          />
          <SettingItem
            icon="language-outline"
            title="Language"
            subtitle="English (US)"
            isLast
          />
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <SettingItem icon="help-circle-outline" title="Help Center" />
          <SettingItem
            icon="information-circle-outline"
            title="About Pulse News"
            isLast
          />
        </View>

        {/* Account Section */}
        <View style={[styles.section, { marginBottom: 40 }]}>
          <Text style={styles.sectionTitle}>Account</Text>
          <SettingItem
            icon="log-out-outline"
            title="Log Out"
            isDestructive
            isLast
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  header: {
    alignItems: "center",
    padding: theme.spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  avatarText: { color: "white", fontSize: 28, fontWeight: "bold" },
  name: { fontSize: 22, fontWeight: "800", color: theme.colors.text.main },
  bio: { color: theme.colors.text.muted, marginTop: 4, fontSize: 14 },
  statsContainer: {
    flexDirection: "row",
    marginTop: 24,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: 16,
    width: "100%",
  },
  statBox: { flex: 1, alignItems: "center" },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.text.main,
  },
  statLabel: { fontSize: 12, color: theme.colors.text.muted },
  statDivider: { width: 1, backgroundColor: theme.colors.border },
  section: { marginTop: 24, paddingHorizontal: theme.spacing.lg },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: theme.colors.text.muted,
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.border,
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: theme.colors.surface,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  settingText: { flex: 1 },
  settingTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.colors.text.main,
  },
  settingSubtitle: { fontSize: 12, color: theme.colors.text.muted },
});
