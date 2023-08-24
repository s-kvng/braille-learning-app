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

      <View style={styles.GroupContainer}>
        <View style={styles.GroupWrapper}>
          <Text style={styles.GroupName}>Group 19 Members</Text>
          <Text style={styles.name}>
            &#x1F393; David Kofi Esene Dziekpor - 202145112
          </Text>
          <Text style={styles.name}>
            &#x1F393; Eric Amponsah Andoh - 202124973
          </Text>
          <Text style={styles.name}>
            &#x1F393; David Asante Antwi - 202127133
          </Text>
          <Text style={styles.name}>
            &#x1F393; Gariba Olawudeen - 202135475
          </Text>
          <Text style={styles.name}>&#x1F393; Abass Seidu - 202137089</Text>
        </View>
      </View>
    </View>
  );
};

export default About;
