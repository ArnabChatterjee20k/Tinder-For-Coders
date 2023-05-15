import React from "react";
import { Text, Button ,View} from "react-native";
import { useAuth } from "../hooks/useAuth";
import SafeAreaView from "../components/SafeAreaView";
import Header from "../components/Header";
import SwipeArea from "../components/SwipeArea";

export default function Home() {
  const {user,logOut} = useAuth()
  return (
    <SafeAreaView>
      <Header/>
      <SwipeArea/>

      
    </SafeAreaView>
  );
}