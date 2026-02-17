import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { theme } from "../src/core/theme";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.secondary,
          tabBarLabelStyle: { fontSize: 12, fontWeight: "500" },
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: theme.colors.border,
            height: 85,
            paddingTop: 10,
            paddingBottom: 25,
            backgroundColor: theme.colors.background,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Feed",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="newspaper-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="bookmarks"
          options={{
            title: "Saved",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bookmark-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="notifications"
          options={{
            title: "Alerts",
            tabBarBadge: 3,
            tabBarBadgeStyle: { backgroundColor: "#FF4444", color: "white" },
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="notifications-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />

        {/* Hidden Details Route */}
        <Tabs.Screen name="details/[id]" options={{ href: null }} />
      </Tabs>
    </SafeAreaProvider>
  );
}
