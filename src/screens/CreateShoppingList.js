import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View } from 'react-native';
import { Button } from 'react-native-elements';

import { spacing, fontSize } from '../utils/styles';
import CheckListItem from '../components/CheckListItem';

const CreateShoppingList = ({ navigation }) => {
  const [recipes, setRecipes] = useState([{
    id: 1,
    name: 'Stew',
    ingredients: [],
  }]);

  const [selected, setSelected] = useState([]);


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Shopping List</Text>
      <Text style={styles.hint}>Select all the recipes that you want to shop for and a new shopping list will be generated.</Text>
      <FlatList
        data={recipes}
        renderItem={({item}) => <CheckListItem label={`${item.name}`}/>}
        keyExtractor={item => item.id}
      />
      <View style={styles.button}>
        <Button
          disabled={selected.length === 0}
          title="Done"
          onPress={() => navigation.navigate('shoppingList')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.xxlarge,
    height: '100%'
  },
  title: {
    marginVertical: spacing.xlarge,
    fontSize: fontSize.title
  },
  hint: {
    fontSize: fontSize.small
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: spacing.large
  }
});

export default CreateShoppingList;
