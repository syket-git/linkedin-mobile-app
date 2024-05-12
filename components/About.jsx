import { Text, View } from "react-native";
const About = () => {
  return (
    <View className="px-3 my-3">
      <Text className="text-xl font-psemibold text-white">About</Text>
      <View className="mt-2">
        <Text className="text-gray-100 font-pregular">
          Hi, I’m Syket 👋 - Fullstack Developer | Mobile App Developer |
          Content Creator.
        </Text>

        <Text className="text-gray-100 pt-2 font-pregular">
          Currently contributing to Creowis Technologies, to make some amazing
          products. I love exploring core Engineering concepts across the Web,
          engaging with conferences, and podcasts 🎧, and consuming articles
          from various corners of the Internet.
        </Text>

        <Text className="text-gray-100 font-pregular pt-2">
          Get to know my skills and what I do in short? 👇
        </Text>

        <Text className="text-gray-100 font-pregular pt-2">
          I solve problems using Data Structures and Algorithms. (100+ problems
          on LeetCode, GeeksForGeeks and Coding Ninja)
        </Text>

        <Text className="text-gray-100 font-pregular py-2">
          Technical Skills
        </Text>

        <Text className="text-gray-100  font-pregular">
          • Languages - JavaScript, TypeScript, and C#
        </Text>
        <Text className="text-gray-100 font-pregular">
          • Web - React.js, Redux.js, Next.js, Webpack, Jest, NestJS, GraphQL
          and Apollo
        </Text>
        <Text className="text-gray-100 font-pregular">
          • Mobile App Development - React Native
        </Text>
        <Text className="text-gray-100 font-pregular">
          • Tools - Keycloak, Docker, Git, MySQL and Hasura
        </Text>
        <Text className="text-gray-100 font-pregular">
          • Course Work - Data Structures, Algorithms, Object Oriented
          Programming (OOPs)
        </Text>
      </View>
    </View>
  );
};
export default About;
