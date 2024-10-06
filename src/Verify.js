import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, SafeAreaView, TextInput, TouchableHighlight, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/styles';

function Verify({navigation}) {
    const [code, setCode] = useState('');

    const handleVerify = () => {
      if (!code) {
        Alert.alert("Error", "This field is required.");
      } else {
        console.log("Verify button pressed");
        console.log(`Code: ${code}`);
        navigation.navigate('Detail')
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

                <Text style={styles.header}>Verify Code</Text>
                <Text style={styles.subheader}>Please verify your number to continue.</Text>

                <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Code"
                    value={code}
                    onChangeText={text => setCode(text)}
                    placeholderTextColor="#888"
                />
                </View>

                <TouchableHighlight style={styles.button} onPress={handleVerify}>
                <Text style={styles.buttonText}>Verify</Text>
                </TouchableHighlight>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default Verify;
