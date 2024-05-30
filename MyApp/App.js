import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Button, FlatList, Image } from 'react-native';
import CategoryItem from './components/CategoryItem';
import TaskItem from './components/TaskItem';
import profile from './profile.png'

const categories = [
  { name: 'Exercise', icon: './pic1.png' },
  { name: 'Study', icon: './exercise.png' },
  { name: 'Code', icon: './' },
  { name: 'Cook', icon: 'https://via.placeholder.com/50' },
  { name: 'Read', icon: 'https://via.placeholder.com/50' },
  { name: 'Travel', icon: 'https://via.placeholder.com/50' },
  { name: 'Meditate', icon: 'https://via.placeholder.com/50' },
  { name: 'Play', icon: 'https://via.placeholder.com/50' },
];

const initialTasks = [
  'Morning jog', 'Finish homework', 'Develop new feature', 'Prepare dinner', 
  'Read a book', 'Plan a trip', 'Meditation session', 'Play video games', 
  'Attend yoga class', 'Complete online course', 'Fix bugs in code', 
  'Bake cookies', 'Visit museum', 'Practice guitar', 'Write a blog post'
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.first}>
      <Text style={styles.title}>Hello, Spencer</Text>
      <Text>10 tasks today</Text>
     </View>
      <Text style={styles.subtitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </ScrollView>
      <Text style={styles.subtitle}>Ongoing Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Add Task" onPress={addTask} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  first: {
    flex: 1,
    padding: 20,
    backgroundColor: 'border: Mixed solid rgba(251, 249, 247, 1)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: -5,
    backgroundColor: 'border: Mixed solid rgba(251, 249, 247, 1)',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default App;
