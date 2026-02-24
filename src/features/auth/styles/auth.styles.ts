// import { Platform, StyleSheet } from "react-native";

// export const createAuthStyles = (theme: any) =>
//   StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 24,
//       justifyContent: "center",
//     },
//     header: {
//       alignItems: "center",
//       marginBottom: 48,
//     },
//     title: {
//       fontSize: 40,
//       fontWeight: "900",
//       marginBottom: 8,
//       letterSpacing: -1,
//       color: theme.colors.text.main,
//     },
//     subtitle: {
//       color: theme.colors.text.muted,
//     },
//     form: {
//       width: "100%",
//     },
//     input: {
//       padding: 18,
//       borderRadius: 16,
//       marginBottom: 16,
//       fontSize: 16,
//       backgroundColor: theme.colors.surface,
//       color: theme.colors.text.main,
//     },
//     passwordContainer: {
//       flexDirection: "row",
//       alignItems: "center",
//       borderRadius: 16,
//       marginBottom: 12,
//       backgroundColor: theme.colors.surface,
//     },
//     passwordInput: {
//       flex: 1,
//       padding: 18,
//       fontSize: 16,
//       color: theme.colors.text.main,
//     },
//     eyeIcon: {
//       paddingHorizontal: 16,
//     },
//     forgotPass: {
//       alignSelf: "flex-end",
//       marginBottom: 32,
//       paddingVertical: 4,
//     },
//     button: {
//       width: "100%",
//       padding: 20,
//       borderRadius: 16,
//       alignItems: "center",
//       backgroundColor: theme.colors.primary,
//       ...Platform.select({
//         ios: {
//           shadowColor: "#000",
//           shadowOffset: { width: 0, height: 4 },
//           shadowOpacity: 0.15,
//           shadowRadius: 12,
//         },
//         android: {
//           elevation: 4,
//         },
//       }),
//     },
//     buttonText: {
//       color: "white",
//       fontWeight: "800",
//       fontSize: 16,
//     },
//     footer: {
//       flexDirection: "row",
//       justifyContent: "center",
//       marginTop: 48,
//     },
//   });

// import { Platform, StyleSheet } from "react-native";

// export const createAuthStyles = (theme: any) =>
//   StyleSheet.create({
//     scrollContent: {
//       flexGrow: 1, // Ito ang sikreto para gumana ang scroll sa keyboard
//     },
//     container: {
//       flex: 1,
//       padding: 30, // Mas maluwag na industrial padding
//       justifyContent: "center",
//       backgroundColor: theme.colors.background,
//     },
//     header: {
//       alignItems: "flex-start", // Modern left-aligned header
//       marginBottom: 40,
//     },
//     title: {
//       fontSize: 42,
//       fontWeight: "900",
//       marginBottom: 8,
//       letterSpacing: -1.5,
//       color: theme.colors.text.main,
//     },
//     subtitle: {
//       fontSize: 18,
//       color: theme.colors.text.muted,
//       fontWeight: "500",
//     },
//     formContainer: {
//       width: "100%",
//       marginBottom: 20,
//     },
//     input: {
//       padding: 15,
//       borderRadius: 16,
//       marginBottom: 16,
//       fontSize: 16,
//       backgroundColor: theme.colors.surface,
//       color: theme.colors.text.main,
//       borderWidth: 1,
//       borderColor: theme.colors.border, // Clean outline
//     },
//     passwordContainer: {
//       flexDirection: "row",
//       alignItems: "center",
//       borderRadius: 16,
//       marginBottom: 12,
//       backgroundColor: theme.colors.surface,
//       borderWidth: 1,
//       borderColor: theme.colors.border,
//     },
//     passwordInput: {
//       flex: 1,
//       padding: 15,
//       fontSize: 16,
//       color: theme.colors.text.main,
//     },
//     eyeIcon: {
//       paddingHorizontal: 16,
//     },
//     forgotPass: {
//       alignSelf: "flex-end",
//       marginBottom: 32,
//       paddingVertical: 4,
//     },
//     button: {
//       width: "100%",
//       padding: 15,
//       borderRadius: 18, // Mas rounded for modern look
//       alignItems: "center",
//       backgroundColor: theme.colors.primary,
//       marginTop: 10,
//       ...Platform.select({
//         ios: {
//           shadowColor: theme.colors.primary,
//           shadowOffset: { width: 0, height: 8 },
//           shadowOpacity: 0.3,
//           shadowRadius: 12,
//         },
//         android: {
//           elevation: 6,
//         },
//       }),
//     },
//     buttonText: {
//       color: "white",
//       fontWeight: "800",
//       fontSize: 16,
//       letterSpacing: 0.5,
//     },
//     footer: {
//       flexDirection: "row",
//       justifyContent: "center",
//       marginTop: 40,
//       paddingBottom: 20,
//     },
//   });

import { Platform, StyleSheet } from "react-native";

