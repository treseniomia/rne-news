import { useAuth } from "@core/AuthCntxt";
import { useAppTheme } from "@core/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function LoginScreen() {
  const { login } = useAuth();
  const { theme } = useAppTheme();
  const router = useRouter();

  // States for inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      console.log("Input missing, Boss!");
      return;
    }
    // LOGIN logic via AuthContext
    login(email);
    console.log("Login clicked!");
  };

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
          <View style={styles.header}>
            <Text style={[styles.title, { color: theme.colors.text.main }]}>
              PulseNews
            </Text>
            <Text style={{ color: theme.colors.text.muted }}>
              Welcome back, Boss!
            </Text>
          </View>

          <View style={styles.form}>
            {/* EMAIL INPUT */}
            <TextInput
              placeholder="Email Address"
              placeholderTextColor={theme.colors.text.muted}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={[
                styles.input,
                {
                  backgroundColor: theme.colors.surface,
                  color: theme.colors.text.main,
                },
              ]}
            />

            {/* PASSWORD INPUT WITH TOGGLE */}
            <View
              style={[
                styles.passwordContainer,
                { backgroundColor: theme.colors.surface },
              ]}
            >
              <TextInput
                placeholder="Password"
                placeholderTextColor={theme.colors.text.muted}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                style={[
                  styles.passwordInput,
                  { color: theme.colors.text.main },
                ]}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color={theme.colors.text.muted}
                />
              </TouchableOpacity>
            </View>

            {/* FORGOT PASSWORD - Properly Aligned */}
            <TouchableOpacity
              onPress={() => router.push("/(auth)/forgot-password")}
              style={styles.forgotPass}
            >
              <Text style={{ color: theme.colors.primary, fontWeight: "600" }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* LOGIN BUTTON */}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: theme.colors.primary }]}
              onPress={handleLogin}
            >
              <Text style={{ color: "white", fontWeight: "800", fontSize: 16 }}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={{ color: theme.colors.text.muted }}>
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
              <Text style={{ color: theme.colors.primary, fontWeight: "bold" }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 48,
  },
  title: {
    fontSize: 40,
    fontWeight: "900",
    marginBottom: 8,
    letterSpacing: -1,
  },
  form: {
    width: "100%",
  },
  input: {
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 12,
  },
  passwordInput: {
    flex: 1,
    padding: 18,
    fontSize: 16,
  },
  eyeIcon: {
    paddingHorizontal: 16,
  },
  forgotPass: {
    alignSelf: "flex-end",
    marginBottom: 32,
    paddingVertical: 4,
  },
  button: {
    width: "100%",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 48,
  },
});
