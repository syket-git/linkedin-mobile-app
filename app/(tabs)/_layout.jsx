import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="my_network" />
      <Tabs.Screen name="create_post" />
      <Tabs.Screen name="notifications" />
      <Tabs.Screen name="jobs" />
    </Tabs>
  );
};
export default TabLayout;
