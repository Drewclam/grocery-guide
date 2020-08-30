import React, { useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet, FlatList, Text } from 'react-native';

import { spacing, fontSize } from '../utils/styles';

const RecipeDetailScreen = ({ navigation }) => {
  const {
    state: {
      params: { recipe = {} },
    },
  } = navigation;
  const [value, setValue] = useState(recipe.name);
  const [ingredients, setIngredients] = useState(recipe.ingredients);

  const RecipeDetailRenderItem = ({ item }) => (
    <TextInput
      value={item.name}
      multiline={true}
      blurOnSubmit={true}
      onChangeText={(text) => {
        let newIngredients = ingredients.map((ingredient) =>
          ingredient.id === item.id
            ? {
                ...ingredient,
                name: text,
              }
            : ingredient,
        );
        setIngredients(newIngredients);
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.title}
        value={value}
        onChangeText={(text) => setValue(text)}
        multiline={true}
        blurOnSubmit={true}
      />
      <FlatList
        data={ingredients}
        renderItem={RecipeDetailRenderItem}
        keyExtractor={(ingredient) => ingredient.id}
      />
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

export default RecipeDetailScreen;
