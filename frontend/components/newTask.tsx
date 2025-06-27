import { useState } from "react"
import { StyleSheet, View, Text, TextInput, Button } from "react-native"

// When using props with TypeScript you need to declare the types using an interface. This allows us to declare the types of our props.
// Since we are using the prop "setTask" we use the () => syntax as it is the function to set task
interface NewTaskProps {
    setTask: (task: string) => void,
    tasks: string[],
    setTasks: (tasks: string[]) => void;
}

// This line is declaring our component and setting its type decleration to newTaskProps
export const NewTask = ({ setTask, tasks, setTasks }: NewTaskProps) => {
    // Below we declare a useState to track the state of the user inputed form. So as the user types the value will change more on that later.
    const [taskText, setTaskText] = useState('');

    // Unlike traditional React Web when creating event handlers to handle form submission utilizing event objects, 
    // we use a onChangeText prop (found within the <TextInput>) to update the state of our "taskText" value as the user types.
    // That is reflected in our onSubmit function where we would usally get the event.target, etc. now we just change the state of the value we use to 
    // track user input.

    // When we finally decide to use the onSubmit function we use a button to call it. (reflected in our tsx code)
    const onSubmit = () => {
        if (taskText != '') {
            setTask(taskText);
            // here we don't use .push() as .push() returns the length of the array rather than the array itself. So we use the spread operator instead to 
            setTasks([...tasks, taskText]);
            setTaskText(''); // Clear input after submission
        }
    }

    return (
        <View>
            <Text>Test Creating a Form</Text>
            <View style={{backgroundColor: 'pink', height: 100, width: 400, alignContent: 'center'}}>
                <Text>New Task: {taskText}</Text>
                <TextInput 
                    placeholder="Enter a New Task"
                    value={taskText}
                    onChangeText={setTaskText}
                />
                <Button
                    title="Add Task"
                    onPress={onSubmit}
                />
            </View>
        </View>
    )
}

{/* <View style={styles.container}>
      <Text>Hello World!</Text>
      <View style={{backgroundColor: 'purple', width: 400, height: 100, justifyContent: 'center', alignItems: 'center', padding: 20}} >
        <View style={{backgroundColor: 'white', padding: 15}}>
        <Text>Insert your name: </Text>
        <View style={{backgroundColor: 'green', padding: 10}}>
          <TextInput placeholder='First & Last Name'>

          </TextInput>
        </View>

        </View>
      </View>
      <StatusBar style="auto" />
    </View> */}