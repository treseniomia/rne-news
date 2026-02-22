import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your Email Address!");
      return;
    }

    Alert.alert("Success", "Reset link sent! Check your email inbox.", [
      { text: "OK", onPress: () => router.back() },
    ]);
  };

  return {
    email,
    setEmail,
    handleResetPassword,
  };
};
