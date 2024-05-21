import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../api/api';
import { commonStyles } from '../styles/common';

const CreateTaskScreen = ({ route, navigation }) => {
    const task = route.params?.task;
    const [title, setTitle] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.description : '');
    const [error, setError] = useState(false);

    const handleSave = async () => {
        try {
            if (task) {
                await api.put(`/tasks/${task._id}`, { title, description });
                Alert.alert('Task updated successfully');
            } else {
                await api.post('/tasks', { title, description });
                Alert.alert('Task created successfully');
            }
            setError(false);
            navigation.navigate('Tasks');
        } catch (error) {
            setError(true);
            Alert.alert('Failed to save task', error.message);
        }
    };

    return (
        <View style={[commonStyles.container, error ? commonStyles.errorBackground : commonStyles.normalBackground]}>
            <Text style={{ textAlign: 'center' }}>Title</Text>
            <TextInput style={[styles.input, { textAlign: 'center' }]} value={title} onChangeText={setTitle} />
            <Text style={{ textAlign: 'center' }}>Description</Text>
            <TextInput style={[styles.input, { textAlign: 'center' }]} value={description} onChangeText={setDescription} />
            <Button title="Save Task" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        padding: 8,
        width: '80%',
        alignSelf: 'center'
    }
});

export default CreateTaskScreen;
