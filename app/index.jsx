import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import CustomLoginBtn from "../components/CustomLoginBtn";

const Index = () => {
  const [isSelected, setIsSelected] = useState(false);
  const handlePress = () => {};

  return (
    <SafeAreaView className="flex-1 bg-black-100">
      <View className="flex-1 px-4 justify-center">
        <Image
          source={{
            uri: "https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png",
          }}
          className="w-24 h-7"
          resizeMode="contain"
        />

        <View className="mt-7">
          <Text className="text-white text-3xl font-psemibold">Sign in</Text>
          <View className="flex flex-row pt-2">
            <Text className="text-gray-100 font-pregular">or </Text>
            <Text className="text-blue font-psemibold">Join Linkedin</Text>
          </View>
        </View>

        <View className="mt-7">
          <CustomLoginBtn
            handlePress={handlePress}
            title="Sign in with Google"
            name="google"
          />
          <CustomLoginBtn
            handlePress={handlePress}
            title="Sign in with Apple"
            name="apple"
          />
          <CustomLoginBtn
            handlePress={handlePress}
            title="Sign in with Facebook"
            name="facebook"
          />
        </View>

        <Text className="my-4 text-white font-psemibold text-center">or</Text>

        <View className="space-y-7">
          <TextInput
            placeholder="Email or Phone"
            className="text-white border-b border-gray-200 font-pregular"
            placeholderTextColor="#C0C0C0"
          />

          <View>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              className="text-white border-b border-gray-200 font-pregular"
              placeholderTextColor="#C0C0C0"
            />
            <View>
              <CustomButton
                handlePress={() => {}}
                className="bg-blue w-full h-3 mt-7"
                textStyle="font-psemibold text-xl"
                title="Sign in"
              />
            </View>
          </View>
        </View>
      </View>
      <StatusBar backgroundColor="#000000" style="light" />
    </SafeAreaView>
  );
};
export default Index;
