import { Text, ScrollView, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import ProjCard from "../../components/Projects/ProjectCard";
import { getAll } from "../../services/Getters/projects";

export default function Projetos({ navigation }) {
  //state for posts
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  // get all posts and handle errors
  const fetchProjects = async () => {
    try {
      const response = await getAll().catch((err) => {
        console.log(err);
      });
      setProjects(response);
      setLoading(false);
    } catch (a) {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProjects();
  }, []);

  return (
    <ScrollView className="flex-1  bg-main px-8 pb-28">
      <Text className="mt-16 mb-6 text-2xl">Seus Projetos</Text>
      {/* Loading indicator */}
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {!projects && !loading && <Text>Nenhum projeto encontrado</Text>}

      {projects.map((project) => (
        <ProjCard key={project.id} projeto={project} navigation={navigation} />
      ))}
    </ScrollView>
  );
}
