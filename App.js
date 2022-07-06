import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Home from "./Home";
import Tickets from "./Tickets";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Ubuntu-Regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-Light": require("./assets/fonts/Ubuntu-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar barStyle={"dark-content"} hidden />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          options={{ headerMode: "screen" }}
        >
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
          >
            {(props) => <Home {...props} username="DuyKhau" />}
          </Stack.Screen>
          <Stack.Screen
            name="Tickets"
            component={Tickets}
            options={{
              headerTitleAlign: "center",
              headerTitleStyle: { fontFamily: "Ubuntu-Regular" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
