export const theme = {
  colors: {
    background: "#FFFFFF",
    surface: "#F9F9F9",
    primary: "#000000",
    secondary: "#666666",
    accent: "#007AFF",
    border: "#EEEEEE",
    text: {
      main: "#1A1A1A",
      muted: "#757575",
      inverse: "#FFFFFF",
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    round: 25,
  },
};

export type Theme = typeof theme;
