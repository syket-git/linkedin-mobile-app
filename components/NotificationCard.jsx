import { Entypo } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

const NotificationCard = ({ notification }) => {
  const { title, image, connection, time } = notification;

  return (
    <View className="px-3 flex flex-row items-center my-3">
      <View className="flex flex-1 flex-row items-center gap-x-2">
        <Image
          source={{ uri: image }}
          resizeMode="contain"
          className="w-16 h-16"
        />
        <View>
          <Text numberOfLines={3} className="text-white w-56">
            {title}
          </Text>
          <Text className="text-gray-100">{connection}</Text>
        </View>
      </View>
      <View>
        <Text className="text-gray-100 mb-3">{time}</Text>
        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={20} color="#c0c0c0" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default NotificationCard;
