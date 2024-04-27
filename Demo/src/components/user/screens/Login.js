import {
    Image, StyleSheet, Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert,
    ToastAndroid,
    KeyboardAvoidingView,
    ScrollView,
    Pressable
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useContext } from 'react'
import { UserContext } from '../UserContext'
import { login } from '../UserHTTP'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Login = (props) => {
    const { navigation } = props
    const [email, setEmail] = useState('abc@gmail.com')
    const [password, setPassword] = useState('1')
    const { setUser } = useContext(UserContext);
    const [showpassword, setShowPassword] = useState(false)

    const handleLogin = async () => {
        try {
            const result = await login(email, password);
            //lưu token vào AsyncStorage
            await AsyncStorage.setItem('token', result.data.token)
            //lưu thông tin user vào context
            setUser(result.data.user)
        } catch (error) {
            console.log(error)
            ToastAndroid.show('Login failed, Please check your email or password again',
                ToastAndroid.SHORT)
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View>
                    <Text style={[styles.hello, styles.title]}>Hello</Text>
                    <Text style={[styles.again, styles.title]}>Again</Text>
                </View>
                <View>
                    <Text style={styles.welcome}>Welcome back you've been missed</Text>
                </View>
                <View style={styles.usernameContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.usernameLabel}>Email</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={styles.usernameInput}
                        placeholder='Email' />
                </View>
                <View style={styles.passwordContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.passwordLabel}>Password</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <View style={styles.passwordInputContainer}>
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            style={styles.passwordInput}
                            secureTextEntry={!showpassword}
                            placeholder='Password' />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showpassword)}
                            style={styles.eyeIcon} >
                            <Image style={{ width: 24, height: 24 }} source={showpassword ? require('../../../media/pictures/showeyes.png')
                                : require('../../../media/pictures/eyes.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.remember_forgotContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword1')}>
                        <Text style={styles.forgot}>Forgot the password ?</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => handleLogin()}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonLabel}>Login</Text>
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
                    <Text style={styles.accountText}>don't have an account ? </Text>
                    <Text onPress={() => navigation.navigate('SignUp')}
                        style={{
                            fontSize: 14,
                            fontWeight: '600',
                            lineHeight: 21,
                            letterSpacing: 0.12,
                            color: '#1877f2'
                        }}>Sign Up</Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    accountText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#667080'
    },
    accountContainer: {
        marginTop: 16,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
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
    forgot: {
        color: '#5890FF',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12
    },
    remember_forgotContainer: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'flex-end'
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
    buttonLabel: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#fff'
    },
    buttonContainer: {
        marginTop: 16,
        height: 50,
        borderRadius: 6,
        backgroundColor: '#1877f2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: 16,
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    passwordInput: {
        marginTop: 4,
        height: 48,
        padding: 10,
        borderRadius: 6,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#4e4b66'
    },
    passwordInputContainer: {
        position: 'relative'
    },
    passwordLabel: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4e4b66'
    },
    passwordContainer: {
        marginTop: 16
    },
    usernameInput: {
        marginTop: 4,
        height: 48,
        padding: 10,
        borderRadius: 6,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#4e4b66'
    },
    usernameLabel: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4e4b66'
    },
    usernameContainer: {
        marginTop: 48
    },
    welcome: {
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 30,
        letterSpacing: 0.12,
        color: '#4e4b66',
        width: 222,
        height: 60
    },
    title: {
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 72,
        letterSpacing: 0.12
    },
    again: {
        color: '#1877F2'
    },
    hello: {
        color: '#050505'
    },
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#fff",
        width: '100%',
        height: '100%'
    }
})