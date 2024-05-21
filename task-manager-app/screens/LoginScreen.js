import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import api from '../api/api';
import * as SecureStore from 'expo-secure-store';
import { commonStyles } from '../styles/common';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await api.post('/users/login', { email, password });
            await SecureStore.setItemAsync('token', response.data.token);
            setError(false);
            navigation.navigate('Tasks');
        } catch (error) {
            setError(true);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <View style={[commonStyles.container, error ? commonStyles.errorBackground : commonStyles.normalBackground]}>
            <Image source={require('../assets/images/logo.webp')} style={styles.logo} />
            <Text style={{ textAlign: 'center' }}>Email</Text>
            <TextInput style={[styles.input, { textAlign: 'center' }]} value={email} onChangeText={setEmail} />
            <Text style={{ textAlign: 'center' }}>Password</Text>
            <TextInput style={[styles.input, { textAlign: 'center' }]} value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Login" onPress={handleLogin} />
            <Button title="Register" onPress={() => navigation.navigate('Register')} />
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        width: 250,
        height: 200,
        marginTop: 40,
        marginBottom: 60
    },
    input: {
        alignSelf: 'center',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        padding: 8,
        width: '80%'
    }
});

export default LoginScreen;
