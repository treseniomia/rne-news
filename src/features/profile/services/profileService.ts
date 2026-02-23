export interface UserProfile {
  name: string;
  bio: string;
  initials: string;
  stats: {
    readCount: number;
  };
}

export const profileService = {
  getUserProfile: async (): Promise<UserProfile> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "Mia Tresenio",
          bio: "Tracking RN 0.78 & Expo 54 Updates",
          initials: "MT",
          stats: {
            readCount: 12,
          },
        });
      }, 500);
    });
  },

  logout: async () => {
    console.log("User logged out");
  },
};
