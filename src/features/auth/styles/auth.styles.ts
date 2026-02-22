import { Platform, StyleSheet } from "react-native";

// Ginagawa nating function para dynamic ang colors base sa theme
export const createAuthStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      justifyContent: "center",
    },
    header: {
      alignItems: "center",
      marginBottom: 48,
    },
    title: {
      fontSize: 40,
      fontWeight: "900",
      marginBottom: 8,
      letterSpacing: -1,
      color: theme.colors.text.main,
    },
    subtitle: {
      color: theme.colors.text.muted,
    },
    form: {
      width: "100%",
    },
    input: {
      padding: 18,
      borderRadius: 16,
      marginBottom: 16,
      fontSize: 16,
      backgroundColor: theme.colors.surface,
      color: theme.colors.text.main,
    },
    passwordContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 16,
      marginBottom: 12,
      backgroundColor: theme.colors.surface,
    },
    passwordInput: {
      flex: 1,
      padding: 18,
      fontSize: 16,
      color: theme.colors.text.main,
    },
    eyeIcon: {
      paddingHorizontal: 16,
    },
    forgotPass: {
      alignSelf: "flex-end",
      marginBottom: 32,
      paddingVertical: 4,
    },
    button: {
      width: "100%",
      padding: 20,
      borderRadius: 16,
      alignItems: "center",
      backgroundColor: theme.colors.primary,
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 12,
        },
        android: {
          elevation: 4,
        },
      }),
    },
    buttonText: {
      color: "white",
      fontWeight: "800",
      fontSize: 16,
    },
    footer: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 48,
    },
  });
