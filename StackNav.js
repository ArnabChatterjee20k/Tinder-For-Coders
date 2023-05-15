import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./screens/Home";
import Chat from "./screens/Chat";
import Login from "./screens/Login";
import { useAuth } from "./hooks/useAuth";
import localStorage from "./utils/localStorage";
const Stack = createNativeStackNavigator();
export default function StackNav() {
  const {user} = useAuth()
  // localStorage.getUser().then(data=>console.log(data))
  // console.log({user})
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Chat" component={Chat} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      )}
    </Stack.Navigator>
  );
}