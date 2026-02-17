import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppTheme } from "../src/core/ThemeContext"; // Import the context hook

const MOCK_NOTIFS = [
  {
    id: "1",
    title: "New Architecture Alert 🚀",
    description:
      "React Native 0.78 is now stable. Bridgeless mode is enabled by default.",
    time: "2h ago",
    type: "update",
  },
  {
    id: "2",
    title: "Expo SDK 54 Beta",
    description:
      "New typed routes are now available for testing in your Pulse projects.",
    time: "5h ago",
    type: "expo",
  },
  {
    id: "3",
    title: "Bookmark Success",
    description:
      'You successfully saved "The Rise of Minimalist Interfaces" to your collection.',
    time: "1d ago",
    type: "system",
  },
];

export default function NotificationsScreen() {
  const { theme } = useAppTheme(); // Get the dynamic theme

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.colors.text.main }]}>
          Notifications
        </Text>
      </View>

      <FlatList
        data={MOCK_NOTIFS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.notifItem,
              { borderBottomColor: theme.colors.border },
            ]}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: theme.colors.surface },
              ]}
            >
              <Ionicons
                name={item.type === "update" ? "flash" : "notifications"}
                size={20}
                color={theme.colors.primary}
              />
            </View>
            <View style={styles.content}>
              <View style={styles.notifHeader}>
                <Text style={[styles.title, { color: theme.colors.text.main }]}>
                  {item.title}
                </Text>
                <Text style={[styles.time, { color: theme.colors.text.muted }]}>
                  {item.time}
                </Text>
              </View>
              <Text
                style={[styles.description, { color: theme.colors.text.muted }]}
              >
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { padding: 24 }, // spacing.lg equivalent
  headerTitle: {
    fontSize: 28,
    fontWeight: "900",
  },
  list: { paddingHorizontal: 24 },
  notifItem: {
    flexDirection: "row",
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  content: { flex: 1 },
  notifHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  title: { fontSize: 16, fontWeight: "700" },
  time: { fontSize: 12 },
  description: { fontSize: 14, lineHeight: 20 },
});
