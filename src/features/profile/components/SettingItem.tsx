import { useAppTheme } from "@core/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SettingItemProps } from "../types";

export const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  title,
  subtitle,
  isLast,
  isDestructive,
  onPress,
}) => {
  const { theme } = useAppTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { borderBottomColor: theme.colors.border },
        isLast && { borderBottomWidth: 0 },
      ]}
    >
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: theme.colors.surface },
          isDestructive && { backgroundColor: "#FFE5E5" },
        ]}
      >
        <Ionicons
          name={icon}
          size={22}
          color={isDestructive ? "#FF4444" : theme.colors.primary}
        />
      </View>
      <View style={styles.content}>
        <Text
          style={[
            styles.title,
            { color: theme.colors.text.main },
            isDestructive && { color: "#FF4444" },
          ]}
        >
          {title}
        </Text>
        {subtitle && (
          <Text style={[styles.subtitle, { color: theme.colors.text.muted }]}>
            {subtitle}
          </Text>
        )}
      </View>
      <Ionicons
        name="chevron-forward"
        size={20}
        color={theme.colors.text.muted}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  content: { flex: 1 },
  title: { fontSize: 16, fontWeight: "600" },
  subtitle: { fontSize: 12 },
});
