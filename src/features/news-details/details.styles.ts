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
      top: insets.top + 10,
      left: 20,
      right: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      zIndex: 100,
    },
    navButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: "rgba(0,0,0,0.5)",
      justifyContent: "center",
      alignItems: "center",
    },

    fixedTopSection: {
      width: "100%",
      backgroundColor: theme.colors.background,
    },
    image: {
      width: "100%",
      height: 250,
    },
    headerContent: {
      paddingHorizontal: 24,
      paddingTop: 24,
      paddingBottom: 10,
      backgroundColor: theme.colors.background,
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      marginTop: -32, // Overlap effect sa image
    },
    category: {
      fontWeight: "800",
      fontSize: 12,
      marginBottom: 8,
      letterSpacing: 1,
    },
    title: {
      fontSize: 26,
      fontWeight: "900",
      lineHeight: 32,
      marginBottom: 12,
    },
    meta: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
    },
    author: { fontWeight: "600", fontSize: 14 },
    dot: { marginHorizontal: 8, opacity: 0.5 },
    date: { fontSize: 14, opacity: 0.7 },
    divider: {
      height: 1,
      backgroundColor: theme.colors.border,
      marginHorizontal: 24,
    },
    // Scrollable Body Area
    scrollContainer: {
      flex: 1,
    },
    bodyText: {
      padding: 24,
      fontSize: 17,
      lineHeight: 28,
    },
    sideProgressContainer: {
      position: "absolute",
      right: 4,
      top: SCREEN_HEIGHT * 0.4,
      width: 2,
      height: 150,
      backgroundColor: "rgba(211, 211, 211, 0.2)",
      zIndex: 1000,
    },
    sideProgressBar: { width: "100%" },
    center: { flex: 1, justifyContent: "center", alignItems: "center" },
  });

export default createStyles;
