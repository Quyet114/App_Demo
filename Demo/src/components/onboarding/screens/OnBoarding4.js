import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const OnBoarding4 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={{ width: '100%', height: 450 }}
                    source={require('../../../media/pictures/traicay2.png')} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 24 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{ width: 14, height: 14, marginEnd: 5 }}
                        source={require('../../../media/pictures/dot.png')} />
                    <Image
                        style={{ width: 14, height: 14, marginEnd: 5 }}
                        source={require('../../../media/pictures/dot.png')} />
                    <Image
                        style={{ width: 14, height: 14 }}
                        source={require('../../../media/pictures/dotfocus.png')} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OnBoarding3')}>
                        <Text style={{ fontSize: 16, fontWeight: '600', lineHeight: 24, letterSpacing: 0.12, color: '#B0B3B8' }}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        style={{ marginStart: 10, width: 142, height: 50, backgroundColor: '#1877f2', borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600', lineHeight: 24, letterSpacing: 0.12, color: '#fff' }}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default OnBoarding4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    }
})