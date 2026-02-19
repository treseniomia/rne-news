import { Redirect } from "expo-router";
import { useAuth } from "../src/core/AuthCntxt";

export default function Index() {
  const { isLoggedIn } = useAuth();

  // FIX: Gagamit tayo ng Href type casting or explicit string
  // para mawala ang squiggly line.
  if (isLoggedIn) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(auth)/login" />;
}
