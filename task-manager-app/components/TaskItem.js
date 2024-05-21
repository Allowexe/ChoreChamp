import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TaskItem = ({ task }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.taskContainer}
            onPress={() => navigation.navigate('TaskDetail', { taskId: task._id })}
        >
            <View style={styles.taskContent}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskDescription}>{task.description}</Text>
                <Text style={styles.taskStatus}>Status: {task.status}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        padding: 16,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    taskContent: {
        flexDirection: 'column',
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    taskDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    taskStatus: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default TaskItem;
