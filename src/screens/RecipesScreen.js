import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Button } from 'react-native-elements';

import { spacing, fontSize, defaultTouchOpacity } from '../utils/styles';
import { getAllRecipes } from '../utils/database';

const RecipesScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const loadRecipes = async () => {
    const recipes = await getAllRecipes();
    setRecipes(recipes);
  };

  useEffect(() => {
    loadRecipes();
  });

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
