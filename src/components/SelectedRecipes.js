import { NavigationContainer, useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { Picker } from "@react-native-community/picker";
import SelectedRecipe from "./SelectedRecipe";

const SelectedRecipes = ({ navigation }) => {
  const RECIPES = [
    {
      name: "Chicken Rice",
      quantity: 2,
    },
    {
      name: "Strawberry Pie",
      quantity: 1,
    },
    {
      name: "Mojitos",
      quantity: 3,
    },
  ];
  const [recipes, setRecipes] = useState(RECIPES);

  const renderItem = ({ item }) => {
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
          <Picker
            selectedValue={item.quantity}
            onValueChange={(value) => {
              const updatedRecipes = recipes.map((recipe) =>
                recipe.name === item.name
                  ? { ...recipe, quantity: value }
                  : recipe
              );
              setRecipes(updatedRecipes);
            }}
          >
            <Picker.Item label={1} value="1" />
            <Picker.Item label={2} value="2" />
            <Picker.Item label={3} value="3" />
          </Picker>
        </View>
      </View>
    );
  };

  return (
    <View>
      {/* <Icon name="list" onPress={() => navigation.navigate("HomeScreen")} /> */}
      <View style={{ borderBottomColor: "black", borderBottomWidth: 1 }}></View>
      <FlatList data={recipes} renderItem={renderItem} />
    </View>
  );
};

export default SelectedRecipes;
