// export const theme = {
//   colors: {
//     background: "#FFFFFF",
//     surface: "#F9F9F9",
//     primary: "#000000",
//     secondary: "#666666",
//     accent: "#007AFF",
//     border: "#EEEEEE",
//     text: {
//       main: "#1A1A1A",
//       muted: "#757575",
//       inverse: "#FFFFFF",
//     },
//   },
//   spacing: {
//     xs: 4,
//     sm: 8,
//     md: 16,
//     lg: 24,
//     xl: 32,
//   },
//   borderRadius: {
//     sm: 4,
//     md: 8,
//     lg: 12,
//     round: 25,
//   },
// };

// export type Theme = typeof theme;

export const lightTheme = {
  colors: {
    primary: "#007AFF",
    background: "#FFFFFF",
    surface: "#F2F2F7",
    text: { main: "#000000", muted: "#8E8E93" },
    border: "#C6C6C8",
  },
  spacing: { sm: 8, md: 16, lg: 24, xl: 32 },
  borderRadius: { md: 12, round: 25 },
};

export const darkTheme = {
  colors: {
    primary: "#0A84FF",
    background: "#000000",
    surface: "#1C1C1E",
    text: { main: "#FFFFFF", muted: "#8E8E93" },
    border: "#38383A",
  },
  spacing: lightTheme.spacing,
  borderRadius: lightTheme.borderRadius,
};

export type AppTheme = typeof lightTheme;
