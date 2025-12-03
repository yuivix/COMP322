import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screen from './frontPage'
import MainPage from './mainPage'
import ProfileScreen from './profileScreen'

const Stack = createNativeStackNavigator()

class App extends Component {
   render() { 
     return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name= "Home" component={Screen} />
                <Stack.Screen name = "MainPage" component={MainPage} />
                <Stack.Screen name = "ProfilePage" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
}

export default App;