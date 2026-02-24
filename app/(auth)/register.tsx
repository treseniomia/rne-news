import { useAppTheme } from "@core/ThemeContext";
import { AuthHeader } from "@features/auth/components/AuthHeader";
import { RegisterForm } from "@features/auth/components/RegisterForm";
import { SocialAuth } from "@features/auth/components/SocialAuth";
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
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            {/* MAIN CONTENT: Dito yung Header at Form */}
            <ScrollView
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
              bounces={false}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.topSection}>
                <AuthHeader
                  title="Create Account"
                  subtitle="Join RNE News today!"
                  styles={styles}
                />
                <View style={styles.formContainer}>
                  <RegisterForm
                    {...registerLogic}
                    theme={theme}
                    styles={styles}
                  />
                </View>
              </View>
            </ScrollView>

            {/* PINNED FOOTER: Mananatili sa baba para consistent sa Login */}
            <View style={styles.pinnedFooter}>
              <SocialAuth
                theme={theme}
                onGooglePress={registerLogic.handleGoogleRegister}
                onApplePress={registerLogic.handleAppleRegister}
                onFacebookPress={registerLogic.handleFacebookRegister}
              />

              <View style={styles.footerLinkContainer}>
                <Text style={{ color: theme.colors.text.muted }}>
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                  <Text
                    style={{ color: theme.colors.primary, fontWeight: "bold" }}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}
