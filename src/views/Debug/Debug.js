import { View, Text, Pressable } from "react-native";
import {
  getItem,
  deleteItem,
} from "../../plugins/SecureStorage/secureStorageHandler";
import { getAll } from "../../services/Getters/projects";
import { useEffect, useState } from "react";

export default function Debug({ navigation }) {
  const [token, setToken] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getToken = async () => {
      const token = await getItem("token");
      setToken(token);
    };
    getToken();
  }, []);

  const handleLogout = async () => {
    await deleteItem("token");
    navigation.replace("Login");
  };

  const testApi = async () => {
    const projects = await getAll();

    if (projects) {
      console.log(projects);
      setProjects(projects);
    }
  };
  return (
    <View className="bg-dark h-screen flex justify-center items-center text-stroke">
      <Text className="text-stroke text-2xl">Debug</Text>
      <View className="flex justify-center items-center p-10">
        <View className="border-4 border-amber-400 border-dashed h-1/2">
          <Text className="text-stroke text-sm p-2">
            <Text className="text-lg text-highlight">Token: </Text>
            {token}
          </Text>
          <Pressable
            className="bg-highlight rounded-lg p-2 mt-6"
            onPress={handleLogout}
          >
            <Text className="text-dark">Logout</Text>
          </Pressable>
        </View>
        <Pressable className="bg-red-500 rounded-lg p-2 mt-2" onPress={testApi}>
          <Text className="text-dark">Teste api</Text>
        </Pressable>

        <Text className="text-lg text-highlight">Projetos: </Text>
        {projects.map((project) => (
          <Text key={project.id} className="text-stroke">
            {project.data}
          </Text>
        ))}
      </View>
    </View>
  );
}
