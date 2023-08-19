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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  //
  const speak = (word, translation) => {
    Speech.speak(word);
    Speech.speak(translation);
  };

  // Simulate loading data or error
  // For your actual implementation, you can use useEffect to fetch the data
  // and handle the loading/error states accordingly
  const loadData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setError(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Alphabets</Text>
        <TouchableOpacity onPress={loadData}>
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
                speak={speak}
              />
            )}
            keyExtractor={(item) => item?.braille_name}
            contentContainerStyle={{
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
