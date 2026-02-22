import { useAuth } from "@core/AuthCntxt"; //
import { useState } from "react";

export const useRegister = () => {
  const { login } = useAuth(); //

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    if (!fullName || !email || !password) {
      console.log("Missing fields!");
      return;
    }
    // Simulation: Login agad pagka-register
    login(email);
  };

  return {
    fullName,
    setFullName,
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    handleRegister,
  };
};
