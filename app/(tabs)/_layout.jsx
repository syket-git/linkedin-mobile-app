import { FontAwesome, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#737373",
        tabBarInactiveTintColor: "#3A3A3A",
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 65,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className="flex items-center">
              <FontAwesome name="home" size={24} color={color} />
              <Text style={{ color }} className="font-psemibold text-xs">
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="my_network"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className="flex items-center">
              <Ionicons name="people" size={24} color={color} />
              <Text style={{ color }} className=" font-psemibold text-xs">
                My Network
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="create_post"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className="flex items-center">
              <FontAwesome6 name="circle-plus" size={24} color={color} />
              <Text style={{ color }} className="font-psemibold text-xs">
                Post
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className="flex items-center">
              <Ionicons name="notifications" size={24} color={color} />
              <Text
                style={{ color }}
                className="text-white font-psemibold text-xs"
              >
                Notification
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className="flex items-center">
              <Ionicons name="briefcase" size={24} color={color} />
              <Text
                style={{ color }}
                className="text-white font-psemibold text-xs"
              >
                Jobs
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};
export default TabLayout;
