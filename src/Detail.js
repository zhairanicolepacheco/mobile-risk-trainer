import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, SafeAreaView, TextInput, TouchableHighlight, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/styles';
import { HelloWave } from '../components/HelloWave';

function Detail({navigation}) {
    const [name, setName] = useState('');

    const handleSave = () => {
        if (!name) {
            Alert.alert("Error", "This field is required.");
        } else {
            console.log("Save button pressed");
            console.log(`Name: ${name}`);
            navigation.navigate('Dashboard')
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <StatusBar style="auto" />
                <Image
                source={require('../assets/mrt.png')}
                style={{ width: 175, height: 190 }}
                />

                <Text style={styles.title}>Mobile Risk Trainer</Text>
                <Text style={styles.tagline}>A Mobile App for Smishing Attack Awareness</Text>

                <Text style={styles.header}>Welcome! <HelloWave /></Text>
                <Text style={styles.subheader}>How should we address you?</Text>

                <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Nickname"
                    value={name}
                    onChangeText={text => setName(text)}
                    placeholderTextColor="#888"
                />
                </View>

                <TouchableHighlight style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default Detail;
