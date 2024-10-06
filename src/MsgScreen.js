import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function MsgScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: '#f2f2f2', flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Messages</Text>
        </View>
      </ScrollView>
    </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
  },
  header: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
});  