import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import globoTickets from "./TicketsDB";

const Tickets = (props) => {
  const ticketItem = ({ item }) => {
    return (
      <View styles={styles.tickets}>
        <View>
          <Image style={styles.img} source={item.image} />
        </View>
        <View>
          <Text style={styles.tickettitle}>{item.event}</Text>
          <Text style={styles.ticketshortdescription}>
            {item.shortDescription}
          </Text>
          <Text
            style={styles.ticketdescription}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.description}
          </Text>
          <Text style={styles.ticketshortdescription}>Price: {item.price}</Text>
          <Text style={styles.ticketbutton}>GET TICKETS</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={globoTickets}
        renderItem={ticketItem}
        keyExtractor={(item) => item.eventId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  tickets: {
    flexDirection: "column",
  },
  img: {
    height: 150,
    width: "100%",
  },
  tickettitle: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    textAlign: "center",
  },
  ticketshortdescription: {
    fontFamily: "sans-serif",
    fontWeight: "600",
    textAlign: "center",
    paddingTop: 5,
  },
  ticketdescription: {
    fontFamily: "sans-serif",
    fontWeight: "600",
    padding: 15,
  },
  ticketbutton: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 15,
    paddingTop: 5,
  },
});

export default Tickets;
