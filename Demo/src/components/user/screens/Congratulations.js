import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Congratulations = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    height: '50%',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                <View>
                    <Image source={require('../../../media/pictures/kabar.png')} />
                </View>

            </View>
            <View style={{ marginTop: -70, alignItems: 'center' }}>
                <Text
                    style={{
                        fontSize: 32,
                        fontWeight: '700',
                        lineHeight: 36,
                        letterSpacing: -0.3,
                        color: '#4e4b66'
                    }}>Congratulations!</Text>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: '400',
                        lineHeight: 24,
                        letterSpacing: -0.3,
                        color: '#4e4b66',
                        marginTop: 8
                    }}>Your account is ready to use</Text>
            </View>
            <View
                style={{
                    height: 130,
                    paddingHorizontal: 24,
                    paddingVertical: 40
                }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={{
                        height: 50,
                        backgroundColor: '#1877f2',
                        borderRadius: 6,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600',
                        lineHeight: 24,
                        letterSpacing: 0.12,
                        color: '#fff'
                    }}>Go to Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Congratulations

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    }
})