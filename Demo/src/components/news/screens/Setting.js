import {
    StyleSheet, Text, View,
    TouchableOpacity,
    Image
} from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../user/UserContext'

const Setting = ({ navigation }) => {
    const { setUser } = useContext(UserContext)
    const logout = () => {
        setUser('')
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../media/pictures/back.png')} />
                </TouchableOpacity>
                <View>
                    <Text style={[styles.fs16fw400lh24ls012, { color: '#000' }]}>Settings</Text>
                </View>
                <View></View>
            </View>
            <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ marginEnd: 4 }} source={require('../../../media/pictures/notifi.png')} />
                    <Text style={[styles.fs16fw400lh24ls012, { color: '#000' }]}>Notification</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../../media/pictures/right.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 48, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ marginEnd: 4 }} source={require('../../../media/pictures/security.png')} />
                    <Text style={[styles.fs16fw400lh24ls012, { color: '#000' }]}>Security</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../../media/pictures/right.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 48, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ marginEnd: 4 }} source={require('../../../media/pictures/help.png')} />
                    <Text style={[styles.fs16fw400lh24ls012, { color: '#000' }]}>Help</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../../media/pictures/right.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 48, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ marginEnd: 4 }} source={require('../../../media/pictures/darkmode.png')} />
                    <Text style={[styles.fs16fw400lh24ls012, { color: '#000' }]}>Dark Mode</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../../media/pictures/right.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 48, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => logout()}
                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Image style={{ marginEnd: 4 }} source={require('../../../media/pictures/logout.png')} />
                    </View>
                    <Text style={[styles.fs16fw400lh24ls012, { color: '#000' }]}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    fs16fw400lh24ls012: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0.12
    },
    container: {
        flex: 1,
        width: '100%',
        height: "100%",
        backgroundColor: '#fff',
        padding: 24,
        paddingBottom: 0
    }
})