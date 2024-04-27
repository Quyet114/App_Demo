import {
    StyleSheet, Text, View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'
import React from 'react'

const Notification = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../../../media/pictures/back.png')} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={[styles.fs16fw600lh24ls012, styles.cl000]}>Notification</Text>
                    </View>
                    <View>
                        <Image style={{ tintColor: '#4e4b66' }} source={require('../../../media/pictures/morever.png')} />
                    </View>
                </View>
                <View style={{ marginVertical: 8 }}>
                    <Text style={[styles.fs16fw600lh24ls012, styles.cl000]}>Today, October 11</Text>
                </View>
                <View style={{ width: '100%', paddingHorizontal: 8, paddingVertical: 14, marginVertical: 8, backgroundColor: '#EEF1F4', borderRadius: 6, flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Image style={{ width: 70, height: 70, borderRadius: 70 }} source={require('../../../media/pictures/bbcnews.png')} />
                    </View>
                    <View style={{ flex: 1, marginStart: 16 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text numberOfLines={2} style={[styles.fs16fw600lh24ls012, styles.cl050505]}>BBC News <Text style={[styles.fs14fw400lh24ls012, styles.cl050505]}>has posted new europe news “Ukraine's President Zele...”</Text></Text>
                        </View>
                        <Text
                            style={{
                                marginTop: 3,
                                fontSize: 13,
                                fontWeight: '400',
                                lineHeight: 19.5,
                                letterSpacing: 0.12,
                                color: '#4e4b66'
                            }}>15m ago</Text>
                    </View>
                </View>
                <View style={{ width: '100%', paddingHorizontal: 8, paddingVertical: 14, marginVertical: 8, backgroundColor: '#EEF1F4', borderRadius: 6, flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Image style={{ width: 70, height: 70, borderRadius: 70 }} source={require('../../../media/pictures/women.jpg')} />
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 16 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text numberOfLines={2} style={[styles.fs16fw600lh24ls012, styles.cl050505]}>Modelyn Saris <Text style={[styles.fs14fw400lh24ls012, styles.cl050505]}>is now following you</Text></Text>
                        </View>
                        <Text
                            style={{
                                marginTop: 3,
                                fontSize: 13,
                                fontWeight: '400',
                                lineHeight: 19.5,
                                letterSpacing: 0.12,
                                color: '#4e4b66'
                            }}>45m ago</Text>
                    </View>
                    <TouchableOpacity style={{ position: 'relative', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{
                                width: 20,
                                height: 20,
                                position: 'absolute',
                                left: 5,
                                top: 4.5
                            }} source={require('../../../media/pictures/plus.png')} />
                        <Text style={styles.follow}>Follow</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', paddingHorizontal: 8, paddingVertical: 14, marginVertical: 8, backgroundColor: '#EEF1F4', borderRadius: 6, flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Image style={{ width: 70, height: 70, borderRadius: 70 }} source={require('../../../media/pictures/men.jpg')} />
                    </View>
                    <View style={{ flex: 1, marginStart: 16 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text numberOfLines={2} style={[styles.fs16fw600lh24ls012, styles.cl050505]}>Omar Merditz <Text style={[styles.fs14fw400lh24ls012, styles.cl050505]}>comment to your news “Minting Your First NFT: A... “</Text></Text>
                        </View>
                        <Text
                            style={{
                                marginTop: 3,
                                fontSize: 13,
                                fontWeight: '400',
                                lineHeight: 19.5,
                                letterSpacing: 0.12,
                                color: '#4e4b66'
                            }}>1h ago</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 8 }}>
                    <Text style={[styles.fs16fw600lh24ls012, styles.cl000]}>Yesterday, October 10</Text>
                </View>
                <View style={{ width: '100%', paddingHorizontal: 8, paddingVertical: 14, marginVertical: 8, backgroundColor: '#EEF1F4', borderRadius: 6, flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Image style={{ width: 70, height: 70, borderRadius: 70 }} source={require('../../../media/pictures/women2.jpg')} />
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 16 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text numberOfLines={2} style={[styles.fs16fw600lh24ls012, styles.cl050505]}>Marley Botosh <Text style={[styles.fs14fw400lh24ls012, styles.cl050505]}>is now following you</Text></Text>
                        </View>
                        <Text
                            style={{
                                marginTop: 3,
                                fontSize: 13,
                                fontWeight: '400',
                                lineHeight: 19.5,
                                letterSpacing: 0.12,
                                color: '#4e4b66'
                            }}>1 Day ago</Text>
                    </View>
                    <TouchableOpacity style={{ position: 'relative', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{
                                width: 20,
                                height: 20,
                                position: 'absolute',
                                left: 5,
                                top: 4.5
                            }} source={require('../../../media/pictures/plus.png')} />
                        <Text style={styles.follow}>Follow</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', paddingHorizontal: 8, paddingVertical: 14, marginVertical: 8, backgroundColor: '#EEF1F4', borderRadius: 6, flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Image style={{ width: 70, height: 70, borderRadius: 70 }} source={require('../../../media/pictures/women.jpg')} />
                    </View>
                    <View style={{ flex: 1, marginStart: 16 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text numberOfLines={2} style={[styles.fs16fw600lh24ls012, styles.cl050505]}>Modelyn Saris <Text style={[styles.fs14fw400lh24ls012, styles.cl050505]}>likes your news “Minting Your First NFT: A... “</Text></Text>
                        </View>
                        <Text
                            style={{
                                marginTop: 3,
                                fontSize: 13,
                                fontWeight: '400',
                                lineHeight: 19.5,
                                letterSpacing: 0.12,
                                color: '#4e4b66'
                            }}>1 Day ago</Text>
                    </View>
                </View>
                <View style={{ width: '100%', paddingHorizontal: 8, paddingVertical: 14, marginVertical: 8, backgroundColor: '#EEF1F4', borderRadius: 6, flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Image style={{ width: 70, height: 70, borderRadius: 70 }} source={require('../../../media/pictures/cnn.png')} />
                    </View>
                    <View style={{ flex: 1, marginStart: 16 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text numberOfLines={2} style={[styles.fs16fw600lh24ls012, styles.cl050505]}>CNN <Text style={[styles.fs14fw400lh24ls012, styles.cl050505]}>has posted new travel news “Her train broke down. Her pho...”</Text></Text>
                        </View>
                        <Text
                            style={{
                                marginTop: 3,
                                fontSize: 13,
                                fontWeight: '400',
                                lineHeight: 19.5,
                                letterSpacing: 0.12,
                                color: '#4e4b66'
                            }}>1 Day ago</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    follow: {
        borderWidth: 1,
        borderColor: '#1877f2',
        borderRadius: 6,
        color: '#1877f2',
        paddingHorizontal: 6,
        paddingVertical: 2,
        width: 80,
        textAlign: "right",
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.12
    },
    cl050505: {
        color: '#050505'
    },
    fs14fw400lh24ls012: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0.12
    },
    cl000: {
        color: '#000'
    },
    fs16fw600lh24ls012: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.12
    },
    container: {
        flex: 1,
        width: "100%",
        height: '100%',
        backgroundColor: '#fff',
        padding: 24,
        paddingBottom: 0
    }
})