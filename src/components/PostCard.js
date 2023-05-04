import React, { Component } from 'react'
import { Text, View , Pressable, Image } from 'react-native';
import { withNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
const Stack = createNativeStackNavigator();

class ProjCard extends Component {
  render() {
    return (
      <Pressable className="bg-secondary p-2 rounded-md border border-stroke my-2 text-dark divide-y divide-stroke" onPress={() => this.props.navigation.navigate('Post')}>
        <View className="pb-1">
          <Text>
            Professor 1 postou um novo comunicado:
          </Text>

          <Text className="my-2 font-medium text-lg">
            Prazo extendido para quinta-feira.
          </Text>

          <Text className="text-xs opacity-70">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </Text>
        </View>
        <View>
          <Text className="mt-3">
            10 Comentários
          </Text>
        </View>

      </Pressable>
    )
  }
}

export default ProjCard;