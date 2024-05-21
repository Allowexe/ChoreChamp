import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import api from '../api/api';
import { commonStyles } from '../styles/common';

const TaskDetailScreen = ({ route, navigation }) => {
    const { taskId } = route.params;
    const [task, setTask] = useState(null);
    const [error, setError] = useState(false);

    const fetchTask = async () => {
        try {
            const response = await api.get(`/tasks/${taskId}`);
            setTask(response.data);
            setError(false);
        } catch (error) {
            setError(true);
            Alert.alert('Failed to fetch task', error.message);
        }
    };

    const changeTaskStatus = async (newStatus) => {
        try {
            const response = await api.patch(`/tasks/${taskId}/status`, { status: newStatus });
            setTask(response.data);
            Alert.alert('Task status updated successfully');
        } catch (error) {
            setError(true);
            Alert.alert('Failed to update task status', error.message);
        }
    };

    useEffect(() => {
        fetchTask();
    }, []);

    if (!task) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={[commonStyles.container, error ? commonStyles.errorBackground : commonStyles.normalBackground]}>
            <Text style={styles.centerText}>Title: {task.title}</Text>
            <Text style={styles.centerText}>Description: {task.description}</Text>
            <Text style={styles.centerText}>Status: {task.status}</Text>
            <Button title="Edit Task" onPress={() => navigation.navigate('CreateTask', { task })} />
            <Button title="Delete Task" onPress={async () => {
                try {
                    await api.delete(`/tasks/${taskId}`);
                    Alert.alert('Task deleted successfully');
                    navigation.navigate('Tasks');
                } catch (error) {
                    setError(true);
                    Alert.alert('Failed to delete task', error.message);
                }
            }} />
            <Button
                title={`Mark as ${task.status === 'pending' ? 'Done' : 'Pending'}`}
                onPress={() => changeTaskStatus(task.status === 'pending' ? 'done' : 'pending')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    error: { color: 'red', marginBottom: 16 },
});

export default TaskDetailScreen;
