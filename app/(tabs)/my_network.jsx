import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import InvitationCard from "../../components/InvitationCard";
import UserCard from "../../components/UserCard";
import { invitations, users } from "../../constants/data";

const MyNetwork = () => {
  return (
    <SafeAreaView className="flex-1 bg-black-200">
      {/* <ScrollView> */}
      <CustomHeader />

      <View className="flex px-3 pt-3 flex-row items-center justify-between">
        <Text className="text-white font-pregular">Manage my network</Text>
        <TouchableOpacity>
          <AntDesign name="arrowright" size={24} color="#929292" />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={invitations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <InvitationCard item={item} />}
          ListHeaderComponent={() => (
            <View className="flex px-3 pt-6 flex-row items-center justify-between">
              <Text className="text-white font-pregular">
                Invitations {`(2)`}
              </Text>
              <TouchableOpacity>
                <AntDesign name="arrowright" size={24} color="#929292" />
              </TouchableOpacity>
            </View>
          )}
        />

        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={(user) => <UserCard user={user} />}
          ListHeaderComponent={() => (
            <View className="px-3 mt-7">
              <Text className="text-white font-psemibold">
                Software Engineers you may know
              </Text>
            </View>
          )}
          // contentContainerStyle={{ display: "flex", direction: "row" }}
        />
      </View>

      <StatusBar backgroundColor="#000000" style="light" />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
export default MyNetwork;
