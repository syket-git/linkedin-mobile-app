import {
  Entypo,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Intro = () => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://media.licdn.com/dms/image/D5616AQHWg-WNZc3Xfg/profile-displaybackgroundimage-shrink_350_1400/0/1712842947189?e=1721260800&v=beta&t=jlxds5ey5cM8mJrYQXhhEaEvNJ6kv4gzwyHT1fEyXYk",
        }}
        resizeMode="contain"
        className="w-full h-24"
      />

      <TouchableOpacity className="w-8 h-8 bg-black-100 rounded-full absolute flex items-center justify-center right-2 top-2">
        <MaterialIcons name="edit" size={20} color="#0B66C3" />
      </TouchableOpacity>

      <View className="-mt-14 w-28 h-28 relative px-3">
        <Image
          source={{
            uri: "https://media.licdn.com/dms/image/D5603AQF7BEb_wD7wtg/profile-displayphoto-shrink_400_400/0/1681474832936?e=1721260800&v=beta&t=1bDyqxGQOUqu-5CaCnd8KYfZXAArGQabJnvLGt7iWsY",
          }}
          resizeMode="contain"
          className="w-28 h-28 rounded-full"
        />
        <TouchableOpacity className="absolute bottom-2 bg-black-100 rounded-full -right-3">
          <Entypo name="circle-with-plus" size={32} color="#0B66C3" />
        </TouchableOpacity>
      </View>

      <View className="px-3 py-4">
        <Text className="text-white text-xl font-psemibold">
          Syket Bhattachergee
        </Text>
        <Text className="text-white font-pregular pt-1">
          Full Stack and React Native Developer
        </Text>
        <Text className="text-white font-pregular pt-1">
          CreoWis Technologies
        </Text>
        <Text className="text-gray-100 font-pregular">
          Chittagong, Bangladesh
        </Text>

        <Link
          className="text-blue font-psemibold my-2"
          href="https://syketb.vercel.app"
        >
          Personal Website{" "}
          <Feather name="external-link" size={16} color="#0B66C3" />
        </Link>

        <Text className="text-blue font-psemibold">
          2385 followers . 500+ connections
        </Text>
      </View>
      <View className="flex items-center flex-row justify-between gap-x-2">
        <View className="flex-1 flex-row gap-x-2">
          <TouchableOpacity className="border bg-blue  py-2 rounded-full border-blue flex-1">
            <Text className="text-white font-pregular text-center">
              Open to
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="border-2 py-2 rounded-full border-blue flex-1">
            <Text className="text-blue font-pregular text-center">
              Add sections
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-horizontal-circle-outline"
            size={50}
            color="#737373"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Intro;
