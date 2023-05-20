import { TailwindProvider } from 'tailwind-rn/dist';
import react from 'react';
import Loginscreen from './screens/Loginescreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hello from './screens/Hello';
import Entry from './screens/Entry';
import Food from './screens/Food';
import FoodItems from './screens/FoodItems';









const Stack = createNativeStackNavigator();




export default function App() {

  
  

  
  
  return (

    
    <NavigationContainer>

    <TailwindProvider>

   
      <Stack.Navigator>
   


    <Stack.Screen name="Hello" component={Hello}/>
    <Stack.Screen name="login" component={Loginscreen}/>
    <Stack.Screen name="entry" component={Entry}/>
    <Stack.Screen name="food" component={Food}/>
    <Stack.Screen name="fooditems" component={FoodItems}/>


    </Stack.Navigator>
    
  
  </TailwindProvider>
  </NavigationContainer>
   

  
    
  )
}











