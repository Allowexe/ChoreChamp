import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import api from '../api/api';
import * as SecureStore from 'expo-secure-store';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await api.post('/users/login', { email, password });
            await SecureStore.setItemAsync('token', response.data.token);
            navigation.navigate('Tasks');
        } catch (error) {
            alert('Login failed. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Email</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} />
            <Text>Password</Text>
            <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Login" onPress={handleLogin} />
            <Button title="Register" onPress={() => navigation.navigate('Register')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, padding: 8 },
});

export default LoginScreen;
