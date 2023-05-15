import React from "react";
import { useAuth } from "../hooks/useAuth";
import { TouchableOpacity, View, Image } from "react-native";
import imageData from "../data/imageData";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import colorData from "../data/colorData";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const { user,logOut } = useAuth();
  const { photoURL = null } = user;
const navigation = useNavigation()
  return (
    <View className="flex-row items-center justify-between px-6">
      <TouchableOpacity onPress={logOut}>
        <Image source={{ uri: photoURL }} className="h-10 w-10 rounded-full" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={imageData.LOGO} className="h-14 w-14" />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Chat")}>
        <Ionicons name="chatbubble-sharp" size={30} color={colorData.PRIMARY} />
      </TouchableOpacity>
    </View>
  );
}
