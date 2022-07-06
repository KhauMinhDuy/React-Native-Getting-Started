import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

const Contact = ({ navigation }) => {
  const [formName, setFormName] = useState("Enter Name");
  const [formEmail, setFOrmEmail] = useState("Enter Email");
  const [formPhoneNumber, setFormPhoneNumber] = useState("Enter Phone Number");
  const [formMessage, setFormMessage] = useState("Enter Message");

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
        value={phone}
        selectTextOnFocus={true}
      />
      <Text style={styles.labels}>Message: *required</Text>
      <TextInput
        style={styles.multitxtinput}
        onChangeText={(message) => setFormMessage(message)}
        value={message}
        multiline={true}
        numberOfLines={3}
        selectTextOnFocus={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {},
});

export default Contact;
