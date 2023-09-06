import { Text, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';
import { useRecoilValue } from 'recoil';
import { userToken } from '../store/atoms';


export default function Projetos({ navigation, route }) {
  const project = route.params.project;
  const [posts, setPosts] = useState([]);
  const token = useRecoilValue(userToken);

  useEffect(() => {
    axios.get('https://gerenciaback-iy0h-dev.fl0.io/api/posts/', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then((response) => {
      setPosts(response.data);
      console.log(response.data)
    }).catch((error) => {
      console.log(error);
    })
  })


  return (
    <ScrollView className="flex-1  bg-main px-8 pb-28">

      <Text className="mt-16 mb-6 text-2xl">
        Postagens em {project.nome}
      </Text>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} navigation={navigation} />
      ))}

    </ScrollView>
  );
}
