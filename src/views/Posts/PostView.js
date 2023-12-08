import { Text, ScrollView, View, Image, TextInput } from "react-native";
import commentService from "../../services/comments";
import { Children, useEffect, useState } from "react";
import ParsedText from "react-native-parsed-text";

const Profile =
  "https://lens-storage.storage.googleapis.com/png/2cb7d9a152804c0ba73f51a98e63b6a7";

export default function Postagens({ navigation, route }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await commentService.getAllComments();
      setComments(data);
    }
    fetchData();
  }, []);

  const [text, setText] = useState("");

  return (
    <ScrollView className="flex-1  bg-main px-8 pb-28">
      <ParsedText
        className="mt-16 mb-6 text-xl"
        parse={[
          {
            pattern: /\*([^\*]+)\*/,
            style: { fontWeight: "bold", color: "#FFC107" },
            renderText: (text) => text.replace(/\*(.*?)\*/g, "$1"),
          },
          {
            // red
            pattern: /\!([^\!]+)\!/,
            style: { fontWeight: "bold", color: "#dc2626" },
            renderText: (text) => text.replace(/\!(.*?)\!/g, "$1"),
          },
        ]}
      >
        {route.params.post.titulo}
      </ParsedText>

      {/* Post Body */}
      <View className="bg-secondary text-dark p-2 rounded-md border border-stroke my-2 divide-y divide-stroke">
        <View className="">
          {/* Quero Fazer com que haja formatação de texto nesse app, podendo enviar textos com partes em bold e italic */}
          <Parsed text={route.params.post.descricao} style="text-lg" />
        </View>

        <View>
          <Text className="mb-3">{comments.length} Comentários</Text>

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
              <Text className="text-shadow text-sm w-full">
                {" "}
                {comment.usuario}{" "}
              </Text>
              <Text className="text-sm"> {comment.texto} </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const Parsed = (props) => {
  return (
    <ParsedText
      className={props.style}
      parse={[
        {
          pattern: /\*([^\*]+)\*/,
          style: { fontWeight: "bold", color: "#FFC107" },
          renderText: (text) => text.replace(/\*(.*?)\*/g, "$1"),
        },
        {
          // red
          pattern: /\!([^\!]+)\!/,
          style: { fontWeight: "bold", color: "#dc2626" },
          renderText: (text) => text.replace(/\!(.*?)\!/g, "$1"),
        },
      ]}
    >
      {props.text}
    </ParsedText>
  );
};
