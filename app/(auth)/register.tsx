import { useAppTheme } from "@core/ThemeContext";
import { AuthHeader } from "@features/auth/components/AuthHeader";
import { RegisterForm } from "@features/auth/components/RegisterForm";
import { SocialAuth } from "@features/auth/components/SocialAuth"; // Import ito
import { useRegister } from "@features/auth/hooks/useRegister";
import { createAuthStyles } from "@features/auth/styles/auth.styles";
import { useRouter } from "expo-router";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function RegisterScreen() {
  const { theme } = useAppTheme();
  const router = useRouter();
  const registerLogic = useRegister();
  const styles = createAuthStyles(theme);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={[
              styles.container,
              { backgroundColor: theme.colors.background },
            ]}
          >
            <AuthHeader
              title="Create Account"
              subtitle="Join RNE News today!"
              styles={styles}
            />

            <RegisterForm {...registerLogic} theme={theme} styles={styles} />

            <SocialAuth
              theme={theme}
              onGooglePress={registerLogic.handleGoogleRegister}
              onApplePress={registerLogic.handleAppleRegister}
              onFacebookPress={registerLogic.handleFacebookRegister}
            />

            <View style={styles.footer}>
              <Text style={{ color: theme.colors.text.muted }}>
                Already have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.back()}>
                <Text
                  style={{ color: theme.colors.primary, fontWeight: "bold" }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
