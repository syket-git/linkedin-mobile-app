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
    <SafeAreaView className="flex-1  bg-black-200">
      <>
        <FlatList
          data={[]}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <>
              {invitations?.map((item, i) => (
                <InvitationCard key={i} item={item} />
              ))}
              <FlatList
                data={users}
                columnWrapperStyle={{
                  flex: 1,
                  paddingHorizontal: 12,
                  gap: 12,
                  justifyContent: "space-around",
                }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <UserCard item={item} />}
                numColumns={2}
                ListHeaderComponent={() => (
                  <View className="px-3 mt-7">
                    <Text className="text-white font-psemibold">
                      Software Engineers you may know
                    </Text>
                  </View>
                )}
              />
            </>
          )}
          ListHeaderComponent={() => (
            <View>
              <CustomHeader />

              <View className="flex px-3 pt-3 flex-row items-center justify-between">
                <Text className="text-white font-pregular">
                  Manage my network
                </Text>
                <TouchableOpacity>
                  <AntDesign name="arrowright" size={24} color="#929292" />
                </TouchableOpacity>
              </View>

              <View className="flex px-3 pt-6 flex-row items-center justify-between">
                <Text className="text-white font-pregular">
                  Invitations {`(2)`}
                </Text>
                <TouchableOpacity>
                  <AntDesign name="arrowright" size={24} color="#929292" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </>

      <StatusBar backgroundColor="#000000" style="light" />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
export default MyNetwork;
