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
          name: "React Native Dev",
          bio: "Tracking RN 0.78 & Expo 54 Updates",
          initials: "JD",
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
