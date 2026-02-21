import { useAppTheme } from "@core/ThemeContext";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NotificationItem } from "../components/NotificationItem";
import { useNotifications } from "../hooks/useNotifications"; // Gamitin ang bagong hook

export const NotificationsScreen = () => {
  const { theme } = useAppTheme();
  const { notifications, isLoading, refresh } = useNotifications();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.colors.text.main }]}>
          Notifications
        </Text>
      </View>

      {isLoading && notifications.length === 0 ? (
        <View style={styles.center}>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </View>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          onRefresh={refresh}
          refreshing={isLoading}
          renderItem={({ item }) => <NotificationItem item={item} />}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { padding: 24 },
  headerTitle: { fontSize: 28, fontWeight: "900" },
  list: { paddingHorizontal: 24 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
