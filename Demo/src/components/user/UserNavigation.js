import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './screens/Login';
import SignUp from './screens/SignUp';
import OnBoarding1 from '../onboarding/screens/OnBoarding1';
import OnBoarding2 from '../onboarding/screens/OnBoarding2';
import OnBoarding3 from '../onboarding/screens/OnBoarding3';
import OnBoarding4 from '../onboarding/screens/OnBoarding4';
import ForgotPassword1 from './screens/ForgotPassword1';
import ForgotPassword2 from './screens/ForgotPassword2';
import Verification from './screens/Verification';
import ResetPassword from './screens/ResetPassword';
import Congratulations from './screens/Congratulations';

const UserNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
      <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
      <Stack.Screen name="OnBoarding4" component={OnBoarding4} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword1" component={ForgotPassword1} />
      <Stack.Screen name="ForgotPassword2" component={ForgotPassword2} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Congratulations" component={Congratulations} />
    </Stack.Navigator>
  )
}

export default UserNavigation