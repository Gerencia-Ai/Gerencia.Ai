import React, { Component } from 'react'
import { Text, View, Pressable, Image } from 'react-native';
import { withNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
const Stack = createNativeStackNavigator();

const Banner = "https://www.usinainfo.com.br/blog/wp-content/uploads/2016/07/IMG_8561-Copia.jpg"

class ProjCard extends Component {
  render() {
    return (
      <Pressable className="bg-secondary p-2 rounded-md border border-stroke my-2 h-72" onPress={() => this.props.navigation.navigate('Postagens', { project: this.props.projeto })}>
        <Text className="text-highlight font-bold text-xl">
          {this.props.projeto.nome}
        </Text>

        {this.props.projeto.professor.length = 1 ? (
          <Text className="text-dark text-base opacity-60 my-1">Professor: {this.props.projeto.professor}</Text>
        ) : (
          <Text className="text-dark text-base opacity-60 my-1">Professores: {this.props.projeto.professor}</Text>
        )}

        <View>
          <Image className="w-full h-52 rounded-md opacity-75" source={{ uri: this.props.projeto.capa.file }} />
          <View className="w-full h-52 rounded-md bg-gradient-to-r from-secondary to-highlight" ></View>
        </View>
      </Pressable>
    )
  }
}

export default ProjCard;