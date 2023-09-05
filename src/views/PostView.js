import {
  Text,
  ScrollView,
  View,
  FlatList,
  Image,
  TextInput,
} from "react-native";

import commentService from "../services/comments";
import { useEffect, useState } from "react";

const Profile =
  "https://lens-storage.storage.googleapis.com/png/2cb7d9a152804c0ba73f51a98e63b6a7";

export default function Postagens() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await commentService.getAllComments();
      setComments(data);
    }
    fetchData();
  }, []);


  return (
    <ScrollView className="flex-1  bg-main px-8 pb-28">
      <Text className="mt-16 mb-6 text-xl">
        Prazo extendido para quinta-feira
      </Text>

      {/* Post Body */}
      <View className="bg-secondary text-dark p-2 rounded-md border border-stroke my-2 divide-y divide-stroke">
        <View className="">
          <Text className="text-base font-semibold my-3">
            Lorem ipsum dolor sit amet:
          </Text>

          {/* Quero Fazer com que haja formatação de texto nesse app, podendo enviar textos com partes em bold e italic */}
          <Text className="opacity-70">
            consectetur adipiscing elit. Vestibulum malesuada mollis magna non
            maximus. Donec ut quam sed sem efficitur mattis. Morbi eleifend
            consequat accumsan.
          </Text>

          <Text className="opacity-70 font-bold my-3">
            Nulla scelerisque
            <Text className="font-normal"> gravida auctor. </Text>
          </Text>

          <Text className="opacity-70">
            dapibus nulla vel, dapibus ante. Maecenas condimentum iaculis magna,
            id commodo nisi efficitur eu. Vivamus semper commodo odio sed
            rutrum. Nullam quis velit vulputate, finibus quam sit amet, lacinia
            diam. Cras ut eros non est scelerisque porta et eu velit. Phasellus
            ligula dui, efficitur consectetur efficitur sit amet, finibus sed
            sem. Vivamus nec ligula id erat volutpat dapibus quis a ex. Integer
            venenatis, arcu et pulvinar gravida, tellus odio aliquet diam, ac
            posuere velit tellus nec lorem.
          </Text>

          <Text className="opacity-60 font-bold my-3">
            Sed cursus erat ac lacus elementum:
            <FlatList
              data={[
                { key: "id ornare lorem" },
                { key: "accumsan" },
                { key: "Aenean a cursus nibh" },
                { key: "vitae vulputate tellus" },
              ]}
              renderItem={({ item }) => (
                <Text className="opacity-70">● {item.key};</Text>
              )}
            />
          </Text>
        </View>

        <View>
          <Text className="mb-3">10 Comentários</Text>

          {/* Add Comment Box */}

          <View className="flex flex-row pr-12">
            <Image
              className="w-10 h-10 rounded-full"
              source={{ uri: Profile }}
            ></Image>
            <View className="ml-2 flex justify-center w-full">
              <TextInput
                placeholder="Adicione um comentário"
                multiline={true}
              />
              <View className="border-b border-b-stroke"></View>
            </View>
          </View>
        </View>
        {/* Comment Box */}
        <View className="flex flex-col pr-12 mt-2">
          {comments.map((comment) => (
            <View className="mt-1 flex flex-col w-full" key={comment.id}>
              <Text className="text-shadow text-sm w-full"> {comment.usuario} </Text> 
              <Text className="text-sm"> {comment.texto} </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
