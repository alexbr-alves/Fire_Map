import  React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Platform} from 'react-native';
import IconHome from 'react-native-vector-icons/Ionicons';
import IconBook from 'react-native-vector-icons/Entypo';
import IconForum from 'react-native-vector-icons/MaterialCommunityIcons';
import IconUser from 'react-native-vector-icons/Entypo';

import Home from '../screens/home/home.js'
import Forum from '../screens/forum';
import User from '../screens/user/index.js';
import Education from '../screens/education/index.js'

const Tab = createBottomTabNavigator();

export default function TabRoutes() {

  return (


      <Tab.Navigator  screenOptions={({route, focused}) => ({
        tabBarActiveTintColor: '#a71b1a',
        tabBarInactiveTintColor: '#e75b5a',
        tabBarStyle: {
          backgroundColor: '#e8c674',  
          alignItems: 'center',
          justifyContent: 'center',
          height: Platform.OS === 'ios'? 90 : 60,
          borderTopWidth: 1,
          borderColor: '#ffffff'
        },
        headerShown: false,
      })}>
         <Tab.Screen name="Home" component={Home} options={{
            title: '', tabBarIcon: ({focused}) =>
            <IconHome name='earth' size={30} color={focused? '#a71b1a': '#e75b5a'}/>
            }} />
        
        <Tab.Screen name="Education" component={Education} options={{
            title: ' ', tabBarIcon: ({focused}) =>
            <IconBook name='book' size={30} color={focused? '#a71b1a': '#e75b5a'}/> }} />
       
          <Tab.Screen name="Forum" component={Forum} options={{
            title: ' ', tabBarIcon: ({focused}) =>
            <IconForum name='forum' size={30} color={focused? '#a71b1a': '#e75b5a'}/> }} />

        <Tab.Screen  name="User" component={User} options={{
           title: '', tabBarIcon: ({focused}) =>
           <IconUser name='user' size={30} color={focused? '#a71b1a': '#e75b5a'}/>  }} />
        
        </Tab.Navigator>
 
  );
}

