import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { theme } from "../core/theme";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const SearchBar = ({ value, onChangeText }: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={20}
        color={theme.colors.text.muted}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
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
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: 12,
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  icon: { marginRight: 8 },
  input: {
    flex: 1,
    height: 45,
    color: theme.colors.text.main,
    fontSize: 16,
  },
});
