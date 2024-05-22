import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const UserCard = ({ item }) => {
  const { banner, image, name, tagline, connection } = item;

  return (
    <View className="flex-1 items-center h-auto my-2 border border-gray-800 rounded-md overflow-hidden">
      <ImageBackground
        source={{ uri: banner }}
        className="w-full h-14"
        resizeMethod="contain
      "
      />
      <View className="items-center -mt-7">
        <Image
          source={{ uri: image }}
          className="w-16 h-16 rounded-full"
          resizeMode="cover"
        />
        <Text className="text-white py-1 font-psemibold" numberOfLines={1}>
          {name}
        </Text>
        <Text
          numberOfLines={2}
          className="text-white font-pregular text-xs text-center"
        >
          {tagline}
        </Text>
        <Text className="text-white pt-1 font-pregular text-xs text-center">
          {connection}
        </Text>
        <TouchableOpacity className="border border-blue px-3 py-1 rounded-full my-4">
          <Text className="text-blue font-psemibold">Connect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default UserCard;
