import { useAuth } from "@core/AuthCntxt";
import { useState } from "react";

export const useLogin = () => {
  const { login } = useAuth(); // Kunin ang login function mula sa global context

  // Local states para sa inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      console.log("Input missing!");
      return;
    }
    // LOGIN logic via AuthContext
    login(email);
    console.log("Login clicked!");
  };

  // Idagdag lang ito sa loob ng useLogin hook mo:
  const handleGoogleLogin = () => console.log("Google Auth Triggered!");
  const handleAppleLogin = () => console.log("Apple Auth Triggered!");
  const handleFacebookLogin = () => console.log("Facebook Auth Triggered!");

  // I-return lahat ng kailangan ng UI
  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    handleLogin,

    handleGoogleLogin,
    handleAppleLogin,
    handleFacebookLogin,
  };
};
