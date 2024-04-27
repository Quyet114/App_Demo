import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const OnBoarding1 = ({ navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('OnBoarding2')}
            style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    style={{ width: 217, height: 66 }}
                    source={require('../../../media/pictures/kabar.png')} />
            </View>
        </TouchableOpacity>
    )
}

export default OnBoarding1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    }
})