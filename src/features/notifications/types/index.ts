export interface AppNotification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "update" | "expo" | "system";
}
