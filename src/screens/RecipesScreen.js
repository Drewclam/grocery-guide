import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Button } from 'react-native-elements';

import { spacing, fontSize, defaultTouchOpacity } from '../utils/styles';

const RecipesScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: 'Stew',
      ingredients: [
        { id: 0, name: 'ingredient 1', quantity: 2 },
        { id: 1, name: 'ingredient 2', quantity: 5 },
      ],
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('recipeDetail', { recipe: item })}
            activeOpacity={defaultTouchOpacity}
          >
            <Text style={styles.recipe}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add New Recipe" onPress={() => navigation.navigate('recipeDetail')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.xxlarge,
  },
  title: {
    marginVertical: spacing.xlarge,
    fontSize: fontSize.title,
  },
  recipe: {
    fontSize: fontSize.regular,
  },
});

export default RecipesScreen;
