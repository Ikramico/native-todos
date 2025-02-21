import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FindCentersScreen from './src/screens/FindCentersScreen';




const Stack = createStackNavigator();
const App: React.FC =() =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Find Centers' component={FindCentersScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;