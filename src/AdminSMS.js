import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as SMS from 'expo-sms';

export default function AdminSMS() {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const checkSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();

    if (isAvailable) {
      alert('SMS is available on this device');
    } else {
      alert('SMS is not available on this device');
    }
  }

  const sendSMS = async () => {
    const { result } = await SMS.sendSMSAsync(number, message);
    if (result === 'sent') {
      alert('Message sent successfully');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Admin Side SMS</Text>

      <TouchableOpacity style={styles.button} onPress={checkSMS}>
        <Text style={styles.buttonText}>Check SMS Availability</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder='Enter Phone Number'
        value={number}
        onChangeText={setNumber}
        keyboardType='phone-pad'
      ></TextInput>

      <TextInput
        style={styles.input}
        placeholder='Enter Message'
        value={message}
        onChangeText={setMessage}
        multiline
      ></TextInput>

      <TouchableOpacity style={styles.button} onPress={sendSMS}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: '#f9f9f9',
    width: '100%',
    height: 50,
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: '#059212',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
