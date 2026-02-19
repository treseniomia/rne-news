import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "../src/core/AuthCntxt";
import { ThemeProvider } from "../src/core/ThemeContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <SafeAreaProvider>
          {/* BOSS NOTE: Tinanggal natin ang explicit definition ng details/[id] 
            para mawala ang 'extraneous' warning at hindi ito maging modal.
          */}
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(auth)" options={{ animation: "fade" }} />
            <Stack.Screen name="(tabs)" options={{ animation: "fade" }} />
          </Stack>
        </SafeAreaProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
