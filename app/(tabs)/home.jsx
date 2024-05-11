import { StatusBar } from "expo-status-bar";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import PostCard from "../../components/PostCard";
import { posts } from "../../constants/data";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-black-200">
      <View className="flex-1">
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PostCard post={item} />}
          ListHeaderComponent={() => <CustomHeader />}
        />
      </View>
      <StatusBar backgroundColor="#000000" style="light" />
    </SafeAreaView>
  );
};
export default Home;
