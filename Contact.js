import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

const Contact = ({ navigation }) => {
  const [formName, setFormName] = useState("Enter Name");
  const [formEmail, setFOrmEmail] = useState("Enter Email");
  const [formPhoneNumber, setFormPhoneNumber] = useState("Enter Phone Number");
  const [formMessage, setFormMessage] = useState(
    "Let us know whats on your mind"
  );

  const onSubmit = () => {
    if (!formName || !formEmail || !formMessage) {
      Alert.alert("Please enter info in all field");
    } else {
      Alert.alert(`Thank you ${formName}`);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.labels}>Name: *required</Text>
      <TextInput
        style={styles.txtinput}
        onChangeText={(name) => setFormName(name)}
        value={formName}
        autoCapitalize="words"
        selectTextOnFocus={true}
      />
      <Text style={styles.labels}>Email: *required</Text>
      <TextInput
        style={styles.txtinput}
        onChangeText={(email) => setFOrmEmail(email)}
        value={formEmail}
        selectTextOnFocus={true}
      />
      <Text style={styles.labels}>Phone:</Text>
      <TextInput
        style={styles.txtinput}
        onChangeText={(phone) => setFormPhoneNumber(phone)}
        value={formPhoneNumber}
        selectTextOnFocus={true}
        keyboardType="numeric"
      />
      <Text style={styles.labels}>Message: *required</Text>
      <TextInput
        style={styles.multitxtinput}
        onChangeText={(message) => setFormMessage(message)}
        value={formMessage}
        multiline={true}
        numberOfLines={3}
        selectTextOnFocus={true}
      />
      <Button title="Contact Us" color={"#708090"} onPress={onSubmit}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    flexDirection: "column",
    padding: 18,
  },
  txtinput: {
    borderWidth: 1,
    fontFamily: "Ubuntu-Regular",
    width: "80%",
    paddingBottom: 15,
  },
  multitxtinput: {
    borderWidth: 1,
    fontFamily: "Ubuntu-Regular",
    width: "90%",
    height: 120,
    marginBottom: 50,
  },
  labels: {
    fontFamily: "Ubuntu-Regular",
  },
});

export default Contact;
