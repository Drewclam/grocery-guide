import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import RecipesScreen from './src/screens/RecipesScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';
import ShoppingListScreen from './src/screens/ShoppingListScreen';
import CreateShoppingListScreen from './src/screens/CreateShoppingListScreen';

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

  const appNavigator = createStackNavigator(
    { [routes.home]: { screen: tabStack } },
    { headerMode: 'none' },
  );

  const appStack = createStackNavigator(
    {
      [routes.app]: {
        screen: appNavigator,
      },
      [routes.recipeDetail]: { screen: RecipeDetailScreen, params: { isModal: true } },
      [routes.createShoppingList]: { screen: CreateShoppingListScreen, params: { isModal: true } },
    },
    { headerMode: 'none' },
  );
  const AppContainer = createAppContainer(appStack);

  return <AppContainer />;
}
