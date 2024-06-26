import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();

export const StackNavigator= ()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="About" component={AboutScreen} />
      
    </Stack.Navigator>
  );
}