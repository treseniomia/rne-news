import { useAppTheme } from "@core/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppNotification } from "../types";

interface Props {
  item: AppNotification;
}

export const NotificationItem: React.FC<Props> = ({ item }) => {
  const { theme } = useAppTheme();

  return (
    <TouchableOpacity
      style={[styles.notifItem, { borderBottomColor: theme.colors.border }]}
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
        <Text style={[styles.description, { color: theme.colors.text.muted }]}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
