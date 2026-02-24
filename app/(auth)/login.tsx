// import { useAppTheme } from "@core/ThemeContext";
// import { AuthHeader } from "@features/auth/components/AuthHeader";
// import { LoginForm } from "@features/auth/components/LoginForm";
// import { SocialAuth } from "@features/auth/components/SocialAuth";
// import { useLogin } from "@features/auth/hooks/useLogin";
// import { createAuthStyles } from "@features/auth/styles/auth.styles";
// import { useRouter } from "expo-router";
// import React from "react";
// import {
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   Text,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
// } from "react-native";
// // import { AuthFooter } from "../../src/features/auth/components/AuthFooter"; // (Optional separate component)

// export default function LoginScreen() {
//   const { theme } = useAppTheme();
//   const router = useRouter();
//   const loginLogic = useLogin();
//   const styles = createAuthStyles(theme);

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View
//           style={[
//             styles.container,
//             { backgroundColor: theme.colors.background },
//           ]}
//         >
//           <AuthHeader
//             title="RNE News"
//             subtitle="Welcome back!"
//             styles={styles}
//           />

//           <LoginForm {...loginLogic} theme={theme} styles={styles} />

//           <SocialAuth
//             theme={theme}
//             onGooglePress={loginLogic.handleGoogleLogin}
//             onApplePress={loginLogic.handleAppleLogin}
//             onFacebookPress={loginLogic.handleFacebookLogin}
//           />

//           <View style={styles.footer}>
//             <View style={{ flexDirection: "row" }}>
//               <Text style={{ color: theme.colors.text.muted }}>
//                 Don't have an account?{" "}
//               </Text>
//               <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
//                 <Text
//                   style={{ color: theme.colors.primary, fontWeight: "bold" }}
//                 >
//                   Register
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// }

// import { useAppTheme } from "@core/ThemeContext";
// import { AuthHeader } from "@features/auth/components/AuthHeader";
// import { LoginForm } from "@features/auth/components/LoginForm";
// import { SocialAuth } from "@features/auth/components/SocialAuth";
// import { useLogin } from "@features/auth/hooks/useLogin";
// import { createAuthStyles } from "@features/auth/styles/auth.styles";
// import { useRouter } from "expo-router";
// import React from "react";
// import {
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
// } from "react-native";

// export default function LoginScreen() {
//   const { theme } = useAppTheme();
//   const router = useRouter();
//   const loginLogic = useLogin();
//   const styles = createAuthStyles(theme);

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1, backgroundColor: theme.colors.background }}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <ScrollView
//           contentContainerStyle={{ flexGrow: 1 }}
//           showsVerticalScrollIndicator={false}
//           bounces={false}
//         >
//           <View style={styles.container}>
//             {/* Header Section */}
//             <AuthHeader
//               title="RNE News"
//               subtitle="Welcome back!"
//               styles={styles}
//             />

//             {/* Form Section */}
//             <View style={styles.formContainer}>
//               <LoginForm {...loginLogic} theme={theme} styles={styles} />
//             </View>

//             {/* Social Logins */}
//             <SocialAuth
//               theme={theme}
//               onGooglePress={loginLogic.handleGoogleLogin}
//               onApplePress={loginLogic.handleAppleLogin}
//               onFacebookPress={loginLogic.handleFacebookLogin}
//             />

//             {/* Footer */}
//             <View style={styles.footer}>
//               <Text style={{ color: theme.colors.text.muted }}>
//                 Don't have an account?{" "}
//               </Text>
//               <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
//                 <Text
//                   style={{ color: theme.colors.primary, fontWeight: "bold" }}
//                 >
//                   Register
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ScrollView>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// }

import { useAppTheme } from "@core/ThemeContext";
import { AuthHeader } from "@features/auth/components/AuthHeader";
import { LoginForm } from "@features/auth/components/LoginForm";
import { SocialAuth } from "@features/auth/components/SocialAuth";
import { useLogin } from "@features/auth/hooks/useLogin";
import { createAuthStyles } from "@features/auth/styles/auth.styles";
import { useRouter } from "expo-router";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function LoginScreen() {
  const { theme } = useAppTheme();
  const router = useRouter();
  const loginLogic = useLogin();
  const styles = createAuthStyles(theme);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            {/* MAIN CONTENT: Eto lang ang aangat/mag-scroll */}
            <ScrollView
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
              bounces={false}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.topSection}>
                <AuthHeader
                  title="RNE News"
                  subtitle="Welcome back!"
                  styles={styles}
                />
                <View style={styles.formContainer}>
                  <LoginForm {...loginLogic} theme={theme} styles={styles} />
                </View>
              </View>
            </ScrollView>

            {/* PINNED FOOTER: Nasa labas ng ScrollView para hindi sumama sa taas */}
            <View style={styles.pinnedFooter}>
              <SocialAuth
                theme={theme}
                onGooglePress={loginLogic.handleGoogleLogin}
                onApplePress={loginLogic.handleAppleLogin}
                onFacebookPress={loginLogic.handleFacebookLogin}
              />

              <View style={styles.footerLinkContainer}>
                <Text style={{ color: theme.colors.text.muted }}>
                  Don't have an account?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => router.push("/(auth)/register")}
                >
                  <Text
                    style={{ color: theme.colors.primary, fontWeight: "bold" }}
                  >
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}
