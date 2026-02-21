// import React from "react";
// import {
//   ActivityIndicator,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { SettingItem } from "../components/SettingItem";
// import { useProfile } from "../hooks/useProfile";

// export const ProfileScreen = () => {
//   const {
//     user,
//     isLoading,
//     theme,
//     isDark,
//     toggleTheme,
//     savedCount,
//     handleLogout,
//   } = useProfile();

//   if (isLoading || !user) {
//     return (
//       <View
//         style={[styles.center, { backgroundColor: theme.colors.background }]}
//       >
//         <ActivityIndicator color={theme.colors.primary} size="large" />
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView
//       style={[styles.container, { backgroundColor: theme.colors.background }]}
//     >
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View
//           style={[styles.header, { borderBottomColor: theme.colors.border }]}
//         >
//           <View
//             style={[styles.avatar, { backgroundColor: theme.colors.primary }]}
//           >
//             <Text style={styles.avatarText}>{user.initials}</Text>
//           </View>
//           <Text style={[styles.name, { color: theme.colors.text.main }]}>
//             {user.name}
//           </Text>
//           <Text style={[styles.bio, { color: theme.colors.text.muted }]}>
//             {user.bio}
//           </Text>

//           <View
//             style={[
//               styles.statsContainer,
//               { backgroundColor: theme.colors.surface },
//             ]}
//           >
//             <View style={styles.statBox}>
//               <Text
//                 style={[styles.statNumber, { color: theme.colors.text.main }]}
//               >
//                 {savedCount}
//               </Text>
//               <Text
//                 style={[styles.statLabel, { color: theme.colors.text.muted }]}
//               >
//                 Saved
//               </Text>
//             </View>
//             <View
//               style={[
//                 styles.statDivider,
//                 { backgroundColor: theme.colors.border },
//               ]}
//             />
//             <View style={styles.statBox}>
//               <Text
//                 style={[styles.statNumber, { color: theme.colors.text.main }]}
//               >
//                 {user.stats.readCount}
//               </Text>
//               <Text
//                 style={[styles.statLabel, { color: theme.colors.text.muted }]}
//               >
//                 Read
//               </Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.section}>
//           <Text
//             style={[styles.sectionTitle, { color: theme.colors.text.muted }]}
//           >
//             App Settings
//           </Text>
//           <SettingItem
//             onPress={toggleTheme}
//             icon={isDark ? "moon" : "moon-outline"}
//             title="Dark Mode"
//             subtitle={isDark ? "On" : "Off"}
//           />
//           <SettingItem
//             icon="language-outline"
//             title="Language"
//             subtitle="English (US)"
//             isLast
//           />
//         </View>

//         <View style={[styles.section, { marginBottom: 40 }]}>
//           <Text
//             style={[styles.sectionTitle, { color: theme.colors.text.muted }]}
//           >
//             Account
//           </Text>
//           <SettingItem
//             onPress={handleLogout}
//             icon="log-out-outline"
//             title="Log Out"
//             isDestructive
//             isLast
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   center: { flex: 1, justifyContent: "center", alignItems: "center" },
//   header: { alignItems: "center", padding: 32, borderBottomWidth: 1 },
//   avatar: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 12,
//   },
//   avatarText: { color: "white", fontSize: 28, fontWeight: "bold" },
//   name: { fontSize: 22, fontWeight: "800" },
//   bio: { marginTop: 4, fontSize: 14, textAlign: "center" },
//   statsContainer: {
//     flexDirection: "row",
//     marginTop: 24,
//     borderRadius: 12,
//     padding: 16,
//     width: "100%",
//   },
//   statBox: { flex: 1, alignItems: "center" },
//   statNumber: { fontSize: 20, fontWeight: "bold" },
//   statLabel: { fontSize: 12 },
//   statDivider: { width: 1 },
//   section: { marginTop: 24, paddingHorizontal: 24 },
//   sectionTitle: {
//     fontSize: 14,
//     fontWeight: "700",
//     marginBottom: 12,
//     textTransform: "uppercase",
//     letterSpacing: 1,
//   },
// });

import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingItem } from "../components/SettingItem";
import { useProfile } from "../hooks/useProfile";

export const ProfileScreen = () => {
  const {
    user,
    isLoading,
    theme,
    isDark,
    toggleTheme,
    savedCount,
    handleLogout,
  } = useProfile();

  if (isLoading || !user) {
    return (
      <View
        style={[styles.center, { backgroundColor: theme.colors.background }]}
      >
        <ActivityIndicator color={theme.colors.primary} size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[styles.header, { borderBottomColor: theme.colors.border }]}
        >
          <View
            style={[styles.avatar, { backgroundColor: theme.colors.primary }]}
          >
            <Text style={styles.avatarText}>{user.initials}</Text>
          </View>
          <Text style={[styles.name, { color: theme.colors.text.main }]}>
            {user.name}
          </Text>
          <Text style={[styles.bio, { color: theme.colors.text.muted }]}>
            {user.bio}
          </Text>

          <View
            style={[
              styles.statsContainer,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <View style={styles.statBox}>
              <Text
                style={[styles.statNumber, { color: theme.colors.text.main }]}
              >
                {savedCount}
              </Text>
              <Text
                style={[styles.statLabel, { color: theme.colors.text.muted }]}
              >
                Saved
              </Text>
            </View>
            <View
              style={[
                styles.statDivider,
                { backgroundColor: theme.colors.border },
              ]}
            />
            <View style={styles.statBox}>
              <Text
                style={[styles.statNumber, { color: theme.colors.text.main }]}
              >
                {user.stats.readCount}
              </Text>
              <Text
                style={[styles.statLabel, { color: theme.colors.text.muted }]}
              >
                Read
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text
            style={[styles.sectionTitle, { color: theme.colors.text.muted }]}
          >
            App Settings
          </Text>
          <SettingItem
            onPress={toggleTheme}
            icon={isDark ? "moon" : "moon-outline"}
            title="Dark Mode"
            subtitle={isDark ? "On" : "Off"}
          />
          <SettingItem
            icon="language-outline"
            title="Language"
            subtitle="English (US)"
            isLast
          />
        </View>

        <View style={[styles.section, { marginBottom: 40 }]}>
          <Text
            style={[styles.sectionTitle, { color: theme.colors.text.muted }]}
          >
            Account
          </Text>
          <SettingItem
            onPress={handleLogout} // LOG OUT IS NOW ACTIVE!
            icon="log-out-outline"
            title="Log Out"
            isDestructive
            isLast
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: { alignItems: "center", padding: 32, borderBottomWidth: 1 },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  avatarText: { color: "white", fontSize: 28, fontWeight: "bold" },
  name: { fontSize: 22, fontWeight: "800" },
  bio: { marginTop: 4, fontSize: 14, textAlign: "center" },
  statsContainer: {
    flexDirection: "row",
    marginTop: 24,
    borderRadius: 12,
    padding: 16,
    width: "100%",
  },
  statBox: { flex: 1, alignItems: "center" },
  statNumber: { fontSize: 20, fontWeight: "bold" },
  statLabel: { fontSize: 12 },
  statDivider: { width: 1 },
  section: { marginTop: 24, paddingHorizontal: 24 },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
