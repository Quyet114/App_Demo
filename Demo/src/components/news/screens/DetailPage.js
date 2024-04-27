import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const DetailPage = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, padding: 24 }}>
                <View style={styles.backContainer}>
                    <View>
                        <Image style={{ width: 24, height: 24 }}
                            source={require('../../../media/pictures/back.png')} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ width: 24, height: 24 }}
                            source={require('../../../media/pictures/share.png')} />
                        <Image style={{ width: 24, height: 24 }}
                            source={require('../../../media/pictures/morever.png')} />
                    </View>
                </View>
                <View style={styles.followingContainer}>
                    <View style={styles.followingContent}>
                        <View>
                            <Image style={{ width: 50, height: 50, borderRadius: 50, marginEnd: 4 }}
                                source={require('../../../media/pictures/bbc.png')} />
                        </View>
                        <View>
                            <Text style={styles.fs16wf600lh24lsp012}>BBC News</Text>
                            <Text style={styles.fs14wf400lh21lsp012}>14m ago</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.followingButton}>
                            <Text style={[styles.fs16wf600lh24lsp012, styles.mautrang]}>Following</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    <View>
                        <Image style={{ width: '100%', height: 248, marginTop: 16, borderRadius: 6 }}
                            source={require('../../../media/pictures/battleship.png')} />
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Text style={styles.fs14wf400lh21lsp012}>Europe</Text>
                        <Text style={styles.titleContent}>Ukraine's President Zelensky to BBC: Blood money being paid for Russian oil</Text>
                        <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 24, letterSpacing: 0.12, color: '#4e4b66' }}>
                            Ukrainian President Volodymyr Zelensky has accused European countries that continue to buy Russian oil of "earning their money in other people's blood".
                            In an interview with the BBC, President Zelensky singled out Germany and Hungary, accusing them of blocking efforts to embargo energy sales, from which Russia stands to make up to £250bn ($326bn) this year.

                            There has been a growing frustration among Ukraine's leadership with Berlin, which has backed some sanctions against Russia but so far resisted calls to back tougher action on oil sales.
                            Ukrainian President Volodymyr Zelensky has accused European countries that continue to buy Russian oil of "earning their money in other people's blood".

                            In an interview with the BBC, President Zelensky singled out Germany and Hungary, accusing them of blocking efforts to embargo energy sales, from which Russia stands to make up to £250bn ($326bn) this year.

                            There has been a growing frustration among Ukraine's leadership with Berlin, which has backed some sanctions against Russia but so far resisted calls to back tougher action on oil sales.
                        </Text>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.commentContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ marginEnd: 4 }}
                        source={require('../../../media/pictures/heart.png')} />
                    <Text style={styles.fs16wf400lh24lsp012}>24.5K</Text>
                    <Image style={{ marginStart: 29, marginEnd: 4 }}
                        source={require('../../../media/pictures/comment.png')} />
                    <Text style={styles.fs16wf400lh24lsp012}>1K</Text>
                </View>
                <View>
                    <Image
                        source={require('../../../media/pictures/bookmark.png')} />
                </View>
            </View>
        </View >
    )
}

export default DetailPage

const styles = StyleSheet.create({
    commentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 24,
        borderTopWidth: 0.2,
        borderColor: '#aaa',
        backgroundColor: '#fff'
    },
    titleContent: {
        fontSize: 24,
        fontWeight: '400',
        lineHeight: 36,
        letterSpacing: 0.12,
        color: '#000',
        marginBottom: 16
    },
    mautrang: {
        color: '#fff'
    },
    followingButton: {
        backgroundColor: '#1877F2',
        paddingTop: 5,
        paddingBottom: 5,
        paddingEnd: 11,
        paddingStart: 12,
        borderRadius: 6
    },
    fs14wf400lh21lsp012: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4e4b66'
    },
    fs16wf400lh24lsp012: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#050505'
    },
    fs16wf600lh24lsp012: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000'
    },
    followingContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    followingContainer: {
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    backContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    }
})