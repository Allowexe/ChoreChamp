import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import TaskListScreen from './screens/TaskListScreen';
import TaskDetailScreen from './screens/TaskDetailScreen';
import CreateTaskScreen from './screens/CreateTaskScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Tasks" component={TaskListScreen} />
                <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
                <Stack.Screen name="CreateTask" component={CreateTaskScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
