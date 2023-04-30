import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

const Banner = "https://www.usinainfo.com.br/blog/wp-content/uploads/2016/07/IMG_8561-Copia.jpg"

export default class ProjCard extends Component {


  render() {
    return (
      <View className="bg-secondary p-2 rounded-md border border-stroke my-2">
        <Text className="text-highlight font-bold text-xl">Projeto 1</Text>
        <Text className="text-dark text-base opacity-60 my-1">Professor 1, Professor 2</Text>
        
        <View>
            <Image className="w-full h-52 rounded-md opacity-75" source={{uri : Banner}} />
            {/* <View  className="w-full h-52 rounded-md bg-gradient-to-r from-secondary to-highlight" ></View> */}
        </View>
      </View>
    )
  }
}