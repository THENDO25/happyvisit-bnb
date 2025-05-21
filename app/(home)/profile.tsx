import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
require('./global.css')

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Company Logo */}
      <View style={styles.companyLogo}>
        <Image source={require("@/assets/images/hvlogo1.png")} />
      </View>

      <SafeAreaView className="flex-1 p-4">
        <Text className="text-black text-4xl font-normal mb-6">Profile</Text>

        {/* User Header */}
        <View className="bg-[#34967C] h-[90px] mb-10 flex-row items-center rounded-md justify-between px-7">
          <View className="flex-row items-center gap-4">
            <Image source={require("@/assets/images/user-image.png")} />
            <View>
              <Text className="font-semibold text-xl text-white">
                Thendo Mukwevho
              </Text>
              <Text className="text-sm font-thin text-white">@block_cs</Text>
            </View>
          </View>
          <Feather name="edit-3" size={24} color="white" />
        </View>

        {/* Profile Options */}
        <View className="bg-white rounded-md p-4 mb-4 space-y-3">
          {profileOptions.map((item, index) => (
            <Pressable
              key={index}
              className="flex-row items-center justify-between"
            >
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full">
                  <item.icon name={item.iconName} size={24} color="#0601B4" />
                </View>
                <View>
                  <Text className="text-lg font-normal mb-1">{item.title}</Text>
                  <Text className="text-sm font-thin text-gray-700">
                    {item.subtitle}
                  </Text>
                </View>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={30}
                color="black"
              />
            </Pressable>
          ))}
        </View>

        <Text className="text-black text-xl font-normal mb-6">More</Text>

        <View className="bg-white rounded-md p-4 space-y-3">
          <Pressable className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full">
                <Ionicons name="help-circle-outline" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className="text-lg font-normal mb-1">Help & Support</Text>
                <Text className="text-sm font-thin text-gray-700">
                  Get assistance or FAQs
                </Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
          </Pressable>

          <Pressable className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full">
                <Ionicons name="settings-outline" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className="text-lg font-normal mb-1">App Settings</Text>
                <Text className="text-sm font-thin text-gray-700">
                  Customize your preferences
                </Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

const profileOptions = [
  {
    title: "My Account",
    subtitle: "Make changes to your account",
    icon: FontAwesome6,
    iconName: "user",
  },
  {
    title: "Saved Beneficiary",
    subtitle: "Manage your saved accounts",
    icon: FontAwesome6,
    iconName: "user",
  },
  {
    title: "Face ID / Touch ID",
    subtitle: "Biometric authentication settings",
    icon: Ionicons,
    iconName: "lock-closed-outline",
  },
  {
    title: "Two-Factor Authentication",
    subtitle: "Further secure your account for safety",
    icon: Ionicons,
    iconName: "shield-checkmark-outline",
  },
  {
    title: "Log out",
    subtitle: "Sign out of your account",
    icon: MaterialIcons,
    iconName: "logout",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 30,
  },
});

export default Profile;
