import {
    StyleSheet, Text, View,
    Image,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import React from 'react'

const ForgotPassword2 = ({ navigation }) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView>
                <View style={{ padding: 24 }}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            {/* <Image source={require('../../../media/pictures/back.png')} /> */}
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Text style={{
                            width: 186,
                            fontSize: 32,
                            fontWeight: '700',
                            lineHeight: 48,
                            letterSpacing: 0.12,
                            color: '#4e4b66'
                        }}>Forgot Password ?</Text>
                        <Text style={{
                            width: 325,
                            fontSize: 16,
                            fontWeight: '400',
                            lineHeight: 24,
                            letterSpacing: 0.12,
                            color: '#4e4b66'
                        }}>Don’t worry! it happens. Please enter the
                            address associated with your account.</Text>
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',
                            lineHeight: 21,
                            letterSpacing: 0.12,
                            color: '#4e4b66'
                        }}>Email ID / Mobile number</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                marginTop: 4,
                                borderRadius: 6,
                                backgroundColor: '#fff',
                                color: '#4e4b66',
                                padding: 10
                            }} />
                    </View>
                </View>
            </ScrollView>
            <View
                style={{
                    height: 130,
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.05)',
                    paddingHorizontal: 24,
                    paddingVertical: 40
                }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Verification')}
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
                    }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default ForgotPassword2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    }
})