import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SocialAuthProps = {
  theme: any;
  onGooglePress: () => void;
  onApplePress: () => void;
  onFacebookPress: () => void;
};

export const SocialAuth = ({
  theme,
  onGooglePress,
  onApplePress,
  onFacebookPress,
}: SocialAuthProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.dividerContainer}>
        <View style={[styles.line, { backgroundColor: theme.colors.border }]} />
        <Text style={[styles.dividerText, { color: theme.colors.text.muted }]}>
          Or continue with
        </Text>
        <View style={[styles.line, { backgroundColor: theme.colors.border }]} />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={onGooglePress}
          style={[
            styles.socialButton,
            {
              borderColor: theme.colors.border,
              backgroundColor: theme.colors.background,
            },
          ]}
        >
          <Ionicons name="logo-google" size={24} color="#DB4437" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onApplePress}
          style={[
            styles.socialButton,
            {
              borderColor: theme.colors.border,
              backgroundColor: theme.colors.background,
            },
          ]}
        >
          <Ionicons
            name="logo-apple"
            size={24}
            color={theme.colors.text.main}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onFacebookPress}
          style={[
            styles.socialButton,
            {
              borderColor: theme.colors.border,
              backgroundColor: theme.colors.background,
            },
          ]}
        >
          <Ionicons name="logo-facebook" size={24} color="#4267B2" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 24, width: "100%" },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  line: { flex: 1, height: 1 },
  dividerText: { marginHorizontal: 10, fontSize: 12, fontWeight: "500" },
  buttonRow: { flexDirection: "row", justifyContent: "space-between", gap: 15 },
  socialButton: {
    flex: 1,
    height: 56,
    borderRadius: 16,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
