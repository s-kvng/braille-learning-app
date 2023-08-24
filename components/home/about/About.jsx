import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import styles from "./about.style";

const About = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.AboutTitle}>About Brilliant brialle 🧠</Text>
      </View>

      <View>
        <Text style={styles.GroupName}>Group Members</Text>
      </View>
    </View>
  );
};

export default About;
