import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  FontAwesome6,
} from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Insightful from "../assets/icons/insightful.png";
import Like from "../assets/icons/like.png";
import Love from "../assets/icons/love.png";
import CustomTextComponent from "./CustomTextComponent";

const PostCard = ({ post }) => {
  const { name, profileImage, tagline, description, posterImages } = post;
  return (
    <View className="bg-black my-3">
      <View className="px-3 overflow-hidden gap-x-3 flex flex-row items-center justify-between">
        <TouchableOpacity>
          <Image
            source={{ uri: profileImage }}
            resizeMode="contain"
            className="w-10 h-10 rounded-full"
          />
        </TouchableOpacity>
        <TouchableOpacity className="flex-1">
          <Text className="text-white text-sm font-psemibold">{name}</Text>
          <CustomTextComponent
            text={tagline}
            textStyle="text-xs font-pregular"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={18} color="#c0c0c0" />
        </TouchableOpacity>
      </View>
      <View className="px-3 pt-3">
        <Text className="text-gray-50 text-xs font-pregular" numberOfLines={2}>
          {description}
        </Text>
      </View>
      <View className="mt-3">
        <Image
          source={{ uri: posterImages[0] }}
          resizeMode="cover"
          className="w-full h-56"
        />
      </View>
      <View className="px-3 flex flex-row items-center justify-between pt-3">
        <View className="flex flex-row">
          <View className="bg-gray-50 w-5 h-5 flex items-center justify-center rounded-full">
            <Image className="w-3 h-3" resizeMode="contain" source={Like} />
          </View>
          <View className="bg-gray-50 -ml-1 w-5 h-5 flex items-center justify-center rounded-full">
            <Image
              className="w-3 h-3"
              resizeMode="contain"
              source={Insightful}
            />
          </View>
          <View className="bg-gray-50 -ml-1 w-5 h-5 flex items-center justify-center rounded-full">
            <Image className="w-3 h-3" resizeMode="contain" source={Love} />
          </View>
        </View>
        <Text className="text-gray-200">3 comments</Text>
      </View>
      <View className="flex px-3 my-3 items-center justify-between flex-row">
        <TouchableOpacity className="flex flex-row items-start gap-1">
          <Image
            source={{ uri: profileImage }}
            resizeMode="contain"
            className="w-8 h-8 rounded-full"
          />
          <FontAwesome5
            name="sort-down"
            className="mb-8"
            size={24}
            color="#929292"
          />
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center">
          <AntDesign name="like2" size={24} color="#929292" />
          <Text className="text-gray-200 text-xs mt-1 font-pregular">Like</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center">
          <FontAwesome6 name="commenting" size={24} color="#929292" />
          <Text className="text-gray-200 text-xs mt-1 font-pregular">
            Comment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center">
          <AntDesign name="retweet" size={24} color="#929292" />
          <Text className="text-gray-200 text-xs mt-1 font-pregular">
            Repost
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center">
          <Feather name="send" size={24} color="#929292" />
          <Text className="text-gray-200 text-xs mt-1 font-pregular">Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PostCard;
