// import { AuthProvider } from "@core/AuthCntxt";
// import { ThemeProvider } from "@core/ThemeContext";
// import { Stack } from "expo-router";
// import { SafeAreaProvider } from "react-native-safe-area-context";

// export default function RootLayout() {
//   return (
//     <AuthProvider>
//       <ThemeProvider>
//         <SafeAreaProvider>
//           {/* BOSS NOTE: Tinanggal natin ang explicit definition ng details/[id]
//             para mawala ang 'extraneous' warning at hindi ito maging modal.
//           */}
//           <Stack screenOptions={{ headerShown: false }}>
//             <Stack.Screen name="index" />
//             <Stack.Screen name="(auth)" options={{ animation: "fade" }} />
//             <Stack.Screen name="(tabs)" options={{ animation: "fade" }} />
//           </Stack>
//         </SafeAreaProvider>
//       </ThemeProvider>
//     </AuthProvider>
//   );
// }

import { AuthProvider } from "@core/AuthCntxt";
import { ThemeProvider } from "@core/ThemeContext";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          {/* Ang Stack na ito ang mag-handle ng switching between Auth at Tabs */}
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(auth)" options={{ animation: "fade" }} />
            <Stack.Screen name="(tabs)" options={{ animation: "fade" }} />
            {/* Hayaan ang file-based routing sa details/[id] para walang warning */}
          </Stack>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
