import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

const CustomLoginBtn = ({ title, name, handlePress }) => {
  const icons = (name) => {
    switch (name) {
      case "google":
        return <AntDesign name="google" size={24} color="white" />;
      case "apple":
        return <AntDesign name="apple1" size={24} color="white" />;
      case "facebook":
        return <AntDesign name="facebook-square" size={24} color="white" />;
    }
  };

  return (
    <TouchableOpacity
      className="border my-2 rounded-full border-gray-300 px-4 py-3 flex-row items-end justify-center space-x-2"
      onPress={handlePress}
    >
      {icons(name)}
      <Text className="text-gray-100 font-psemibold">{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomLoginBtn;
