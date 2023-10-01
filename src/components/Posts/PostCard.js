import React, { Component } from "react";
import { Text, View, Pressable, Image } from "react-native";

class ProjCard extends Component {
  render() {
    return (
      <Pressable
        className="bg-secondary p-2 rounded-md border border-stroke my-2 text-dark divide-y divide-stroke"
        onPress={() => this.props.navigation.navigate("Post")}
      >
        <View className="pb-1">
          <Text className="my-2 font-medium text-lg">
            {this.props.post.titulo}
          </Text>

          <Text className="text-xs opacity-70">
            {this.props.post.descricao}
          </Text>
        </View>
        <View>
          <Text className="mt-3">Ontem</Text>
        </View>
      </Pressable>
    );
  }
}

export default ProjCard;
