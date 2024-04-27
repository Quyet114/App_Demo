import {
    StyleSheet, Text, View,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper'

const ForgotPassword1 = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ padding: 24 }}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../../../media/pictures/back.png')} />
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
                            width: 330,
                            fontSize: 16,
                            fontWeight: '400',
                            lineHeight: 24,
                            letterSpacing: 0.12,
                            color: '#4e4b66'
                        }}>Don’t worry! it happens. Please select the
                            email or number associated with your account.</Text>
                    </View>
                    <View>
                        <View style={styles.emailContainer}>
                            <View style={{ width: 64, height: 64, borderRadius: 6, backgroundColor: '#1877f2', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 24, height: 24 }} source={require('../../../media/pictures/mail.png')} />
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '400',
                                    lineHeight: 21,
                                    letterSpacing: 0.12,
                                    color: '#667080'
                                }}>via Email:</Text>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: '400',
                                    lineHeight: 24,
                                    letterSpacing: 0.12,
                                    color: '#050505'
                                }}>example@youremail.com</Text>
                            </View>
                            <View >
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                />
                            </View>
                        </View>
                        <View style={styles.emailContainer}>
                            <View style={{ width: 64, height: 64, borderRadius: 6, backgroundColor: '#1877f2', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 24, height: 24 }} source={require('../../../media/pictures/message.png')} />
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '400',
                                    lineHeight: 21,
                                    letterSpacing: 0.12,
                                    color: '#667080'
                                }}>via SMS:</Text>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: '400',
                                    lineHeight: 24,
                                    letterSpacing: 0.12,
                                    color: '#050505'
                                }}>example@youremail.com</Text>
                            </View>
                            <View >
                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{
                height: 130,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.05)',
                paddingHorizontal: 24,
                paddingVertical: 40
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPassword2')}
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
        </View>
    )
}

export default ForgotPassword1

const styles = StyleSheet.create({
    emailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 18,
        backgroundColor: '#eef1f4',
        borderRadius: 6,
        marginTop: 16
    },
    container: {
        flex: 1,
        width: '100%',
        height: "100%",
        backgroundColor: '#fff'
    }
})