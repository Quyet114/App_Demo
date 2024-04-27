import React from 'react';
import 'react-native-gesture-handler';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Login from './src/components/user/screens/Login';
import SignUp from './src/components/user/screens/SignUp';
import HomePage from './src/components/news/screens/HomePage';
import ManHinh7 from './my_components/ManHinh7';
import ManHinh8 from './my_components/ManHinh8';
import DetailPage from './src/components/news/screens/DetailPage';
import BottomTab from './my_components/BottomTab';
import MyTabs from './my_components/BottomTab';
import ManHinh9 from './my_components/ManHinh9';
import ManHinh10 from './my_components/ManHinh10';
import ManHinh11 from './my_components/ManHinh11';
import ManHinh12 from './my_components/ManHinh12';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/components/navigations/AppNavigation';
import { UserProvider } from './src/components/user/UserContext';
import ManHinh13 from './my_components/ManHinh13';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <UserProvider>
        <AppNavigation />
      </UserProvider>
      {/* <ManHinh13 /> */}
    </SafeAreaView>
  )
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  }
})