import { Text, View } from "react-native";
const UserCard = ({ user }) => {
  const { bannerImage, image, name, tagline, connection } = user;

  return (
    <View className="w-[150px] h-[200px] border border-white">
      <Text>UserCard</Text>
    </View>
  );
};
export default UserCard;
