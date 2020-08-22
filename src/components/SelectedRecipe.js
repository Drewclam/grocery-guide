import { NavigationContainer, useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { Picker } from "@react-native-community/picker";

const SelectedRecipe = ({ item }) => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        flex: 1,
      }}
    >
      <View>
        <Text>{`\u2022 ${item.name}`}</Text>
      </View>
      <View>
        <Picker>
          <Picker.Item label={1} value="1" />
          <Picker.Item label={2} value="2" />
          <Picker.Item label={3} value="3" />
        </Picker>
      </View>
    </View>
  );
};

export default SelectedRecipe;
