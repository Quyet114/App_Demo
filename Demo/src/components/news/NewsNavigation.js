import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Bookmark from './screens/Bookmark';
import Detail from './screens/Detail';
import Explore from './screens/Explore';
import Home from './screens/Home';
import Trending from './screens/Trending';
import Notification from './screens/Notification';
import Profile2 from './screens/Profile2';
import Setting from './screens/Setting';
import Profile from './screens/Profile';
import CreateNew from './screens/CreateNew';

const HomeStack = ({ route }) => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Trending" component={Trending} />

        </Stack.Navigator>
    )
}

const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
        if (focused) {
            if (route.name === 'HomeStack') {
                return (
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../../media/pictures/homefocus.png')}
                            style={{ width: 24, height: 24 }} />
                        <Text style={[styles.fs14fw400lh21, styles.cl1877f2]}>Home</Text>
                    </View>
                )
            } else if (route.name === 'Explore') {
                return (
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../../media/pictures/explorefocus.png')}
                            style={{ width: 24, height: 24 }} />
                        <Text style={[styles.fs14fw400lh21, styles.cl1877f2]}>Explore</Text>
                    </View>
                )
            } else if (route.name === 'Bookmark') {
                return (
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../../media/pictures/bookmarkfocus.png')}
                            style={{ width: 24, height: 24 }} />
                        <Text style={[styles.fs14fw400lh21, styles.cl1877f2]}>Bookmark</Text>
                    </View>
                )
            }
            else if (route.name === 'Profile2') {
                return (
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../../media/pictures/profilefocus.png')}
                            style={{ width: 24, height: 24 }} />
                        <Text style={[styles.fs14fw400lh21, styles.cl1877f2]}>Profile</Text>
                    </View>
                )
            }
        } else {
            if (route.name === 'HomeStack') {
                return (
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../../media/pictures/home.png')}
                            style={{ width: 24, height: 24 }} />
                        <Text style={[styles.fs14fw400lh21, styles.cl4e4b66]}>Home</Text>
                    </View>
                )
            } else if (route.name === 'Explore') {
                return (
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../../media/pictures/explore.png')}
                            style={{ width: 24, height: 24 }} />
                        <Text style={[styles.fs14fw400lh21, styles.cl4e4b66]}>Explore</Text>
                    </View>
                )
            } else if (route.name === 'Bookmark') {
                return (
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../../media/pictures/bookmark.png')}
                            style={{ width: 24, height: 24 }} />
                        <Text style={[styles.fs14fw400lh21, styles.cl4e4b66]}>Bookmark</Text>
                    </View>
                )
            } else if (route.name === 'Profile2') {
                return (
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../../media/pictures/profile.png')}
                            style={{ width: 24, height: 24 }} />
                        <Text style={[styles.fs14fw400lh21, styles.cl4e4b66]}>Profile</Text>
                    </View>
                )
            }
        }
    },

    tabBarLabel: () => {
        return false
    },

    tabBarStyle: {
        height: 78
    }
})

export const HomeTabs = ({ route }) => {
    return (
        <Tab.Navigator
            screenOptions={screenOptions}>
            <Tab.Screen name="HomeStack" component={HomeStack} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Bookmark" component={Bookmark} />
            <Tab.Screen name="Profile2" component={Profile2} />
        </Tab.Navigator>
    )
}


const NewsNavigation = ({ route }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="CreateNew" component={CreateNew} />
        </Stack.Navigator>

        // <Tab.Navigator
        // screenOptions={screenOptions}
        // >
        //     <Tab.Screen component={HomeStack} name='HomeStack' />
        //     <Tab.Screen component={Explore} name='Explore' />
        //     <Tab.Screen component={Bookmark} name='Bookmark' />
        //     <Tab.Screen component={Profile} name='Profile' />
        // </Tab.Navigator>
    )
}

export default NewsNavigation

const styles = StyleSheet.create({
    cl1877f2: {
        color: '#1877F2'
    },
    cl4e4b66: {
        color: '#4e4b66'
    },
    fs14fw400lh21: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12
    }
})