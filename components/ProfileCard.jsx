import { View, Text, Image } from "react-native";
import React from "react";

export default function ProfileCard({
  firstName,
  lastName,
  occupation,
  photoUrl,
  age,
}) {
  return (
    <View className="relative bg-white h-3/4 rounded-2xl shadow-lg">
      <Image
        className="absolute top-0 h-full w-full rounded-xl object-cover"
        source={{ uri: photoUrl }}
      />
      <View className="rounded-2xl bg-white w-full absolute bottom-0 flex-row justify-between px-4 py-2 items-center">
        
        <View>
          <Text className="font-semibold text-xl">
            {firstName} {lastName}
          </Text>
          <Text>{occupation}</Text>
        </View>

        <View>
          <Text className="font-semibold text-2xl">{age}</Text>
        </View>
        
      </View>
    </View>
  );
}