export const createAuthStyles = (theme: any) =>
  StyleSheet.create({
    scrollContent: {
      flexGrow: 1,
      paddingHorizontal: 30,
      paddingTop: 60,
      paddingBottom: 20,
    },
    topSection: {
      flex: 1,
      justifyContent: "center",
    },
    formContainer: {
      width: "100%",
      marginTop: 20,
    },
    // Eto ang magic para sa Pinned Footer
    pinnedFooter: {
      paddingHorizontal: 30,
      paddingTop: 10,
      paddingBottom: Platform.OS === "ios" ? 40 : 25, // Breathing room sa ilalim
      backgroundColor: theme.colors.background,
    },
    footerLinkContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 25,
    },
    header: {
      alignItems: "flex-start",
      marginBottom: 30,
    },
    title: {
      fontSize: 42,
      fontWeight: "900",
      marginBottom: 8,
      letterSpacing: -1.5,
      color: theme.colors.text.main,
    },
    subtitle: {
      fontSize: 18,
      color: theme.colors.text.muted,
      fontWeight: "500",
    },
    input: {
      padding: 15,
      borderRadius: 16,
      marginBottom: 16,
      fontSize: 16,
      backgroundColor: theme.colors.surface,
      color: theme.colors.text.main,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    passwordContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 16,
      marginBottom: 12,
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    passwordInput: {
      flex: 1,
      padding: 15,
      fontSize: 16,
      color: theme.colors.text.main,
    },
    eyeIcon: {
      paddingHorizontal: 16,
    },
    forgotPass: {
      alignSelf: "flex-end",
      marginBottom: 20,
      paddingVertical: 4,
    },
    button: {
      width: "100%",
      padding: 15,
      borderRadius: 18,
      alignItems: "center",
      backgroundColor: theme.colors.primary,
      ...Platform.select({
        ios: {
          shadowColor: theme.colors.primary,
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.3,
          shadowRadius: 12,
        },
        android: {
          elevation: 6,
        },
      }),
    },
    buttonText: {
      color: "white",
      fontWeight: "800",
      fontSize: 16,
      letterSpacing: 0.5,
    },
  });

// import { Platform, StyleSheet } from "react-native";

// export const createAuthStyles = (theme: any) =>
//   StyleSheet.create({
//     // Main wrapper para sa ScrollView (Login & Register)
//     scrollContent: {
//       flexGrow: 1,
//       paddingHorizontal: 30,
//       // In-adjust para iwas sa Notch/Status Bar
//       paddingTop: Platform.OS === "ios" ? 70 : 50,
//       paddingBottom: 20,
//     },
//     // Container para sa Forgot Password (na walang ScrollView)
//     container: {
//       flex: 1,
//       paddingHorizontal: 30,
//       paddingTop: Platform.OS === "ios" ? 70 : 50,
//       backgroundColor: theme.colors.background,
//     },
//     topSection: {
//       flex: 1,
//       justifyContent: "center", // Eto ang nagpapagitna sa form
//     },
//     formContainer: {
//       width: "100%",
//       marginTop: 20,
//     },
//     // Pinned Footer logic para sa Social Auth at Links
//     pinnedFooter: {
//       paddingHorizontal: 30,
//       paddingTop: 10,
//       paddingBottom: Platform.OS === "ios" ? 40 : 25,
//       backgroundColor: theme.colors.background,
//     },
//     footerLinkContainer: {
//       flexDirection: "row",
//       justifyContent: "center",
//       marginTop: 25,
//     },
//     // Typography & Header
//     header: {
//       alignItems: "flex-start",
//       marginBottom: 30,
//     },
//     title: {
//       fontSize: 42,
//       fontWeight: "900",
//       marginBottom: 8,
//       letterSpacing: -1.5,
//       color: theme.colors.text.main,
//     },
//     subtitle: {
//       fontSize: 18,
//       color: theme.colors.text.muted,
//       fontWeight: "500",
//       lineHeight: 24, // Para hindi siksikan pag mahaba ang subtitle
//     },
//     // Inputs
//     input: {
//       padding: 15,
//       borderRadius: 16,
//       marginBottom: 16,
//       fontSize: 16,
//       backgroundColor: theme.colors.surface,
//       color: theme.colors.text.main,
//       borderWidth: 1,
//       borderColor: theme.colors.border,
//     },
//     passwordContainer: {
//       flexDirection: "row",
//       alignItems: "center",
//       borderRadius: 16,
//       marginBottom: 12,
//       backgroundColor: theme.colors.surface,
//       borderWidth: 1,
//       borderColor: theme.colors.border,
//     },
//     passwordInput: {
//       flex: 1,
//       padding: 15,
//       fontSize: 16,
//       color: theme.colors.text.main,
//     },
//     eyeIcon: {
//       paddingHorizontal: 16,
//     },
//     forgotPass: {
//       alignSelf: "flex-end",
//       marginBottom: 20,
//       paddingVertical: 4,
//     },
//     // Buttons
//     button: {
//       width: "100%",
//       padding: 18, // In-adjust para mas clickable (Industrial Standard)
//       borderRadius: 18,
//       alignItems: "center",
//       backgroundColor: theme.colors.primary,
//       marginTop: 10,
//       ...Platform.select({
//         ios: {
//           shadowColor: theme.colors.primary,
//           shadowOffset: { width: 0, height: 8 },
//           shadowOpacity: 0.3,
//           shadowRadius: 12,
//         },
//         android: {
//           elevation: 6,
//         },
//       }),
//     },
//     buttonText: {
//       color: "white",
//       fontWeight: "800",
//       fontSize: 16,
//       letterSpacing: 0.5,
//     },
//     // Legacy support (kung may component ka pa na gumagamit nito)
//     footer: {
//       flexDirection: "row",
//       justifyContent: "center",
//       marginTop: 40,
//     },
//   });

// export default createAuthStyles;
