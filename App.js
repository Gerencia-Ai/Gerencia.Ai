import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Projetos from './src/views/Projetos';
import Login from './src/views/Login';
import Postagens from './src/views/Postagens';
import Post from './src/views/PostView';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Projetos" component={Projetos} />
          <Stack.Screen name="Postagens" component={Postagens} />
          <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}


