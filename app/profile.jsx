import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import About from "../components/About";
import Intro from "../components/Intro";
import ProfileTopHeader from "../components/ProfileTopHeader";

const profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-black-100">
      <ScrollView className="flex-1">
        <ProfileTopHeader />
        <Intro />
        <About />
      </ScrollView>

      <StatusBar style="light" />
    </SafeAreaView>
  );
};
export default profile;
