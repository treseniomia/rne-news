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
import { theme } from "../src/core/theme";

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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <FlatList
        data={MOCK_NOTIFS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.notifItem}>
            <View style={styles.iconContainer}>
              <Ionicons
                name={item.type === "update" ? "flash" : "notifications"}
                size={20}
                color={theme.colors.primary}
              />
            </View>
            <View style={styles.content}>
              <View style={styles.notifHeader}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  header: { padding: theme.spacing.lg },
  headerTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: theme.colors.text.main,
  },
  list: { paddingHorizontal: theme.spacing.lg },
  notifItem: {
    flexDirection: "row",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.surface,
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
  title: { fontSize: 16, fontWeight: "700", color: theme.colors.text.main },
  time: { fontSize: 12, color: theme.colors.text.muted },
  description: { fontSize: 14, color: theme.colors.text.muted, lineHeight: 20 },
});
