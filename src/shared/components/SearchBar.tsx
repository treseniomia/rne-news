import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useAppTheme } from "../../core/ThemeContext"; // Import ang Context

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const SearchBar = ({ value, onChangeText }: SearchBarProps) => {
  const { theme } = useAppTheme(); // Gamitin ang dynamic theme

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
          borderRadius: 12, // theme.borderRadius.md equivalent
          marginHorizontal: 24, // theme.spacing.lg equivalent
          marginBottom: 16, // theme.spacing.md equivalent
        },
      ]}
    >
      <Ionicons
        name="search"
        size={20}
        color={theme.colors.text.muted}
        style={styles.icon}
      />
      <TextInput
        style={[styles.input, { color: theme.colors.text.main }]}
        placeholder="Search RN updates..."
        placeholderTextColor={theme.colors.text.muted}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderWidth: 1,
  },
  icon: { marginRight: 8 },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
  },
});
