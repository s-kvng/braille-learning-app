import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import styles from "./lettercard.style";

const LetterCard = ({ item, selectedWord, setSelectedWord, speak }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedWord, item)}
      onPress={() => {
        setSelectedWord(item.braille_id);
        speak(item.braille_name, item.translation);
      }}
    >
      <Text style={styles.brailleText(selectedWord, item)}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default LetterCard;
