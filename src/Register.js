import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, SafeAreaView, TextInput, TouchableHighlight
    , Keyboard, TouchableWithoutFeedback, Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../style/styles';

function Register({navigation}) {
    const [phoneNum, setPhoneNum] = useState('');

    const handleRegister = () => {
        if (!phoneNum) {
            Alert.alert("Error", "This field is required.");
        } else {
            console.log("Register button pressed");
            console.log(`Phone Number: ${phoneNum}`);
            navigation.navigate('Verify')
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

                <Text style={styles.header}>REGISTER</Text>
                <Text style={styles.subheader}>Please register to continue.</Text>

                <View style={styles.inputContainer}>
                    <Icon name="phone" size={20} color="#888" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="+63XXXXXXXXXX"
                        value={phoneNum}
                        onChangeText={setPhoneNum}
                        keyboardType="phone-pad"
                        placeholderTextColor="#888"
                    />
                </View>

                <TouchableHighlight style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableHighlight>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default Register;