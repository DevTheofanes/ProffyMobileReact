import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";

// import GiveClassesBgImg from "../../assets/give-classes-background.png";
// import { RectButton } from "react-native-gesture-handler";

function TeacherList() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />
    </View>
  );
}

export default TeacherList;
