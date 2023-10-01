import React, { Component } from "react";
import { Text, View, Pressable, Image } from "react-native";

class ProjCard extends Component {
  render() {
    return (
      <Pressable
        className="bg-secondary p-2 rounded-md border border-stroke my-2 h-72"
        onPress={() =>
          this.props.navigation.navigate("Postagens", {
            project: this.props.projeto,
          })
        }
      >
        <Text className="text-highlight font-bold text-xl">
          {this.props.projeto.nome}
        </Text>

        <Text className="text-gray-700 text-base opacity-60 my-1">
          Professor: {this.props.projeto.professor.email}
        </Text>

        <View className="border h-64">
          <Image
            className="h-96 w-full"
            source={{ uri: this.props.projeto.capa.file }}
            resizeMethod="resize"
          />
        </View>
      </Pressable>
    );
  }
}

export default ProjCard;
