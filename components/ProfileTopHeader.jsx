import { AntDesign, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TextInput, TouchableOpacity, View } from "react-native";
const ProfileTopHeader = () => {
  const handleBack = () => {
    router.back();
  };

  return (
    <View className="flex px-3 my-2 flex-row items-center justify-between">
      <View className="flex flex-row items-center flex-1 gap-x-3">
        <TouchableOpacity onPress={handleBack}>
          <AntDesign name="arrowleft" size={24} color="#c0c0c0" />
        </TouchableOpacity>
        <View className="flex-1 flex flex-row items-center">
          <Ionicons name="search" size={20} color="#c0c0c0" />
          <TextInput
            placeholder="Search"
            className="text-white ml-2"
            value="Syket Bhattachergee"
          />
        </View>
      </View>
      <TouchableOpacity>
        <Ionicons name="settings-sharp" size={24} color="#c0c0c0" />
      </TouchableOpacity>
    </View>
  );
};
export default ProfileTopHeader;
