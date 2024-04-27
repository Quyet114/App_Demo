import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const ManHinh10_1 = (props) => {
    const { navigation, route } = props
    const [input, setInput] = useState(null)
    const inputne = route.params?.inputne
    return (
        <View>
            <Text>Man Hinh 10_1</Text>
            <Button title='Go to ManHinh10_3'
                onPress={() => {
                    navigation.navigate('ManHinh10_3', { input: input })
                }} />
            <TextInput placeholder='Nhập gì đó đi' style={{ backgroundColor: '#fff' }} value={input} onChangeText={setInput} />
            <Text>{inputne}</Text>
        </View>
    )
}

const ManHinh10_2 = (props) => {
    const { navigation, route } = props
    // const input = route.params.input
    return (
        <View>
            <Text onPress={() => {
                navigation.navigate('ManHinh10_3', {
                    id: 1, name: 'Nguyen Van A'
                })
            }}>Man hinh 10_2</Text>
            {/* <Text>{input}</Text> */}
        </View>
    )
}

const ManHinh10_3 = (props) => {
    const { navigation, route: { params } } = props;
    const input = params.input
    const [inputne, setInputNe] = useState(null)
    return (
        <View>
            <Text>Man hinh 10_3</Text>
            {/* <Text>{params?.id}</Text>
            <Text>{params?.name}</Text> */}
            <Button title='Go to ManHinh10_1'
                onPress={() => {
                    navigation.navigate('ManHinh10_1', { inputne: inputne })
                }} />
            <TextInput placeholder='Nhập gì đó đi' style={{ backgroundColor: '#fff' }} value={inputne} onChangeText={setInputNe} />
            <Text>{input}</Text>
        </View>
    )
}

const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
        if (focused) {
            if (route.name === 'ManHinh10_1') {
                return (
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../src/media/pictures/homefocus.png')}
                            style={{ width: 30, height: 30 }} />
                        <Text style={{ color: '#1877F2' }}>Home</Text>
                    </View>
                )
            } else if (route.name === 'ManHinh10_2') {
                return <Image source={require('../src/media/pictures/explorefocus.png')}
                    style={{ width: 30, height: 30 }} />
            } else if (route.name === 'ManHinh10_3') {
                return <Image source={require('../src/media/pictures/bookmarkfocus.png')}
                    style={{ width: 30, height: 30 }} />
            }
        } else {
            if (route.name === 'ManHinh10_1') {
                return (
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../src/media/pictures/home.png')}
                            style={{ width: 30, height: 30 }} />
                        <Text>Home</Text>
                    </View>
                )
            } else if (route.name === 'ManHinh10_2') {
                return <Image source={require('../src/media/pictures/explore.png')}
                    style={{ width: 30, height: 30 }} />
            } else if (route.name === 'ManHinh10_3') {
                return <Image source={require('../src/media/pictures/bookmark.png')}
                    style={{ width: 30, height: 30 }} />
            } else if (route.name === 'ManHinh10_4') {
                return <Image source={require('../src/media/pictures/bookmark.png')}
                    style={{ width: 30, height: 30 }} />
            }
        }
    },
    tabBarLabel: ({ focused, color, size }) => {
        //     if (focused) {
        //         if (route.name === 'ManHinh10_1') {
        //             return <Text style={{ color: '#1877F2', fontSize: 15 }}>Home</Text>
        //         } else if (route.name === 'ManHinh10_2') {
        //             return <Text style={{ color: '#1877F2', fontSize: 15 }}>Explore</Text>
        //         } else if (route.name === 'ManHinh10_3') {
        //             return <Text style={{ color: '#1877F2', fontSize: 15 }}>Bookmark</Text>
        //         }
        //     } else {
        //         if (route.name === 'ManHinh10_1') {
        //             return <Text style={{ color: 'black', fontSize: 15 }}>Home</Text>
        //         } else if (route.name === 'ManHinh10_2') {
        //             return <Text style={{ color: 'black', fontSize: 15 }}>Explore</Text>
        //         } else if (route.name === 'ManHinh10_3') {
        //             return <Text style={{ color: 'black', fontSize: 15 }}>Bookmark</Text>
        //         }
        //     }
    },

    tabBarStyle: {
        backgroundColor: '#fff',
        height: 78
    }
})

const ManHinh11 = () => {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName='ManHinh10_1'
            screenOptions={
                screenOptions
            }
        >
            <Tab.Screen component={ManHinh10_1} name='ManHinh10_1' />
            <Tab.Screen component={ManHinh10_2} name='ManHinh10_2' />
            <Tab.Screen component={ManHinh10_3} name='ManHinh10_3' />
            <Tab.Screen component={ManHinh10_3} name='ManHinh10_4' />
        </Tab.Navigator>
    )
}

export default ManHinh11

const styles = StyleSheet.create({})