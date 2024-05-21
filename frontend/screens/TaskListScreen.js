import React, { useEffect, useState, useCallback } from 'react';
import { View, Button, FlatList, StyleSheet, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import api from '../api/api';
import TaskItem from '../components/TaskItem';
import { commonStyles } from '../styles/common';

const TaskListScreen = ({ navigation }) => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    const fetchTasks = async () => {
        try {
            const response = await api.get('/tasks');
            setTasks(response.data);
            setError(false);
        } catch (error) {
            setError(true);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchTasks();
        }, [])
    );

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={fetchTasks} title="Reload" />
            ),
        });
    }, [navigation]);

    return (
        <View style={[commonStyles.container, error ? commonStyles.errorBackground : commonStyles.normalBackground]}>
            <Button title="Create Task" onPress={() => navigation.navigate('CreateTask')} />
            {error && <Text style={styles.error}>Failed to load tasks.</Text>}
            <FlatList
                data={tasks}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <TaskItem task={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    error: { color: 'red', marginBottom: 16 },
});

export default TaskListScreen;
