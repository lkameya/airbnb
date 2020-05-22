import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Category from "../components/Explore/Category";
import Home from "../components/Explore/Home";
import Tag from "../components/Explore/Tag";

const { height, width } = Dimensions.get("window");

const Explore: React.FC = () => {
  let animatedHeaderHeight;
  const scrollY = new Animated.Value(0);
  const startHeaderHeight = 100;
  const endHeaderHeight = 50;

  useEffect(() => {
    animatedHeaderHeight = scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [startHeaderHeight, endHeaderHeight],
      extrapolate: "clamp",
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            height: animatedHeaderHeight,
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
              placeholder='Try "Russia"'
              placeholderTextColor="grey"
              style={{
                flex: 1,
                fontWeight: "700",
                backgroundColor: "white",
              }}
            />
          </View>
          <Animated.View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              position: "relative",
              top: 10,
            }}
          >
            <Tag name="Guests" />
            <Tag name="Dates" />
          </Animated.View>
        </Animated.View>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollY } } },
          ])}
        >
          <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
            <Text
              style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20 }}
            >
              What can we help you find, User?
            </Text>
            <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Category
                  imageUri={require("../assets/home.jpg")}
                  name={"Home"}
                />
                <Category
                  imageUri={require("../assets/experiences.jpg")}
                  name={"Experiences"}
                />
                <Category
                  imageUri={require("../assets/restaurant.jpg")}
                  name={"Restaurant"}
                />
              </ScrollView>
            </View>
            <View
              style={{
                marginTop: 40,
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                }}
              >
                Introducing Airbnb Plus
              </Text>
              <Text
                style={{
                  fontWeight: "200",
                  marginTop: 10,
                }}
              >
                A new selection of homes verified for quality & comfort
              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                <Image
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    resizeMode: "cover",
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "#ddd",
                  }}
                  source={require("../assets/home.jpg")}
                />
              </View>
            </View>
          </View>

          <View style={{ marginTop: 40 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                paddingHorizontal: 20,
              }}
            >
              Homes around the world
            </Text>
            <View
              style={{
                paddingHorizontal: 20,
                marginTop: 20,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Home
                width={width}
                name="The Cozy Place"
                type="PRIVATE ROOM - 2 BEDS"
                price={82}
                rating={4}
                photo={require("../assets/home.jpg")}
              />
              <Home
                width={width}
                name="The Gastown"
                type="PRIVATE ROOM - 1 BED"
                price={43}
                rating={3}
                photo={require("../assets/house2.jpeg")}
              />
              <Home
                width={width}
                name="The Opala Place"
                type="PRIVATE ROOM - 3 BEDS"
                price={200}
                rating={5}
                photo={require("../assets/house3.jpeg")}
              />
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
