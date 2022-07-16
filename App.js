import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Home from "./Home";
import Tickets from "./Tickets";
import Contact from "./Contact";
import TicketPurchase from "./TicketPurchase";
import News from "./News";

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
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              headerTitleAlign: "center",
              headerTitleStyle: { fontFamily: "Ubuntu-Regular" },
              headerTitle: "Contact Us",
            }}
          />
          <Stack.Screen
            name="Purchase"
            component={TicketPurchase}
            options={{
              headerTitleAlign: "center",
              headerTitleStyle: { fontFamily: "Ubuntu-Regular" },
              headerTitle: "Purchase Tickets",
            }}
          />
          <Stack.Screen
            name="News"
            component={News}
            options={{
              headerTitleAlign: "center",
              headerTitleStyle: { fontFamily: "Ubuntu-Regular" },
              headerTitle: "Latest News",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
