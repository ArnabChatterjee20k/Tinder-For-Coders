import React from "react";
import { Text, Button ,View} from "react-native";
import { useAuth } from "../hooks/useAuth";
// import * as WebBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";
// EXPO_CLIENT_ID = "380957708851-0vjnar1bk2gpfl81i62kkaipm16ocv07.apps.googleusercontent.com"
// ANDROID_CLIENT_ID = "380957708851-8tgfnv6eggppgva63fug28vpo8q2prdj.apps.googleusercontent.com"

export default function Home() {
  
  const {user,logOut} = useAuth()
  return (
    <View>
      <Text>{user.displayName}</Text>
      <Text>{user.email}</Text>
      <Button title="Logout" onPress={logOut}/>
    </View>
  );
}
