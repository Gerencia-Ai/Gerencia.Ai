import { Text, View , TextInput, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Login({navigation}) {
  return (
    <View className="flex-1 items-center justify-center bg-main px-8">
        <View className="lg:h-2/3  w-full bg-secondary rounded-lg overflow-hidden border border-stroke shadow-xl shadow-shadow">

            <View className="h-1/2 bg-highlight flex justify-end p-2">
                <Text className="text-4xl text-secondary">Login</Text>
            </View>

            <View className="lg:h-1/2 p-2">

                <TextInput
                    placeholder="Nome de usuário"
                    className="my-2 border border-stroke rounded-md p-2 w-full"
                />

                <TextInput
                    placeholder="Senha"
                    className="my-2 border border-stroke rounded-md p-2 w-full"
                />


                <Pressable  
                    className="bg-highlight rounded-md mt-8 p-3 w-full"
                    onPress={() => navigation.navigate('Projetos')}
                > 

                    <Text className="text-secondary">Entrar</Text>

                </Pressable>

            </View>
        </View>  
      
    </View>
  );
}
