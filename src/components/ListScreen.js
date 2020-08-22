import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { FlatList, View, Text } from "react-native";
import { Icon } from "react-native-elements";

const ListScreen = ({ navigation }) => {
  const LIST_DATA = [
    {
      name: "strawberries",
      quantity: 1,
      unit: "lb",
    },
    {
      name: "rice",
      quantity: 2,
      unit: "cups",
    },
    {
      name: "soy sauce",
      quantity: 3,
      unit: "tsp",
    },
  ];

  const renderItem = ({ item }) => (
    <View
      style={{ justifyContent: "space-between", flexDirection: "row", flex: 1 }}
    >
      <View>
        <Text>{`\u2022 ${item.name}`}</Text>
      </View>
      <View>
        <Text>
          {item.quantity}
          {item.unit}
        </Text>
      </View>
    </View>
  );
  return (
    <View>
      <Icon name="list" onPress={() => navigation.navigate("HomeScreen")} />
      <View style={{ borderBottomColor: "black", borderBottomWidth: 1 }}></View>
      <FlatList data={LIST_DATA} renderItem={renderItem} />
    </View>
  );
};

export default ListScreen;
