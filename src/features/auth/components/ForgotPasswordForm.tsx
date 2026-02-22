import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

type ForgotPassFormProps = {
  theme: any;
  styles: any;
  email: string;
  setEmail: (val: string) => void;
  handleResetPassword: () => void;
};

export const ForgotPasswordForm = ({
  theme,
  styles,
  email,
  setEmail,
  handleResetPassword,
}: ForgotPassFormProps) => (
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

    <TouchableOpacity
      style={[styles.button, { marginTop: 10 }]}
      onPress={handleResetPassword}
    >
      <Text style={styles.buttonText}>SEND RESET LINK</Text>
    </TouchableOpacity>
  </View>
);
