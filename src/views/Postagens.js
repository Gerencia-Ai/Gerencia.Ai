import commentService from "../services/comments";
import { useEffect, useState } from "react";
import React, { Component } from 'react'
import { Text, View , Pressable, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";



export default function Posts() {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      const data = await postService.getAllPosts();
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
      <ScrollView className="flex-1  bg-main px-8 pb-28">
      
          <Text className="mt-16 mb-6 text-2xl">
            Postagens
          </Text>
          {posts.map((post) => (
            <Pressable className="bg-secondary p-2 rounded-md border border-stroke my-2 text-dark divide-y divide-stroke" onPress={() => navigation.navigate('Post')}>
              <View className="pb-1">
                <Text>
                  Professor 1 postou um novo comunicado:
                </Text>

                <Text className="my-2 font-medium text-lg">
                  {post.titulo}
                </Text>

                <Text className="text-xs opacity-70">
                {post.descricao}
                </Text>
              </View>
              <View>
                <Text className="mt-3">
                  10 Comentários
                </Text>
              </View>

            </Pressable>
          ))}
      
      
    </ScrollView>
  );
}