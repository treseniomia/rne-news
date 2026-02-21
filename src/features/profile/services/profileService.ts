export interface UserProfile {
  name: string;
  bio: string;
  initials: string;
  stats: {
    readCount: number;
  };
}

export const profileService = {
  // Simulating an API call to get user profile
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
    // Dito ilalagay ang Auth clearing logic balang araw
    console.log("User logged out");
  },
};
