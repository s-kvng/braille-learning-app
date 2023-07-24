import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import styles from "./lettercard.style";

const LetterCard = ({ item, selectedWord, setSelectedWord }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedWord, item)}
      onPress={() => {
        setSelectedWord(item.braille_id);
      }}
    >
      <Text style={styles.brailleText(selectedWord, item)}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default LetterCard;
