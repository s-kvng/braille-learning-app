import { React, useState } from "react";
import * as Speech from "expo-speech";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import { useRouter } from "expo-router";

import styles from "./letters.style";
import { SIZES, COLOR, COLORS } from "../../../constants";

import LetterCard from "../../common/cards/letter/LetterCard";
import { alphabetBrailleCells } from "../../../constants";

const Letters = () => {
  const router = useRouter();
  const [selectedWord, setSelectedWord] = useState("");

  //
  const speak = (word, translation) => {
    const thingToSay = "show more";
    // Speech.speak(word);
    Speech.speak(translation);
  };

  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Alphabets</Text>
        <TouchableOpacity onPress={speak}>
          <Text style={styles.headerBtn}>Show more</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Someting went wrong</Text>
        ) : (
          <FlatList
            data={alphabetBrailleCells}
            renderItem={({ item }) => (
              <LetterCard
                item={item}
                selectedWord={selectedWord}
                setSelectedWord={setSelectedWord}
              />
            )}
            keyExtractor={(item) => item?.braille_name}
            contentContainerStyle={{
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
            }}
            numColumns={2}
          />
        )}
      </View>
    </View>
  );
};

export default Letters;
