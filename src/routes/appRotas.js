import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from '../screens/login/index.js'
import TabRoutes from './tabRoutes.js';
const Stack = createNativeStackNavigator();

export default function AppRoutes(){
    return(
     <NavigationContainer>
        <Stack.Navigator>
         
          

            <Stack.Screen name="TabRoutes" component={TabRoutes} options={{
           title: '',
           headerShown: false,
            }}/>


        </Stack.Navigator>
        </NavigationContainer>
      
    )
}