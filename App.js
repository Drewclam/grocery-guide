import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import RecipesScreen from './src/components/RecipesScreen';
import RecipeDetail from './src/components/RecipeDetail';
import ShoppingListScreen from './src/components/ShoppingListScreen';
import CreateShoppingList from './src/components/CreateShoppingList';

export default function App() {
  const routes = {
    app: 'app',
    recipes: 'recipes',
    shoppingList: 'shoppingList',
    recipeDetail: 'recipeDetail',
    home: 'home',
    createShoppingList: 'createShoppingList',
  };

  const tabStack = createBottomTabNavigator(
    {
      [routes.recipes]: { screen: RecipesScreen },
      [routes.shoppingList]: { screen: ShoppingListScreen },
    },
    { initialRouteName: routes.shoppingList },
  );
  const appNavigator = createStackNavigator({
    [routes.home]: { screen: tabStack },
  });
  const appStack = createStackNavigator({
    [routes.app]: {
      screen: appNavigator,
    },
    [routes.recipeDetail]: { screen: RecipeDetail, params: { isModal: true } },
    [routes.createShoppingList]: { screen: CreateShoppingList, params: { isModal: true } },
  });
  const AppContainer = createAppContainer(appStack);

  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
