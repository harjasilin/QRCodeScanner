

import React from 'react';
import {
  StyleSheet,
  Text,
  Alert,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/page/home';
import ScannerQR from './src/component/scannerQR';
import Detail from './src/page/details';
const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="ScannerQR" component={ScannerQR} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />

      </Stack.Navigator>

    </NavigationContainer>

  );
}



export default App;
