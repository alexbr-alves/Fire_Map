import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/screens/home/home';
import AppRoutes from './src/routes/appRotas';
export default function App() {
  return (
    <>
      <AppRoutes/>     
    </>
  );
}


