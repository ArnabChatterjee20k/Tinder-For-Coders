import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Swiper from "react-native-deck-swiper";
import duumyData from "../data/duumyData";
import ProfileCard from "./ProfileCard";

export default function SwipeArea() {
  return (
    <View>
      <Swiper
        cards={duumyData}
        renderCard={(card, index) => <ProfileCard key={index} {...card} />}
        stackSize={3}
        cardIndex={0}
        animateCardOpacity
        overlayLabels={{
          left: {
            element: <Text className="text-2xl text-red-700 font-bold">NOPE</Text> /* Optional */,
            title: "NOPE",
            style: {
              label: {
                backgroundColor: "black",
                borderColor: "black",
                color: "white",
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                marginTop: 30,
                marginLeft: -30,
              },
            },
          },
          right: {
            element: <Text className="text-2xl text-green-700 font-bold">MATCH</Text> /* Optional */,
            title: "LIKE",
            style: {
              label: {
                backgroundColor: "black",
                borderColor: "black",
                color: "white",
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: 30,
                marginLeft: 30,
              },
            },
          },
        }}
      ></Swiper>
    </View>
  );
}
