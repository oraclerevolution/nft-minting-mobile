import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import Mint from "./pages/Mint"
import TakePicture from "./pages/TakePicture";
import Accueil from './pages/Accueil'
import sendToken from "./pages/SendToken";

const MyStack = createStackNavigator()

    function Stack() {
      return (
          <MyStack.Navigator initialRouteName="Accueil" screenOptions={{headerShown: false}} >
                <MyStack.Screen name="Mint" component={Mint} />
                <MyStack.Screen name="Accueil" component={Accueil} />
                <MyStack.Screen name="TakePicture" component={TakePicture} />
                <MyStack.Screen name="sendToken" component={sendToken} />
          </MyStack.Navigator>
      );
}

export default function App() {
  return (
      <NavigationContainer>
          <Stack />
      </NavigationContainer>
  );
}
