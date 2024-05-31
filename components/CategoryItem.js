import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.container}>
       <Text style={styles.text}>{category.name}</Text>
       <Text style={styles.text1}>
        12 tasks
       </Text>
      <Image source={{ uri: category.icon }} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
    backgroundColor:'white',
    borderRadius: 14,
    left: -12,
  },
  icon: {
    width: 150,
    height: 150,
  },
  text1: {
    fontSize: 14,
    marginRight: 90,
  },
  text: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 80,
  },
});

export default CategoryItem;
