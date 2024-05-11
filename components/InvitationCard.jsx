import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

const InvitationCard = ({ item }) => {
  const { pageName, personName, category, image, time } = item;
  return (
    <View className="px-3 flex gap-x-2 flex-row items-center my-3">
      <TouchableOpacity>
        <Image
          source={{ uri: image }}
          className="w-16 h-16 rounded-full"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View className="flex-1">
        <TouchableOpacity>
          <Text className="text-gray-100 text-xs font-pregular">
            Page • {category}
          </Text>

          <Text className="text-white text-xs font-psemibold pt-1">
            {personName}{" "}
            <Text className="text-gray-100 text-xs font-pregular">
              invited you to follow{" "}
            </Text>
            <Text className="text-white text-xs font-psemibold">
              {pageName}
            </Text>
          </Text>

          <Text className="text-gray-100 font-pregular text-xs pt-1">
            1 month ago
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row gap-x-2 items-center">
        <TouchableOpacity>
          <Ionicons name="close-circle-outline" size={50} color="#929292" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="check-circle-outline"
            size={50}
            color="#0B66C3"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default InvitationCard;
