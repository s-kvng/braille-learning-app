import { React, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import styles from "./welcome.style";

import { SIZES, icons } from "../../../constants";

const typesOfText = ["Alphabet", "Numbers", "Symbols"];

const Welcome = () => {
  const [activeType, setActiveType] = useState("Alphabet");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Champ 👋</Text>
        <Text style={styles.welcomeMessage}>Learn Braille 🧠</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChangeText={() => {}}
            placeholder="Search for a cell"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={typesOfText}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeType, item)}
              onPress={() => {
                setActiveType(item);
                router.push(`search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.large }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;

/*
   <Text style={{ fontSize: 100 }}>{"\u2801"}</Text>
        <Text style={{ fontSize: 100 }}>{"\u2803"}</Text>
        <Text style={{ fontSize: 100 }}>{"\u2809"}</Text>
        <Text style={{ fontSize: 100 }}>{"\u2819"}</Text>
        <Text style={{ fontSize: 100 }}>{"\u2811"}</Text>
        <Text style={{ fontSize: 100 }}>{"\u280B"}</Text>

*/
