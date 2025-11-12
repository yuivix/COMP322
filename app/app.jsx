import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screen from './index'
import Screen2 from './mainPage'

const Stack = createNativeStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name= "Home" component={Screen} />
                <Stack.Screen name = "MainPage" component={Screen2} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;