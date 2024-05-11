import { StatusBar } from "expo-status-bar";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import JobCard from "../../components/JobCard";
import { jobs } from "../../constants/data";

const Jobs = () => {
  return (
    <SafeAreaView className="flex-1 bg-black-200">
      <View className="flex-1">
        <FlatList
          data={jobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <JobCard job={item} />}
          ListHeaderComponent={() => <CustomHeader />}
        />
      </View>
      <StatusBar backgroundColor="#000000" style="light" />
    </SafeAreaView>
  );
};
export default Jobs;
