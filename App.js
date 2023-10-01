import { RecoilRoot } from "recoil";
import {
  getItem,
  deleteItem,
} from "./src/plugins/SecureStorage/secureStorageHandler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Projetos from "./src/views/Projects/Projects.js";
import Login from "./src/views/LoginAndRegister/Login.js";
import Postagens from "./src/views/Posts/Postagens.js";
import Post from "./src/views/Posts/PostView.js";
import Debug from "./src/views/Debug/Debug";

import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [logged, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const userLoggedIn = getItem("token");
    console.log(
      "🚀 ~ file: App.js:23 ~ useEffect ~ userLoggedIn:",
      typeof userLoggedIn
    );

    if (typeof userLoggedIn === "string") {
      setLoggedIn(true);
    }
  }, []);

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {!logged ? <Stack.Screen name="Login" component={Login} /> : null}
          <Stack.Screen name="Projetos" component={Projetos} />
          <Stack.Screen name="Postagens" component={Postagens} />
          <Stack.Screen name="Post" component={Post} />
          <Stack.Screen name="Debug" component={Debug} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
