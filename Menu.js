import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Menu = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Tickets")}
        style={styles.button}
      >
        <Text style={styles.buttontext}>Event</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
  },
  button: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginRight: 5,
    marginLeft: 5,
  },
  buttontext: {},
});

export default Menu;
