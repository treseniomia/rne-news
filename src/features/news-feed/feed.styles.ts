import { StyleSheet } from "react-native";

export const createStyles = (theme: any) =>
  StyleSheet.create({
    container: { flex: 1 },
    header: { paddingHorizontal: 24, paddingTop: 16, paddingBottom: 8 },
    headerTitle: { fontSize: 32, fontWeight: "900", letterSpacing: -1 },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 12,
      marginHorizontal: 24,
      paddingHorizontal: 12,
      height: 48,
      borderWidth: 1,
      marginBottom: 4,
    },
    searchIcon: { marginRight: 8 },
    searchInput: { flex: 1, fontSize: 16 },
    categoryList: { paddingHorizontal: 24, paddingVertical: 16, gap: 10 },
    chip: {
      paddingHorizontal: 18,
      paddingVertical: 8,
      borderRadius: 25,
      borderWidth: 1,
    },
    chipText: { fontSize: 14, fontWeight: "600" },
    listContent: {
      paddingHorizontal: 20,
      paddingBottom: 100, // Space for tab bar
    },
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 100,
    },
    emptyText: {
      fontSize: 16,
      marginTop: 10,
      textAlign: "center",
      paddingHorizontal: 40,
    },
  });
