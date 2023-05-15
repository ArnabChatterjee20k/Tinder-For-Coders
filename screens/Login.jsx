import { View, Text , ImageBackground,TouchableOpacity} from "react-native";
import React from "react";
import { useAuth } from "../hooks/useAuth";
import imageData from "../data/imageData";
import useNoHeader from "../hooks/useNoHeader";

export default function Login() {
  const { signInWithGoogle, user ,request} = useAuth();
  useNoHeader()
  
  return (
    <View className="flex-1">
      <ImageBackground source={{uri:imageData.LOGIN_BG}} className="flex-1">
        <TouchableOpacity className="absolute bottom-40 mx-[25%] bg-white rounded-2xl p-4 w-52" onPress={async()=>await signInWithGoogle()} disabled={!request}>
          <Text className="text-center font-semibold">Sign In & Get Swiping</Text>
        </TouchableOpacity>
      </ImageBackground>

    </View>
  );
}