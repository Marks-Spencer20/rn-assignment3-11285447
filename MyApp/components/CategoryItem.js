import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: category.icon }} style={styles.icon} />
      <Text style={styles.text}>{category.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoryItem;
