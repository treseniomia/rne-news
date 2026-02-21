import { Ionicons } from "@expo/vector-icons";

export interface SettingItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle?: string;
  isLast?: boolean;
  isDestructive?: boolean;
  onPress?: () => void;
}
