import { Image, Text, View } from "react-native";
const JobCard = ({ job }) => {
  const { title, companyName, location, image, time } = job;

  return (
    <View className="px-3 my-2 flex flex-row gap-x-3">
      <Image
        source={{ uri: image }}
        resizeMode="contain"
        className="w-16 h-16"
      />
      <View>
        <Text className="text-white text-sm font-psemibold">{title}</Text>
        <Text className="text-gray-100 text-xs font-pregular ">
          {companyName}
        </Text>
        <Text className="text-gray-100 text-xs font-pregular">{location}</Text>
        <Text className="text-green text-xs font-pregular">{time}</Text>
      </View>
    </View>
  );
};
export default JobCard;
