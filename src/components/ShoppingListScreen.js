import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
const ShoppingListScreen = ({ navigation }) => (
  <View>
    <Text>Shopping List Screen</Text>
    <Button
      title="Create Shopping List"
      onPress={() => navigation.navigate('createShoppingList')}
    />
  </View>
);
export default ShoppingListScreen;
