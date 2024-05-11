import {
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const CreatePost = () => {
  const [value, setValue] = useState("");

  const handleClose = () => {
    router.push("/home");
  };

  return (
    <SafeAreaView className="flex-1 bg-black-200">
      <View className="flex-1 px-3 mt-3">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-x-3">
            <TouchableOpacity onPress={handleClose}>
              <AntDesign name="close" size={24} color="#c0c0c0" />
            </TouchableOpacity>

            <View className="flex flex-row items-center">
              <Image
                source={{
                  uri: "https://avatars.githubusercontent.com/u/39830305?v=4",
                }}
                className="w-10 h-10 rounded-full overflow-hidden"
                resizeMode="contain"
              />
              <TouchableOpacity className="flex flex-row items-center pl-3 gap-x-2">
                <Text className="text-white font-pregular text-xs">Anyone</Text>
                <Octicons name="triangle-down" size={24} color="#c0c0c0" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex flex-row gap-x-4 items-center ">
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="clock-time-four-outline"
                size={24}
                color="#c0c0c0"
              />
            </TouchableOpacity>

            <TouchableOpacity
              className={`${
                value ? "bg-blue px-4 py-1 rounded-full" : "bg-transparent"
              }`}
            >
              <Text
                className={`${
                  value ? "text-white" : "text-gray-100"
                } font-psemibold mb-0 pb-0`}
              >
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="pt-3">
          <TextInput
            multiline={true}
            placeholder="Share your thoughts..."
            value={value}
            onChangeText={(e) => setValue(e)}
            className="text-white font-pregular"
            placeholderTextColor="#c0c0c0"
          />
        </View>
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
};
export default CreatePost;
