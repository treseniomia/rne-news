import React from "react";
import { Text, View } from "react-native";

type AuthHeaderProps = {
  title: string;
  subtitle: string;
  styles: any;
};

export const AuthHeader = ({ title, subtitle, styles }: AuthHeaderProps) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);
