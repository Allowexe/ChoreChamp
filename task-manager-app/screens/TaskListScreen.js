import React, { useEffect, useState } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import api from '../api/api';
import TaskItem from '../components/TaskItem';

const TaskListScreen = ({ navigation }) => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const response = await api.get('/tasks');
            setTasks(response.data);
        } catch (error) {
            alert('Failed to fetch tasks.');
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <View style={styles.container}>
            <Button title="Create Task" onPress={() => navigation.navigate('CreateTask')} />
            <FlatList
                data={tasks}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <TaskItem task={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
});

export default TaskListScreen;
