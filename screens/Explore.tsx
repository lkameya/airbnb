import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Category from "../components/Explore/Category.tsx";

const Explore: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 80,
            backgroundColor: "white",
            borderBottomWidth: 0.5,
            borderBottomColor: "#ddd",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              backgroundColor: "white",
              marginHorizontal: 20,
              shadowOffset: { width: 0, height: 0 },
              shadowColor: "black",
              shadowOpacity: 0.1,
              elevation: 1,
            }}
          >
            <Ionicons name="ios-search" size={20} style={{ marginRight: 10 }} />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Try Russia"
              placeholderTextColor="grey"
              style={{
                flex: 1,
                fontWeight: "700",
                backgroundColor: "white",
              }}
            />
          </View>
        </View>
        <ScrollView scrollEventThrottle={16}>
          <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
            <Text
              style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20 }}
            >
              What can we help you find, User?
            </Text>
            <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView>
                <Category
                  imageUri={require("../assets/home.jpg")}
                  name="Home"
                />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Explore;
