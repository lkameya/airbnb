import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "./screens/Explore";
import Saved from "./screens/Saved";
import Trips from "./screens/Trips";
import Inbox from "./screens/Inbox";
import Profile from "./screens/Profile";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Explore"
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "grey",
          style: {
            backgroundColor: "white",
            borderTopWidth: 0,
            shadowOffset: { width: 5, height: 3 },
            shadowColor: "black",
            shadowOpacity: 0.5,
            elevation: 5,
          },
        }}
      >
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarLabel: "EXPLORE",
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-search" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={Saved}
          options={{
            tabBarLabel: "SAVED",
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-heart" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Trips"
          component={Trips}
          options={{
            tabBarLabel: "TRIPS",
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/airbnb.png")}
                style={{
                  height: 24,
                  width: 24,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={Inbox}
          options={{
            tabBarLabel: "INBOX",
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-chatboxes" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "PROFILE",
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-person" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
