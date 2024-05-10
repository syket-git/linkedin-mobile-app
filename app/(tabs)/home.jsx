import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";

const Home = () => {
  const PostCard = () => {
    return (
      <View>
        <Text className="text-white">Post Card</Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-black-200">
      <View className="flex-1">
        <FlatList
          data={[1, 2, 3, 4]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <PostCard />}
          ListHeaderComponent={() => <CustomHeader />}
        />
      </View>
      <StatusBar backgroundColor="#000000" style="light" />
    </SafeAreaView>
  );
};
export default Home;
