import * as React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../src/components/news/screens/Home';

function HomePage() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

function BookmarkScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Bookmark!</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} options={{
                    headerShown: false, tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require('../src/media/pictures/home.png')} />
                        )
                    }
                }} />
                <Tab.Screen name="Setting" component={SettingsScreen} options={{
                    headerShown: false, tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require('../src/media/pictures/compass.png')} />
                        )
                    }
                }} />
                <Tab.Screen name="Bookmark" component={BookmarkScreen} options={{
                    headerShown: false, tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require('../src/media/pictures/bookmark2.png')} />
                        )
                    }
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    headerShown: false, tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require('../src/media/pictures/profile.png')} />
                        )
                    }
                }} />
            </Tab.Navigator>
        </>

    );
}

export default MyTabs;

const styles = StyleSheet.create({})