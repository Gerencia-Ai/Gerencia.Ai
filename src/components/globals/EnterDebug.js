import { Pressable, Text } from "react-native";
export default function EnterDebug({ navigation }) {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Debug");
      }}
    >
      <Text>ENTER DEBUG</Text>
    </Pressable>
  );
}
