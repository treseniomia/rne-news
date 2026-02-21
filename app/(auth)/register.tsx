import { useAuth } from "@core/AuthCntxt";
import { useAppTheme } from "@core/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function RegisterScreen() {
  const { theme } = useAppTheme();
  const { login } = useAuth();
  const router = useRouter();

  // States for inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    if (!fullName || !email || !password) {
      console.log("Missing fields, Boss!");
      return;
    }
    // Simulation: Login agad after registration
    login(email);
    console.log("Registered and Logged in!");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={[
              styles.container,
              { backgroundColor: theme.colors.background },
            ]}
          >
            <View style={styles.header}>
              <Text style={[styles.title, { color: theme.colors.text.main }]}>
                Create Account
              </Text>
              <Text style={{ color: theme.colors.text.muted }}>
                Join PulseNews today, Boss!
              </Text>
            </View>

            <View style={styles.form}>
              {/* FULL NAME INPUT */}
              <TextInput
                placeholder="Full Name"
                placeholderTextColor={theme.colors.text.muted}
                value={fullName}
                onChangeText={setFullName}
                style={[
                  styles.input,
                  {
                    backgroundColor: theme.colors.surface,
                    color: theme.colors.text.main,
                  },
                ]}
              />

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

              {/* SIGN UP BUTTON */}
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: theme.colors.primary },
                ]}
                onPress={handleRegister}
              >
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>
            </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: 160,
  },
  title: {
    fontSize: 36,
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
    marginBottom: 32,
  },
  passwordInput: {
    flex: 1,
    padding: 18,
    fontSize: 16,
  },
  eyeIcon: {
    paddingHorizontal: 16,
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
  buttonText: {
    color: "white",
    fontWeight: "800",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
  },
});
