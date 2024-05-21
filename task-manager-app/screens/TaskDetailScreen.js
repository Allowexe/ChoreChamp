import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import api from '../api/api';

const TaskDetailScreen = ({ route, navigation }) => {
    const { taskId } = route.params;
    const [task, setTask] = useState(null);
    const [error, setError] = useState(null);

    const fetchTask = async () => {
        try {
            const response = await api.get(`/tasks/${taskId}`);
            setTask(response.data);
        } catch (error) {
            setError(error.message);
            Alert.alert('Failed to fetch task', error.message);
            console.error('Failed to fetch task:', error);
        }
    };

    useEffect(() => {
        fetchTask();
    }, []);

    if (!task) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Text>Title: {task.title}</Text>
            <Text>Description: {task.description}</Text>
            <Text>Status: {task.status}</Text>
            <Button title="Edit Task" onPress={() => navigation.navigate('CreateTask', { task })} />
            <Button title="Delete Task" onPress={async () => {
                try {
                    await api.delete(`/tasks/${taskId}`);
                    Alert.alert('Task deleted successfully');
                    navigation.navigate('Tasks');
                } catch (error) {
                    Alert.alert('Failed to delete task', error.message);
                    console.error('Failed to delete task:', error);
                }
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
});

export default TaskDetailScreen;
