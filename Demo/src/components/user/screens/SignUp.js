import {
    StyleSheet, Text, View,
    TextInput,
    Image,
    TouchableOpacity,
    Alert,
    ToastAndroid,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import React, { useState, useContext } from 'react'
import { register } from '../UserHTTP'

const SignUp = (props) => {
    const { navigation } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showpassword, setShowPassword] = useState(false)

    const handleRegister = async () => {
        try {
            const result = await register(email, password)
            Alert.alert('Sucess', 'Register success, please login')
            navigation.navigate('Login')
        } catch (error) {
            ToastAndroid.show(error.message, ToastAndroid.SHORT);
        }
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Text style={styles.hello}>Hello!</Text>
                </View>
                <View>
                    <Text style={styles.signup}>Signup to get Started</Text>
                </View>
                <View style={styles.usernameContainer}>
                    <Text style={styles.usernameLabel}>Email*</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={styles.usernameInput}
                        placeholder='Email' />
                </View>
                <View style={styles.passwordContainer}>
                    <Text style={styles.usernameLabel}>Password*</Text>
                    <View style={styles.passwordInputContainer}>
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            style={styles.usernameInput}
                            secureTextEntry={!showpassword}
                            placeholder='Password' />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showpassword)}
                            style={styles.eyeIcon}>
                            <Image style={{ width: 24, height: 24 }} source={showpassword ? require('../../../media/pictures/showeyes.png')
                                : require('../../../media/pictures/eyes.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => handleRegister()}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonLabel}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.continueContainer}>
                    <Text style={styles.continueText}>or continue with</Text>
                </View>
                <View style={styles.socialButtons}>
                    <TouchableOpacity style={styles.socialButtonsContainer}>
                        <Image style={styles.fbIcon} source={require('../../../media/pictures/facebook.png')} />
                        <Text style={styles.fbLabel}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButtonsContainer}>
                        <Image style={styles.ggIcon} source={require('../../../media/pictures/google.png')} />
                        <Text style={styles.fbLabel}>Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.accountContainer}>
                    <Text style={styles.accountLabel}>Already have an account ?</Text>
                    <Text
                        onPress={() => navigation.navigate('Login')}
                        style={styles.loginLabel}> Login</Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    loginLabel: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#1877f2'
    },
    accountLabel: {
        fontSize: 14,
        fontWeight: '400',
        letterSpacing: 0.12,
        color: '#667080'
    },
    accountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16
    },
    fbLabel: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#667080'
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#EEF1F4',
        alignItems: 'center',
        height: 48,
        borderRadius: 6,
        width: '46%'
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16
    },
    continueText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66'
    },
    continueContainer: {
        marginTop: 16,
        alignItems: 'center'
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#fff'
    },
    buttonContainer: {
        marginTop: 48,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#1877F2'
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: 16,
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    passwordInputContainer: {
        position: 'relative'
    },
    passwordContainer: {
        marginTop: 16
    },
    usernameInput: {
        marginTop: 4,
        height: 48,
        padding: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#4e4b66',
        backgroundColor: '#fff'
    },
    usernameLabel: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4e4b66'
    },
    usernameContainer: {
        marginTop: 65
    },
    signup: {
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 30,
        letterSpacing: 0.12,
        color: '#4e4b66'
    },
    hello: {
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 72,
        letterSpacing: 0.12,
        color: '#1877f2'
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 24,
        backgroundColor: '#fff'
    }
})