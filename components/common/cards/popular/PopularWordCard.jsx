import React from "react";
import { View, Text } from "react-native";

import styles from "./popularwordcard.style";

const PopularWordCard = ({ item }) => {
  return (
    <View>
      <Text>{item.word}</Text>
    </View>
  );
};

export default PopularWordCard;
