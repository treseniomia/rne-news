import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

type LoginFormProps = {
  theme: any;
  styles: any;
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  showPassword: boolean;
  setShowPassword: (val: boolean) => void;
  handleLogin: () => void;
};

export const LoginForm = ({
  theme,
  styles,
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  handleLogin,
}: LoginFormProps) => {
  const router = useRouter();

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Email Address"
        placeholderTextColor={theme.colors.text.muted}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={theme.colors.text.muted}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.passwordInput}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={20}
            color={theme.colors.text.muted}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/(auth)/forgot-password")}
        style={styles.forgotPass}
      >
        <Text style={{ color: theme.colors.primary, fontWeight: "600" }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};
