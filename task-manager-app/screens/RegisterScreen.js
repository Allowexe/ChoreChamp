import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../api/api';

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            await api.post('/users/register', { username, email, password });
            Alert.alert('Registration successful!', 'Please log in.');
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Registration failed', 'Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Username</Text>
            <TextInput style={styles.input} value={username} onChangeText={setUsername} />
            <Text>Email</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} />
            <Text>Password</Text>
            <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, padding: 8 },
});

export default RegisterScreen;
