import React from 'react';
import { SafeAreaView, TextInput } from 'react-native';
const RecipeDetail = ({ navigation }) => {
  const {state:{params:{recipe = {}}}} = navigation;

  return (
    <SafeAreaView>
      <TextInput value={recipe.name}/>
    </SafeAreaView>
  );
}
export default RecipeDetail;
