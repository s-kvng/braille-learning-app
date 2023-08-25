import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import styles from "./lettercard.style";

const LetterCard = ({ item, selectedWord, setSelectedWord, speak }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedWord, item)}
      onPress={() => {
        setSelectedWord(item.braille_id);
        speak(item.translation, item.braille_format);
      }}
    >
      <Text style={styles.brailleText(selectedWord, item)}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default LetterCard;
