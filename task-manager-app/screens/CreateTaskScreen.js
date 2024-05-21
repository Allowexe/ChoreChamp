import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import api from '../api/api';

const CreateTaskScreen = ({ route, navigation }) => {
    const task = route.params?.task;
    const [title, setTitle] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.description : '');

    const handleSave = async () => {
        try {
            if (task) {
                await api.put(`/tasks/${task._id}`, { title, description });
                alert('Task updated successfully');
            } else {
                await api.post('/tasks', { title, description });
                alert('Task created successfully');
            }
            navigation.navigate('Tasks');
        } catch (error) {
            alert('Failed to save task.');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle} />
            <Text>Description</Text>
            <TextInput style={styles.input} value={description} onChangeText={setDescription} />
            <Button title="Save Task" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, padding: 8 },
});

export default CreateTaskScreen;
