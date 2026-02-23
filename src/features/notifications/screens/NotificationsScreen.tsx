import { ScreenHeader } from "@/shared/components/ScreenHeader";
import { useAppTheme } from "@core/ThemeContext";
import React from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NotificationItem } from "../components/NotificationItem";
import { NotificationSkeleton } from "../components/NotificationSkeleton";
import { useNotifications } from "../hooks/useNotifications";

export const NotificationsScreen = () => {
  const { theme } = useAppTheme();

  const { notifications, isLoading } = useNotifications();

  if (isLoading) {
    return <NotificationSkeleton />;
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.colors.text.main }]}>
          Notifications
        </Text>
      </View> */}
      <ScreenHeader title="Notifications" />

      {isLoading && notifications.length === 0 ? (
        <View style={styles.center}>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </View>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          refreshing={isLoading}
          renderItem={({ item }) => <NotificationItem item={item} />}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  // header: { padding: 24 },
  // headerTitle: { fontSize: 28, fontWeight: "900" },
  list: { paddingHorizontal: 24 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
