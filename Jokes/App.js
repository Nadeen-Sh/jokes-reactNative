import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import StartScreen from './src/screens/StartScreen';
import themeStyle from './src/theme.style';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
     contentStyle:{
       backgroundColor:themeStyle.background.BACKGROUND_COLOR
     }
  }}  initialRouteName="start">
      <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="JOKES" component={HomeScreen} />   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;