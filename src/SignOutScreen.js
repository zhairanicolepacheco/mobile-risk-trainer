import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const SignOutScreen = ({ navigation }) => {
  useEffect(() => {
    // Perform any sign-out logic like clearing tokens, user data, etc.
    navigation.reset({
      index: 0,
      routes: [{ name: 'Register' }], // Go back to the Register screen
    });
  }, [navigation]);

  return (
    <View>
      <Text>Signing Out...</Text> 
    </View> 
    // The UI will show a "Signing Out..." message briefly before the user is navigated back to Register
  );
};

export default SignOutScreen;
