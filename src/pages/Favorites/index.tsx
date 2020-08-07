import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

// import GiveClassesBgImg from "../../assets/give-classes-background.png";
// import { RectButton } from "react-native-gesture-handler";

function Favorites() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
    </View>
  );
}

export default Favorites;
