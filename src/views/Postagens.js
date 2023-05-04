import { Text, ScrollView } from 'react-native';
import  PostCard  from '../components/PostCard';

export default function Projetos({navigation}) {
  return (
      <ScrollView className="flex-1  bg-main px-8 pb-28">
      
          <Text className="mt-16 mb-6 text-2xl">
            Postagens
          </Text>
          
          <PostCard navigation={navigation}/>
          <PostCard navigation={navigation}/>
          <PostCard navigation={navigation}/>
          <PostCard navigation={navigation}/>
          <PostCard navigation={navigation}/>
      
    </ScrollView>
  );
}