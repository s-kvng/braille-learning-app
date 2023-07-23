import { React, useState, useEffect } from "react";
import * as Speech from "expo-speech";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useRouter } from "expo-router";

import styles from "./popularwords.style";
import { SIZES, COLOR, COLORS } from "../../../constants";

import PopularWordCard from "../../common/cards/popular/PopularWordCard";
import { popularWords } from "../../../constants";

const PopularWords = () => {
  const router = useRouter();
  const [selectedWord, setSelectedWord] = useState("");

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
        <Text style={styles.headerTitle}>Popular words</Text>
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
            data={popularWords}
            renderItem={({ item }) => (
              <PopularWordCard
                item={item}
                selectedWord={selectedWord}
                setSelectedWord={setSelectedWord}
                speak={speak}
              />
            )}
            keyExtractor={(item) => item?.word_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default PopularWords;
