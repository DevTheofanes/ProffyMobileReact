import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

// import GiveClassesBgImg from "../../assets/give-classes-background.png";
// import { RectButton } from "react-native-gesture-handler";

function TeacherList() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <Text>TeacherList</Text>
    </View>
  );
}

export default TeacherList;
