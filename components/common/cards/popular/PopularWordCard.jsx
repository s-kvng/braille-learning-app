import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./popularwordcard.style";

const PopularWordCard = ({ item, selectedWord, setSelectedWord, speak }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedWord, item)}
      onPress={() => {
        setSelectedWord(item.word_id);
        speak(item.word, item.translation);
      }}
    >
      <Text style={styles.brailleText(selectedWord, item)}>{item.word}</Text>
    </TouchableOpacity>
  );
};

export default PopularWordCard;
