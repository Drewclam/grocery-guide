import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { spacing, fontSize } from '../utils/styles';

const RecipeDetailScreen = ({ navigation }) => {
  const {
    state: {
      params: { recipe = {} },
    },
  } = navigation;
  const [value, setValue] = useState(recipe.name);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [autoFocus, setAutoFocus] = useState(false);

  const RecipeDetailRenderItem = ({ item }) => (
    <View>
      <TextInput
        style={styles.ingredient}
        value={item.name}
        multiline={true}
        blurOnSubmit={true}
        autoFocus={autoFocus}
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
      {/* Todo: Render editable quantity. */}
    </View>
  );

  const hasEmptyIngredient = () => {
    const newIngredient = ingredients[ingredients.length - 1];
    if (!newIngredient.name || newIngredient.name === '') {
      return true;
    }
    return false;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
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
      </View>
      <TouchableOpacity
        style={{ height: '100%' }}
        onPress={() => {
          if (hasEmptyIngredient()) {
            setIngredients(
              ingredients.filter((ingredient) => ingredient.name && ingredient.name !== ''),
            );
            setAutoFocus(false);
          } else {
            setIngredients([...ingredients, {}]);
            setAutoFocus(true);
          }
        }}
      ></TouchableOpacity>
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
  ingredient: {
    fontSize: fontSize.regular,
    paddingVertical: spacing.small,
  },
});

export default RecipeDetailScreen;
