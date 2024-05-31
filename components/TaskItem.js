import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskItem = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#ffff',
    marginBottom: 15,
    borderRadius: 14,
  },
  text: {
    fontSize: 16,
    width: 354,
    height: 128,
    padding: 50,
    fontWeight: '700'
  },
});

export default TaskItem;
