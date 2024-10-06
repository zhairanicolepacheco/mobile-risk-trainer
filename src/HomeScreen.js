import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Smishing from './Smishing';

const Stack = createNativeStackNavigator();

function Content({ navigation }) { 
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/smishing.png')}
        style={{ width: 300, height: 200 }}
        sharedTransitionTag="tag"
      />
      <Button
        title="Go to Smishing Details"
        onPress={() => navigation.navigate('Smishing')}
      />
    </View>
  );
}

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Content" component={Content} options={{ headerShown: false }} />
      <Stack.Screen name="Smishing" component={Smishing} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
