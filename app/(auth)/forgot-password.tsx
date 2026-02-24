// import { useAppTheme } from "@core/ThemeContext";
// import { Ionicons } from "@expo/vector-icons";
// import { AuthHeader } from "@features/auth/components/AuthHeader";
// import { ForgotPasswordForm } from "@features/auth/components/ForgotPasswordForm";
// import { useForgotPassword } from "@features/auth/hooks/useForgotPassword";
// import { createAuthStyles } from "@features/auth/styles/auth.styles";
// import { useRouter } from "expo-router";
// import React from "react";
// import {
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
// } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

// export default function ForgotPasswordScreen() {
//   const { theme } = useAppTheme();
//   const router = useRouter();
//   const insets = useSafeAreaInsets();
//   const styles = createAuthStyles(theme);
//   const forgotLogic = useForgotPassword();

//   return (
//     <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
//       {/* Back Button - Mas malinis na placement */}
//       <TouchableOpacity
//         onPress={() => router.back()}
//         style={{
//           position: "absolute",
//           top: insets.top + 10,
//           left: 20,
//           zIndex: 100,
//           padding: 8,
//           backgroundColor: theme.colors.surface, // Subtle background para madaling makita
//           borderRadius: 12,
//         }}
//       >
//         <Ionicons
//           name="chevron-back"
//           size={24}
//           color={theme.colors.text.main}
//         />
//       </TouchableOpacity>

//       <KeyboardAvoidingView
//         behavior={Platform.OS === "ios" ? "padding" : undefined}
//         style={{ flex: 1 }}
//       >
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//           <ScrollView
//             contentContainerStyle={styles.scrollContent}
//             showsVerticalScrollIndicator={false}
//             bounces={false}
//             keyboardShouldPersistTaps="handled"
//           >
//             <View style={styles.topSection}>
//               <AuthHeader
//                 title="Reset Password"
//                 subtitle="Enter your email to get a reset link!"
//                 styles={styles}
//               />

//               <View style={styles.formContainer}>
//                 <ForgotPasswordForm
//                   {...forgotLogic}
//                   theme={theme}
//                   styles={styles}
//                 />
//               </View>
//             </View>
//           </ScrollView>
//         </TouchableWithoutFeedback>
//       </KeyboardAvoidingView>
//     </View>
//   );
// }

import { useAppTheme } from "@core/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { AuthHeader } from "@features/auth/components/AuthHeader";
import { ForgotPasswordForm } from "@features/auth/components/ForgotPasswordForm";
import { useForgotPassword } from "@features/auth/hooks/useForgotPassword";
import { createAuthStyles } from "@features/auth/styles/auth.styles";
import { useRouter } from "expo-router";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ForgotPasswordScreen() {
  const { theme } = useAppTheme();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const styles = createAuthStyles(theme);
  const forgotLogic = useForgotPassword();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            {/* Back Button - Clean Industrial Design */}
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                position: "absolute",
                top: insets.top + 10,
                left: 20,
                zIndex: 100,
                padding: 10,
                backgroundColor: theme.colors.surface,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: theme.colors.border,
              }}
            >
              <Ionicons
                name="chevron-back"
                size={22}
                color={theme.colors.text.main}
              />
            </TouchableOpacity>

            <ScrollView
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
              bounces={false}
              keyboardShouldPersistTaps="handled"
            >
              {/* Tinanggal ang center justification para hindi sya bumaba sa gitna */}
              <View
                style={[
                  styles.topSection,
                  { justifyContent: "flex-start", paddingTop: 60 },
                ]}
              >
                <AuthHeader
                  title="Reset Password"
                  subtitle="Enter your email to get a reset link!"
                  styles={styles}
                />

                <View style={styles.formContainer}>
                  <ForgotPasswordForm
                    {...forgotLogic}
                    theme={theme}
                    styles={styles}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}
