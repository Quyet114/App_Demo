import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Trending = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../../media/pictures/back.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={[styles.fs16fw600lh24ls012, styles.cl000]}>Trending</Text>
                </View>
                <View>
                    <Image style={{ tintColor: '#4e4b66' }} source={require('../../../media/pictures/morever.png')} />
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.cardContainer}>
                    <View style={styles.battleshipContainer}>
                        <Image style={styles.battleship} source={require('../../../media/pictures/battleship.png')} />
                    </View>
                    <View>
                        <Text style={styles.europe}>Europe</Text>
                        <Text numberOfLines={1} style={styles.russian}>Russian warship: Moskva sinks in Black Sea</Text>
                    </View>
                    <View style={styles.cardNewsContainer}>
                        <View style={styles.cardNews}>
                            <Image style={styles.bbcIcon} source={require('../../../media/pictures/bbcnews.png')} />
                            <Text style={styles.bbcLabel}>BBC News</Text>
                            <Image style={styles.timeIcon} source={require('../../../media/pictures/time.png')} />
                            <Text style={styles.timeLabel}>1h ago</Text>
                        </View>
                        <View>
                            <Image source={require('../../../media/pictures/3cham.png')} />
                        </View>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.battleshipContainer}>
                        <Image style={styles.battleship} source={require('../../../media/pictures/battay2.png')} />
                    </View>
                    <View>
                        <Text style={styles.europe}>Europe</Text>
                        <Text numberOfLines={2} style={styles.russian}>Ukraine's President Zelensky to BBC: Blood money being paid for Russian oil</Text>
                    </View>
                    <View style={styles.cardNewsContainer}>
                        <View style={styles.cardNews}>
                            <Image style={styles.bbcIcon} source={require('../../../media/pictures/usa.png')} />
                            <Text style={styles.bbcLabel}>USA Today</Text>
                            <Image style={styles.timeIcon} source={require('../../../media/pictures/time.png')} />
                            <Text style={styles.timeLabel}>2h ago</Text>
                        </View>
                        <View>
                            <Image source={require('../../../media/pictures/3cham.png')} />
                        </View>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.battleshipContainer}>
                        <Image style={styles.battleship} source={require('../../../media/pictures/damcuoi.png')} />
                    </View>
                    <View>
                        <Text style={styles.europe}>Europe</Text>
                        <Text numberOfLines={1} style={styles.russian}>Russian warship: Moskva sinks in Black Sea</Text>
                    </View>
                    <View style={styles.cardNewsContainer}>
                        <View style={styles.cardNews}>
                            <Image style={styles.bbcIcon} source={require('../../../media/pictures/cnn.png')} />
                            <Text style={styles.bbcLabel}>CNN</Text>
                            <Image style={styles.timeIcon} source={require('../../../media/pictures/time.png')} />
                            <Text style={styles.timeLabel}>1h ago</Text>
                        </View>
                        <View>
                            <Image source={require('../../../media/pictures/3cham.png')} />
                        </View>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.battleshipContainer}>
                        <Image style={styles.battleship} source={require('../../../media/pictures/battleship.png')} />
                    </View>
                    <View>
                        <Text style={styles.europe}>Europe</Text>
                        <Text numberOfLines={1} style={styles.russian}>Russian warship: Moskva sinks in Black Sea</Text>
                    </View>
                    <View style={styles.cardNewsContainer}>
                        <View style={styles.cardNews}>
                            <Image style={styles.bbcIcon} source={require('../../../media/pictures/bbcnews.png')} />
                            <Text style={styles.bbcLabel}>BBC News</Text>
                            <Image style={styles.timeIcon} source={require('../../../media/pictures/time.png')} />
                            <Text style={styles.timeLabel}>1h ago</Text>
                        </View>
                        <View>
                            <Image source={require('../../../media/pictures/3cham.png')} />
                        </View>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.battleshipContainer}>
                        <Image style={styles.battleship} source={require('../../../media/pictures/battay2.png')} />
                    </View>
                    <View>
                        <Text style={styles.europe}>Europe</Text>
                        <Text numberOfLines={2} style={styles.russian}>Ukraine's President Zelensky to BBC: Blood money being paid for Russian oil</Text>
                    </View>
                    <View style={styles.cardNewsContainer}>
                        <View style={styles.cardNews}>
                            <Image style={styles.bbcIcon} source={require('../../../media/pictures/usa.png')} />
                            <Text style={styles.bbcLabel}>USA Today</Text>
                            <Image style={styles.timeIcon} source={require('../../../media/pictures/time.png')} />
                            <Text style={styles.timeLabel}>2h ago</Text>
                        </View>
                        <View>
                            <Image source={require('../../../media/pictures/3cham.png')} />
                        </View>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.battleshipContainer}>
                        <Image style={styles.battleship} source={require('../../../media/pictures/damcuoi.png')} />
                    </View>
                    <View>
                        <Text style={styles.europe}>Europe</Text>
                        <Text numberOfLines={1} style={styles.russian}>Russian warship: Moskva sinks in Black Sea</Text>
                    </View>
                    <View style={styles.cardNewsContainer}>
                        <View style={styles.cardNews}>
                            <Image style={styles.bbcIcon} source={require('../../../media/pictures/cnn.png')} />
                            <Text style={styles.bbcLabel}>CNN</Text>
                            <Image style={styles.timeIcon} source={require('../../../media/pictures/time.png')} />
                            <Text style={styles.timeLabel}>1h ago</Text>
                        </View>
                        <View>
                            <Image source={require('../../../media/pictures/3cham.png')} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Trending

const styles = StyleSheet.create({
    timeLabel: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 19.5,
        letterSpacing: 0.12,
        color: '#4e4b66',
        marginStart: 4
    },
    timeIcon: {
        width: 14,
        height: 14,
        marginStart: 12
    },
    bbcLabel: {
        fontSize: 13,
        fontWeight: '600',
        lineHeight: 19.5,
        letterSpacing: 0.12,
        color: '#4e4b66',
        marginStart: 4
    },
    bbcIcon: {
        width: 20,
        height: 20,
        borderRadius: 20
    },
    russian: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#000',
        marginTop: 4
    },
    europe: {
        marginTop: 8,
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 19.5,
        letterSpacing: 0.12
    },
    battleship: {
        width: '100%',
        height: 183,
        borderRadius: 6
    },
    cardNews: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardNewsContainer: {
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    battleship: {
        width: '100%',
        height: 160,
        borderRadius: 6
    },
    cardContainer: {
        padding: 8,
        marginVertical: 8,
        backgroundColor: '#FFF'
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
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: 24,
        paddingBottom: 0
    }
})