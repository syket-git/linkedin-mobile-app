import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

const CustomHeader = () => {
  const handlePress = () => {
    router.push("/profile");
  };
  return (
    <View className="flex-row px-3 gap-x-3 h-12 items-center mb-2">
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/39830305?v=4",
          }}
          className="w-10 h-10 rounded-full overflow-hidden"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View className="flex-1 flex-row items-center gap-x-1 h-ful">
        <Ionicons name="search" color="#c0c0c0" size={20} />
        <TextInput
          className="flex-1 font-pregular text-white"
          placeholder="Search"
          placeholderTextColor="#c0c0c0"
        />
      </View>
      <TouchableOpacity>
        <Ionicons name="chatbox-ellipses" size={24} color="#c0c0c0" />
      </TouchableOpacity>
    </View>
  );
};
export default CustomHeader;
