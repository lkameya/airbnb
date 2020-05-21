import React from "react";
import { View, Image, Text } from "react-native";

function Category({ imageUri }) {
  return (
    <View
      style={{
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: "#ddd",
      }}
    >
      <View style={{ flex: 2 }}>
        <Image
          source={imageUri}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: "cover",
          }}
        />
      </View>
      <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
        <Text>Home</Text>
      </View>
    </View>
  );
}

export default Category;
