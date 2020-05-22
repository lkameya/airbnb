import React from "react";
import { View, Image, Text } from "react-native";
import StarRating from "react-native-star-rating";

function Home({ width, type, name, price, rating, photo }) {
  return (
    <View
      style={{
        width: width / 2 - 30,
        height: width / 2 - 30,
        borderWidth: 0.5,
        borderColor: "#ddd",
        marginTop: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: "cover",
          }}
          source={photo}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          paddingLeft: 10,
        }}
      >
        <Text style={{ fontSize: 10, color: "#b63838" }}>{type}</Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "700",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 10,
          }}
        >
          ${price}
        </Text>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={rating}
          starSize={10}
        />
      </View>
    </View>
  );
}

export default Home;
