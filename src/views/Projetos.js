
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ProjCard from '../components/ProjCard';
import { useRecoilValue } from 'recoil';
import { userToken } from '../store/atoms';

export default function Projetos({ navigation }) {

  const token = useRecoilValue(userToken);
  //state for posts
  const [projects, setProjects] = useState([]);


  // Using useEffect, get all the projects from the API with a bearer token
  // and store them on the state

  useEffect(() => {
    axios.get('https://gerenciaback-iy0h-dev.fl0.io/api/projetos/', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then((response) => {
      setProjects(response.data);
      console.log(token)
      console.log(response.data)
    }).catch((error) => {
      console.log(error);
    })


  }, []);




  return (
    <ScrollView className="flex-1  bg-main px-8 pb-28">

      <Text className="mt-16 mb-6 text-2xl">
        Seus Projetos
      </Text>

      {/* Loop for all projects */}
      {projects.map((project) => (
        <ProjCard key={project.id} projeto={project} navigation={navigation} />
      ))}

    </ScrollView>
  );
}

