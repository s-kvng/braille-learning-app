import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./popularwordcard.style";

const PopularWordCard = ({ item, selectedWord, setSelectedWord }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedWord, item)}
      onPress={() => setSelectedWord(item.word_id)}
    >
      <Text style={styles.brailleText}>{item.word}</Text>
    </TouchableOpacity>
  );
};

export default PopularWordCard;
