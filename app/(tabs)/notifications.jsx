import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import NotificationCard from "../../components/NotificationCard";
import { notifications } from "../../constants/data";

const Notifications = () => {
  const [active, setActive] = useState(0);

  return (
    <SafeAreaView className="flex-1 bg-black-200">
      <View className="flex-1">
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <NotificationCard notification={item} />}
          ListHeaderComponent={() => (
            <View>
              <CustomHeader />
              <View className="flex flex-row items-center px-3 gap-x-1">
                <TouchableOpacity
                  onPress={() => setActive(0)}
                  className={`${
                    active === 0 ? "bg-green" : "bg-transparent"
                  } w-12 px-2 py-1 rounded-full flex flex-row justify-center`}
                >
                  <Text className="text-white text-center font-psemibold">
                    All
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setActive(1)}
                  className={`${
                    active === 1 ? "bg-green" : "bg-transparent"
                  } w-24 px-2 py-1 rounded-full flex flex-row justify-center`}
                >
                  <Text className="text-white text-center font-psemibold">
                    My posts
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setActive(2)}
                  className={`${
                    active === 2 ? "bg-green" : "bg-transparent"
                  } w-24 px-2 py-1 rounded-full flex flex-row justify-center`}
                >
                  <Text className="text-white text-center font-psemibold">
                    Mentions
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      <StatusBar backgroundColor="#000000" style="light" />
    </SafeAreaView>
  );
};
export default Notifications;
