import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const FooterBar = ({ navigation }) => {
  return (
    <View style={styles.footerBar}>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="search" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="user" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="shopping-cart" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    height: 60,
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FooterBar;
