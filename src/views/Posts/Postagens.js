import { Text, ScrollView, ActivityIndicator, View } from "react-native";
import { useState, useEffect } from "react";
import PostsService from "../../services/Getters/posts";
import PostCard from "../../components/Posts/PostCard.js";

export default function Projetos({ navigation, route }) {
  const project = route.params.project;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    try {
      const response = await PostsService.getAllPosts().catch((err) => {
        console.log(err);
      });
      setPosts(response);
      setLoading(false);
    } catch {
      console.log("Erro ao carregar posts");
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <ScrollView className="flex-1  bg-main px-8 pb-28">
      <Text className="mt-16 mb-6 text-2xl">Postagens em {project.nome}</Text>

      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <></>}

      {posts.map((post) => (
        <PostCard key={post.id} post={post} navigation={navigation} />
      ))}

      <View className="p-10 divide-slate-800"></View>
      <View></View>
      <View className="p-10 divide-slate-800"></View>
    </ScrollView>
  );
}
