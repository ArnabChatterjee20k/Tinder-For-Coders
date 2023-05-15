import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

function useNoHeader() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
}

export default useNoHeader;
