import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_KEY = "@pulse_auth_token";

export const authService = {
  getToken: async () => {
    return await AsyncStorage.getItem(AUTH_KEY);
  },
  login: async (email: string) => {
    // Mock login logic
    const mockToken = "user_token_abc123";
    await AsyncStorage.setItem(AUTH_KEY, mockToken);
    return mockToken;
  },
  logout: async () => {
    await AsyncStorage.removeItem(AUTH_KEY);
  },
};
