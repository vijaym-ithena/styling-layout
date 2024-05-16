import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';
import {
  LoginScreen,
  OtpScreen,
  PhoneLoginScreen,
  SignupScreen,
} from './screens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <PaperProvider>
          <Stack.Navigator
            initialRouteName="login"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="signup" component={SignupScreen} />
            <Stack.Screen name="phonelogin" component={PhoneLoginScreen} />
            <Stack.Screen name="otp" component={OtpScreen} />
          </Stack.Navigator>
        </PaperProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
