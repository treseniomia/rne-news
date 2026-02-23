import { useAppTheme } from "@core/ThemeContext";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
}

export const ScreenHeader: React.FC<Props> = ({ title }) => {
  const { theme } = useAppTheme();

  return (
    <View style={styles.header}>
      <Text style={[styles.headerTitle, { color: theme.colors.text.main }]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { padding: 20 },
  headerTitle: { fontSize: 28, fontWeight: "900" },
});
