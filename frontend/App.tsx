import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";
import { NewTask } from "./components/newTask";

// This app is built to teach me a React Native. In this case this is a todo app.
// The app below will allow users to create a todo list and complete tasks
export default function App() {
  // Is used within the task form so that when a task is created it is addded to this state
  const [task, setTask] = useState("");
  // this is our array of task that we are using as of now. I'd like to implement a database in place of this to make data persist
  // or at the least an obj
  const [tasks, setTasks] = useState<string[]>([]);

  // This is the function that defines how each item in an array to be displayed as a list item is rendered and is called by the "FlatList" component
  // It takes in the item index and the item it self in this case though as you can see the index is not needed
  // After which we define the types of the props since we are using typescript
  const renderListItems = ({
    item,
    index,
  }: {
    item: string;
    index: number;
  }) => {
    return (
      <Pressable
        onPress={() => {
          alert(`You've Completed, "${item}"`);

          setTasks(tasks.filter((task) => task != item));
        }}
      >
        <View style={styles.taskItem}>
          <Text style={styles.taskText}>{item}</Text>
        </View>
      </Pressable>
    );
  };

  // The Flat List Component is defined by "react-native" and is used to create a scrollable view of all the elements in a list
  // This component is perfect for longer and or dynamic list as it only renders what is visable in the view while allowing users to scroll
  // to render more list items. The "FlatList" component takes in 4 arguments: data, renderItem, keyExtractor, and the contentContainerStyle.
  // ------ TODO: Explain what each piece is used for and how it interacts with the list elements
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <NewTask setTask={setTask} tasks={tasks} setTasks={setTasks} />
        <View style={styles.listContainer}>
          <View>
            <Text>Insights Go Here</Text>
            <Text>----------------</Text>
          </View>

          <Text style={styles.headerText}>Your Goals:</Text>
          <FlatList
            data={tasks}
            renderItem={renderListItems}
            keyExtractor={(_, index) => String(index)}
            contentContainerStyle={styles.listContent}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "grey",
  },
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  listContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  listContent: {
    alignItems: "center",
    paddingBottom: 20,
  },
  taskItem: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  taskText: {
    fontSize: 16,
    color: "#333",
    flexWrap: "wrap",
    textAlign: "center",
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
});
