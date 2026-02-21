export interface AppNotification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "update" | "expo" | "system";
}

export const MOCK_NOTIFS: AppNotification[] = [
  {
    id: "1",
    title: "New Architecture Alert 🚀",
    description:
      "React Native 0.78 is now stable. Bridgeless mode is enabled by default.",
    time: "2h ago",
    type: "update",
  },
  {
    id: "2",
    title: "Expo SDK 54 Beta",
    description:
      "New typed routes are now available for testing in your Pulse projects.",
    time: "5h ago",
    type: "expo",
  },
  {
    id: "3",
    title: "Bookmark Success",
    description:
      'You successfully saved "The Rise of Minimalist Interfaces" to your collection.',
    time: "1d ago",
    type: "system",
  },
];

// Async function to simulate an API call
export const fetchNotifications = async (): Promise<AppNotification[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_NOTIFS);
    }, 500); // 500ms delay para kunwari nag-lo-load
  });
};
