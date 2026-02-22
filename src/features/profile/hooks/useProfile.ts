import { useAuth } from "@core/AuthCntxt"; // Import Auth
import { useAppTheme } from "@core/ThemeContext";
import { useBookmarks } from "@features/bookmarks/hooks/useBookmarks";
import { useEffect, useState } from "react";
import { profileService, UserProfile } from "../services/profileService";

export const useProfile = () => {
  const { theme, isDark, toggleTheme } = useAppTheme();
  const { logout } = useAuth(); // Kunin ang logout function
  const { savedArticles } = useBookmarks();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await profileService.getUserProfile();
      setUser(data);
      setIsLoading(false);
    };
    fetchProfile();
  }, []);

  const handleLogout = async () => {
    await logout(); // Ito ang magti-trigger ng redirect
  };

  return {
    user,
    isLoading,
    theme,
    isDark,
    toggleTheme,
    savedCount: savedArticles.length,
    handleLogout,
  };
};
