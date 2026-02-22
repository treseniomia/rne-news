import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

type RegisterFormProps = {
  theme: any;
  styles: any;
  fullName: string;
  setFullName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  showPassword: boolean;
  setShowPassword: (val: boolean) => void;
  handleRegister: () => void;
};

export const RegisterForm = ({
  theme,
  styles,
  fullName,
  setFullName,
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  handleRegister,
}: RegisterFormProps) => (
  <View style={styles.form}>
    <TextInput
      placeholder="Full Name"
      placeholderTextColor={theme.colors.text.muted}
      value={fullName}
      onChangeText={setFullName}
      style={styles.input}
    />

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
      style={[styles.button, { marginTop: 10 }]}
      onPress={handleRegister}
    >
      <Text style={styles.buttonText}>SIGN UP</Text>
    </TouchableOpacity>
  </View>
);
