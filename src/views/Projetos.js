
import { Text, ScrollView } from 'react-native';
import  ProjCard  from '../components/ProjCard';

export default function Projetos({navigation}) {
  return (
      <ScrollView className="flex-1  bg-main px-8 pb-28">
      
          <Text className="mt-16 mb-6 text-2xl">
            Seus Projetos
          </Text>
          
          <ProjCard navigation={navigation}/>
          <ProjCard navigation={navigation}/>
          <ProjCard navigation={navigation}/>
          <ProjCard navigation={navigation}/>
          <ProjCard navigation={navigation}/>
      
    </ScrollView>
  );
}
