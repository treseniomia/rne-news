import { useAppTheme } from "@core/ThemeContext";
import { AuthHeader } from "@features/auth/components/AuthHeader";
import { LoginForm } from "@features/auth/components/LoginForm";
import { useLogin } from "@features/auth/hooks/useLogin";
import { createAuthStyles } from "@features/auth/styles/auth.styles";
import { useRouter } from "expo-router";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
// import { AuthFooter } from "../../src/features/auth/components/AuthFooter"; // (Optional separate component)

export default function LoginScreen() {
  const { theme } = useAppTheme();
  const router = useRouter();
  const loginLogic = useLogin();
  const styles = createAuthStyles(theme);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[
            styles.container,
            { backgroundColor: theme.colors.background },
          ]}
        >
          <AuthHeader
            title="RNE News"
            subtitle="Welcome back!"
            styles={styles}
          />

          <LoginForm {...loginLogic} theme={theme} styles={styles} />

          <View style={styles.footer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: theme.colors.text.muted }}>
                Don't have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
                <Text
                  style={{ color: theme.colors.primary, fontWeight: "bold" }}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
