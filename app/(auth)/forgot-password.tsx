import { useAppTheme } from "@core/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { AuthHeader } from "@features/auth/components/AuthHeader";
import { ForgotPasswordForm } from "@features/auth/components/ForgotPasswordForm";
import { useForgotPassword } from "@features/auth/hooks/useForgotPassword";
import { createAuthStyles } from "@features/auth/styles/auth.styles";
import { useRouter } from "expo-router";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ForgotPasswordScreen() {
  const { theme } = useAppTheme();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const styles = createAuthStyles(theme);
  const forgotLogic = useForgotPassword();

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
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              position: "absolute",
              top: insets.top + 10, // Dynamic gap base sa notch ng phone
              left: 24,
              zIndex: 10,
              padding: 8,
              marginLeft: -8, // Para pantay ang icon sa alignment ng form
            }}
          >
            <Ionicons
              name="arrow-back"
              size={26}
              color={theme.colors.text.main}
            />
          </TouchableOpacity>

          <AuthHeader
            title="Reset Password"
            subtitle="Enter your email to get a reset link!"
            styles={styles}
          />

          <ForgotPasswordForm {...forgotLogic} theme={theme} styles={styles} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
