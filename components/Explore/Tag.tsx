import React from "react";
import { View, Text } from "react-native";

const Tag: React.FC = ({ name }) => {
  return (
    <View
      style={{
        minHeight: 20,
        minWidth: 40,
        padding: 5,
        backgroundColor: "white",
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 2,
        marginRight: 5,
      }}
    >
      <Text
        style={{
          fontWeight: "700",
          fontSize: 10,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default Tag;
