import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const ManHinh10_1 = ({ navigation }) => {
    return (
        <View>
            <Text onPress={() => {
                navigation.navigate('ManHinh10_2')
            }}>Man hinh 10_1</Text>
        </View>
    )
}

const ManHinh10_2 = (props) => {
    const { navigation } = props
    return (
        <View>
            <Text onPress={() => {
                navigation.navigate('ManHinh10_3')
            }}>Man hinh 10_2</Text>
        </View>
    )
}

const ManHinh10_3 = ({ navigation }) => {
    return (
        <View>
            <Text onPress={() => {
                navigation.navigate('ManHinh10_1')
            }}>Man hinh 10_3</Text>
        </View>
    )
}

const ManHinh10 = () => {
    const Stack = createStackNavigator();
    return (
        <>
            <Stack.Navigator
                initialRouteName='ManHinh10_1'
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen component={ManHinh10_1} name='ManHinh10_1' />
                <Stack.Screen component={ManHinh10_2} name='ManHinh10_2' />
                <Stack.Screen component={ManHinh10_3} name='ManHinh10_3' />
            </Stack.Navigator>
        </>
    )
}

export default ManHinh10

const styles = StyleSheet.create({})