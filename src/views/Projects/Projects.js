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
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProjects();
  }, []);

  return (
    <>
      <ScrollView className="flex-1  bg-main px-8 pb-28">
        <Text className="mt-16 mb-6 text-2xl">Seus Projetos</Text>
        {/* Loading indicator */}
        {!projects && !loading && <Text>Nenhum projeto encontrado</Text>}

        {!loading && projects && projects.length > 0 ? (
          projects.map((project) => (
            <ProjCard
              key={project.id}
              projeto={project}
              navigation={navigation}
            />
          ))
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </ScrollView>
    </>
  );
}
