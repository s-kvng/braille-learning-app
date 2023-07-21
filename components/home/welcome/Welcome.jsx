import React from "react";
import { View, Text } from "react-native";

import styles from "./welcome.style";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Champ 👋</Text>
        <Text style={styles.welcomeMessage}>Learn Braille 🧠</Text>
      </View>
    </View>
  );
};

export default Welcome;
