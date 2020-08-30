import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
const RecipesScreen = ({ navigation }) => (
  <View>
    <Text>Recipes creen</Text>
    <Button title="Recipe Detail" onPress={() => navigation.navigate('recipeDetail')} />
  </View>
);
export default RecipesScreen;
