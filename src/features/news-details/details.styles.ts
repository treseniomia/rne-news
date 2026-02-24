import { Dimensions, StyleSheet } from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const createStyles = (theme: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },

    navOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      zIndex: 100,
    },
    navButton: {
      width: 42,
      height: 42,
      borderRadius: 21,
      backgroundColor: "rgba(0,0,0,0.4)",
      justifyContent: "center",
      alignItems: "center",
    },

    fixedTopSection: {
      width: "100%",
    },
    image: {
      width: "100%",
      height: 320,
    },
    headerContent: {
      paddingHorizontal: 24,
      paddingTop: 32,
      paddingBottom: 20,
      backgroundColor: theme.colors.background,
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      marginTop: -35,
    },
    category: {
      fontWeight: "900",
      fontSize: 12,
      marginBottom: 10,
      letterSpacing: 2,
    },
    title: {
      fontSize: 28,
      fontWeight: "900",
      lineHeight: 36,
      marginBottom: 16,
      letterSpacing: -0.5,
    },
    meta: {
      flexDirection: "row",
      alignItems: "center",
      paddingBottom: 10,
    },
    author: {
      fontWeight: "700",
      fontSize: 14,
    },
    dot: {
      marginHorizontal: 8,
      fontSize: 18,
    },
    date: {
      fontSize: 14,
      fontWeight: "500",
    },
    divider: {
      height: 1,
      width: "100%",
      backgroundColor: theme.colors.border,
      marginVertical: 10,
    },

    bodyText: {
      fontSize: 18,
      lineHeight: 30,
      letterSpacing: 0.3,
    },

    sideProgressContainer: {
      position: "absolute",
      right: 6,
      top: SCREEN_HEIGHT * 0.45,
      width: 3,
      height: 150,
      backgroundColor: theme.colors.border,
      borderRadius: 10,
      overflow: "hidden",
      zIndex: 1000,
    },
    sideProgressBar: {
      width: "100%",
      borderRadius: 10,
    },
    readMoreBtn: {
      marginTop: 40,
      marginBottom: 20,
      padding: 18,
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      gap: 8,
    },
  });

export default createStyles;
