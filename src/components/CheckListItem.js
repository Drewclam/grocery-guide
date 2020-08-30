import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { spacing, fontSize } from '../utils/styles';

const CheckListItem = ({ label, onCheck, isChecked }) => (
  <View style={styles.container}>
    <CheckBox
      value={false}
      boxType="circle"
      // onValueChange={setSelection}
      // style={styles.checkbox}
    />
    <Text style={styles.text}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.large,
    paddingHorizontal: spacing.tiny,
  },
  text: {
    flex: 1,
    paddingLeft: spacing.large,
    fontSize: fontSize.large,
  },
});

export default CheckListItem;
