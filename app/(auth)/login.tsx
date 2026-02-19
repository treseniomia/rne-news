import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// FIX: Inayos ang spelling mula AuthCntxt patungong AuthContext
import { useRouter } from "expo-router"; // Dagdag ito
import { useAuth } from "../../src/core/AuthCntxt";
import { useAppTheme } from "../../src/core/ThemeContext";

export default function LoginScreen() {
  const { login } = useAuth();
  const { theme } = useAppTheme();
  const router = useRouter(); // Initialize router

  const handleLogin = () => {
    login(); // Set isLoggedIn to true
    console.log("Login clicked, Boss!");

    // Pagkatapos mag-login, pilitin nating bumalik sa root
    // para ma-trigger ang redirect sa index.tsx
    router.replace("/");
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={[styles.title, { color: theme.colors.text.main }]}>
        PulseNews
      </Text>
      <Text style={{ color: theme.colors.text.muted, marginBottom: 40 }}>
        Welcome back, Boss!
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={handleLogin} // Gamitin ang bagong function
      >
        <Text style={{ color: "white", fontWeight: "800" }}>LOGIN AS BOSS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 32, fontWeight: "900", marginBottom: 10 },
  button: {
    width: "100%",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },
});
