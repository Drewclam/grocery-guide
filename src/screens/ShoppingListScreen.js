import React, { useState } from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { spacing, fontSize } from '../utils/styles';
import CheckListItem from '../components/CheckListItem';

const ShoppingListScreen = ({ navigation }) => {
  const [items, setItems] = useState([{
    id: 1,
    name: 'chicken',
    quantity: 1
  }]);
  const [completed, setCompleted] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <FlatList
        data={items}
        renderItem={({item}) => <CheckListItem label={`${item.quantity} ${item.name}`}/>}
        keyExtractor={item => item.id}
      />
      <Button
        title="Create Shopping List"
        onPress={() => navigation.navigate('createShoppingList')}
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
    fontSize: fontSize.title
  },
});

export default ShoppingListScreen;
