import { Text, TouchableOpacity } from "react-native";
const CustomButton = ({ title, className, textStyle, handlePress }) => {
  return (
    <TouchableOpacity
      className="bg-blue px-4 py-3 rounded-full mt-7"
      onPress={handlePress}
    >
      <Text className={`${textStyle} text-white text-center`}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
