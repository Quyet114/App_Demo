import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const OnBoarding2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Image
                        style={{ height: 450, width: '100%' }}
                        source={require('../../../media/pictures/bitcon2.png')} />
                </View>
                <View style={{ padding: 24 }}>
                    <Text style={{ width: 279, fontSize: 24, fontWeight: '700', lineHeight: 36, letterSpacing: 0.12, color: '#000' }}>Lorem Ipsum is simply dummy</Text>
                    <Text style={{ width: 318, fontSize: 16, fontWeight: '400', lineHeight: 24, letterSpacing: 0.12, color: '#4e4b66' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 24 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{ width: 14, height: 14, marginEnd: 5 }}
                        source={require('../../../media/pictures/dotfocus.png')} />
                    <Image
                        style={{ width: 14, height: 14, marginEnd: 5 }}
                        source={require('../../../media/pictures/dot.png')} />
                    <Image
                        style={{ width: 14, height: 14 }}
                        source={require('../../../media/pictures/dot.png')} />
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OnBoarding3')}
                        style={{ width: 85, height: 50, backgroundColor: '#1877f2', borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600', lineHeight: 24, letterSpacing: 0.12, color: '#fff' }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default OnBoarding2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    }
})