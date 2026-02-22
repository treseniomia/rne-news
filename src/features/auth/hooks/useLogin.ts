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

  // I-return lahat ng kailangan ng UI
  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    handleLogin,
  };
};
