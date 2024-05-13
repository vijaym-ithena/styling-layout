import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { LoginScreen, OtpScreen, PhoneLoginScreen, SignupScreen } from './screens';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <PaperProvider>
            <Stack.Navigator
                initialRouteName='login'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='login' component={LoginScreen} />
                <Stack.Screen name='signup' component={SignupScreen} />
                <Stack.Screen name='phonelogin' component={PhoneLoginScreen} />
                <Stack.Screen name='otp' component={OtpScreen} />
            </Stack.Navigator>
        </PaperProvider>
    </NavigationContainer>
  );
}