import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Contacts from 'expo-contacts';
import Icon from 'react-native-vector-icons/FontAwesome';

import Register from './src/Register';
import Verify from './src/Verify';
import Detail from './src/Detail';
import HomeScreen from './src/HomeScreen';
import MsgScreen from './src/MsgScreen';
import ContactScreen from './src/ContactScreen';
import BlockScreen from './src/BlockScreen';
import AboutScreen from './src/AboutScreen';
import SignOutScreen from './src/SignOutScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Messages') {
            iconName = 'comments-o';
          } else if (route.name === 'Contacts') {
            iconName = 'address-book';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#059212',
        inactiveTintColor: '#757575',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Messages" component={MsgScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Contacts" component={ContactScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const Dashboard = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#f1f1f1',
          width: 300,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        drawerActiveTintColor: '#059212',
        drawerInactiveTintColor: '#757575',
      }}
    >
      <Drawer.Screen
        name="Mobile Risk Trainer"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="home" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Blocked Numbers"
        component={BlockScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="ban" size={size} color={focused ? '#059212' : '#757575'} />
          ),
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
        }}
      />
      <Drawer.Screen
        name="About MRT"
        component={AboutScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="info-circle" size={22} color={color} />
          ),
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
        }}
      />
      <Drawer.Screen
        name="Sign Out"
        component={SignOutScreen} 
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="sign-out" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  const [permissionsGranted, setPermissionsGranted] = useState(false);
  const [loading, setLoading] = useState(true);

  const requestPermissions = async () => {
    try {
      const { status: contactsStatus } = await Contacts.requestPermissionsAsync();
      if (contactsStatus !== 'granted') {
        Alert.alert('Permission required', 'We need access to your contacts to continue.');
        return;
      }
      setPermissionsGranted(true);
    } catch (error) {
      console.error('Error requesting permissions: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Checking permissions...</Text>
      </View>
    );
  }

  if (!permissionsGranted) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Permissions not granted. App cannot proceed.</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Verify" component={Verify} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
