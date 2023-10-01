import React, { Component } from 'react'
import { Text, View, Pressable, Image } from 'react-native';

class ProjCard extends Component {
  render() {
    return (
      <Pressable className="bg-secondary p-2 rounded-md border border-stroke my-2 h-72" onPress={() => this.props.navigation.navigate('Postagens', { project: this.props.projeto })}>
        <Text className="text-highlight font-bold text-xl">
          {this.props.projeto.nome}
        </Text>

        <Text className="text-dark text-base opacity-60 my-1">Professor: {this.props.projeto.professor.email}</Text>

        <View>
          <Image className="w-full h-52 rounded-md opacity-75" source={{ uri: this.props.projeto.capa.file }} />
          <View className="w-full h-52 rounded-md bg-gradient-to-r from-secondary to-highlight" ></View>
        </View>
      </Pressable>
    )
  }
}

export default ProjCard;