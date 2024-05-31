import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Button, FlatList, Image } from 'react-native';
import CategoryItem from './components/CategoryItem';
import TaskItem from './components/TaskItem';


const categories = [
  { name: 'Exercise', icon: './assets/pic1.png' },
  { name: 'Study', icon: './assets/exercise.png' },
  { name: 'Code', icon: './assets/code.png' },
  { name: 'Cook', icon: './assets/cook.png' },
  { name: 'Read', icon: './assets/read.png' },
  { name: 'Travel', icon: './assets/travel.png' },
  { name: 'Meditate', icon: './assets/meditate.png' },
  { name: 'Play', icon: './assets/play.png' },
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
     <View style={styles.container1}>
     <Text style={styles.title}>Hello, Spencer</Text>
      <Text>14 tasks today</Text>
     </View>
      <View style={styles.profilePic}>
        <View style={styles.eclipse}>
            <Image source={require('./assets/person.png')} style={styles.person} />
        </View>
      </View>
     </View>
     <View style={styles.search}>
      <View style={styles.searchbox}>
        <View style={styles.search1}>
          <Image source={require('./assets/Vector1.png')} style={styles.searchpic} />
          <Text style={styles.searchtext}>Search </Text>
        </View>
      </View>
      <View style={styles.filter}>
        <Image source={require('./assets/Vector.png')} style={styles.filterpic}/>
      </View>
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
    backgroundColor: '#f7f0e8',
  },
  eclipse: {
    backgroundColor: '', 
    width: 50,
    height: 52,
    borderRadius: 25,
  },
  person: {
    width: 46,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  first: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '',
  },
  profilePic: {
    backgroundColor: '',
    width: 50,
    height: 52,
  },
  search: {
    backgroundColor: '#f7f0e8',
    height: 49,
    width: 353,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchbox: {
    backgroundColor: 'white',
    height: 48,
    width: 280,
    borderRadius: 15,
  },
  search1: {
    height: 24,
    width: 82,
    marginTop: 12,
    marginLeft: 10,
    flexDirection: 'row',
  },
  searchpic: {
    marginTop: 2.5,
  },
  filter: {
    backgroundColor: '#F0522F',
    width: 50,
    height: 48,
    borderRadius: 14,
  },
  filterpic: {
    width: 28.33,
    height: 25.5,
    marginTop: 10,
    marginLeft: 8.5,
  },
  searchtext: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: '700',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: -5,
    backgroundColor: '',
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
