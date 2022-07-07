import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import globoTickets from "./TicketsDB";

const TicketPurchase = (props) => {
  const { route, navigation } = props;
  const [ticketQuantity, setTicketQuantity] = useState("1");
  const { ticketId } = route.params;
  const selectedEvent = globoTickets.find(
    (tickets) => tickets.eventId === ticketId
  );
  const purchase = () => {
    let price = selectedEvent.price * ticketQuantity;
    Alert.alert(`Your cost is ${price}`);
    navigation.nagigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedEvent.event}</Text>
      <Image style={styles.ticketimage} source={selectedEvent.image} />
      <Text style={styles.shortdescription}>{selectedEvent.description}</Text>
      <Text style={styles.description}>{selectedEvent.description}</Text>
      <View style={styles.purchaserow}>
        <Text style={styles.shortdescription}>Quantity: </Text>
        <TextInput
          style={styles.quantityinput}
          onChangeText={(quantity) => setTicketQuantity(quantity)}
          value={ticketQuantity}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.price}>
        Total Price: ${selectedEvent.price * ticketQuantity}
      </Text>
      <TouchableOpacity onPress={purchase} style={styles.button}>
        <Text style={styles.buttontext}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 10,
  },
  purchaserow: {
    flexDirection: "row",
  },
  button: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: "60%",
  },
  title: {
    fontFamily: "Ubuntu-Regular",
    paddingBottom: 10,
  },
  ticketimage: {
    width: "100%",
    height: 100,
  },
  shortdescription: {
    fontFamily: "Ubuntu-Regular",
    paddingTop: 5,
    textAlignVertical: "center",
  },
  description: {
    textAlign: "left",
    fontFamily: "Ubuntu-Light",
    fontWeight: "600",
    padding: 10,
  },
  price: {
    fontFamily: "Ubuntu-Regular",
    paddingTop: 5,
    paddingBottom: 10,
  },
  buttontext: {
    fontFamily: "Ubuntu-Regular",
    textAlign: "center",
    padding: 5,
  },
  quantityinput: {
    borderWidth: 1,
    fontFamily: "Ubuntu-Regular",
    height: 38,
    width: 40,
    marginLeft: 25,
  },
});

export default TicketPurchase;
