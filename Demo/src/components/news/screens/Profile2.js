import {
    StyleSheet, Text, View,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Pressable
} from 'react-native'
import React, { useState } from 'react'

const Profile2 = ({ navigation }) => {
    const [categories, setCategories] = useState(CATEGORIES)
    const [indexPress, setIndexPress] = useState(1)

    const renderCategories = (val) => {
        const { id, name } = val.item
        const onSelectItem = () => {
            setIndexPress(id)
        }
        return (
            <View style={styles.itemCategories}>
                <Pressable onPress={onSelectItem}>
                    <Text style={[styles.categoriesContent, id.toString() == indexPress.toString() ? styles.mau000fw600 : null]}>{name}</Text>
                    <View style={id.toString() == indexPress.toString() ? styles.bottomBorder : null}></View>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View></View>
                    <View>
                        <Text style={[styles.fs16fw400lh24ls012, styles.cl000]}>Profile</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                        <Image source={require('../../../media/pictures/setting.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 13, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Image style={{ width: 100, height: 100, borderRadius: 100 }} source={require('../../../media/pictures/avatar.jpg')} />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.fs16fw600lh24ls012, styles.cl000]}>2156</Text>
                        <Text style={[styles.fs16fw400lh24ls012, styles.cl4e4b66]}>Followers</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.fs16fw600lh24ls012, styles.cl000]}>567</Text>
                        <Text style={[styles.fs16fw400lh24ls012, styles.cl4e4b66]}>Following</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.fs16fw600lh24ls012, styles.cl000]}>23</Text>
                        <Text style={[styles.fs16fw400lh24ls012, styles.cl4e4b66]}>News</Text>
                    </View>
                </View>
                <View style={{ marginTop: 16 }}>
                    <Text style={[styles.fs16fw600lh24ls012, styles.cl000]}>Wilson Franci</Text>
                    <Text style={[styles.fs16fw400lh24ls012, styles.cl4e4b66]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                        style={styles.edit}>
                        <Text style={[styles.fs16fw600lh24ls012, { color: '#fff' }]}>Edit profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.edit}>
                        <Text style={[styles.fs16fw600lh24ls012, { color: '#fff' }]}>Website</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', marginTop: 13 }}>
                    <FlatList
                        data={categories}
                        renderItem={renderCategories}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false} />
                </View>
                <View style={{ position: 'relative' }}>
                    <View style={styles.itemData}>
                        <View>
                            <Image style={styles.imageData}
                                source={require('../../../media/pictures/bitcon.jpg')} />
                        </View>
                        <View style={styles.contentData}>
                            <View>
                                <Text style={styles.categoryData}>NFTs</Text>
                                <Text style={styles.titleData} numberOfLines={2}>Minting Your First NFT: A Beginner’s Guide to Creating...</Text>
                            </View>
                            <View style={styles.cardNewsContainer}>
                                <View style={styles.cardNews}>
                                    <Image style={styles.bbcIcon} source={require('../../../media/pictures/avatar.jpg')} />
                                    <Text style={styles.bbcLabel}>Wilson Franci</Text>
                                    <Image style={styles.timeIcon} source={require('../../../media/pictures/time.png')} />
                                    <Text style={styles.timeLabel}>15m ago</Text>
                                </View>
                                <View>
                                    <Image source={require('../../../media/pictures/3cham.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.itemData}>
                        <View>
                            <Image style={styles.imageData}
                                source={require('../../../media/pictures/business.jpg')} />
                        </View>
                        <View style={styles.contentData}>
                            <View>
                                <Text style={styles.categoryData}>Business</Text>
                                <Text style={styles.titleData} numberOfLines={2}>5 things to know before the stock market opens Monday</Text>
                            </View>
                            <View style={styles.cardNewsContainer}>
                                <View style={styles.cardNews}>
                                    <Image style={styles.bbcIcon} source={require('../../../media/pictures/avatar.jpg')} />
                                    <Text style={styles.bbcLabel}>Wilson Franci</Text>
                                    <Image style={styles.timeIcon} source={require('../../../media/pictures/time.png')} />
                                    <Text style={styles.timeLabel}>1h ago</Text>
                                </View>
                                <View>
                                    <Image source={require('../../../media/pictures/3cham.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.itemData}>
                        <View>
                            <Image style={styles.imageData}
                                source={require('../../../media/pictures/chua.jpg')} />
                        </View>
                        <View style={styles.contentData}>
                            <View>
                                <Text style={styles.categoryData}>Travel</Text>
                                <Text style={styles.titleData} numberOfLines={2}>Bali plans to reopen to international tourists in Septe...</Text>
                            </View>
                            <View style={styles.cardNewsContainer}>
                                <View style={styles.cardNews}>
                                    <Image style={styles.bbcIcon} source={require('../../../media/pictures/avatar.jpg')} />
                                    <Text style={styles.bbcLabel}>Wilson Franci</Text>
                                    <Image style={styles.timeIcon} source={require('../../../media/pictures/time.png')} />
                                    <Text style={styles.timeLabel}>1d ago</Text>
                                </View>
                                <View>
                                    <Image source={require('../../../media/pictures/3cham.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.itemData}>
                        <View>
                            <Image style={styles.imageData}
                                source={require('../../../media/pictures/health.jpg')} />
                        </View>
                        <View style={styles.contentData}>
                            <View>
                                <Text style={styles.categoryData}>Health</Text>
                                <Text style={styles.titleData} numberOfLines={2}>Healthy Living: Diet and Exercise Tips & Tools for Success.</Text>
                            </View>
                            <View style={styles.cardNewsContainer}>
                                <View style={styles.cardNews}>
                                    <Image style={styles.bbcIcon} source={require('../../../media/pictures/avatar.jpg')} />
                                    <Text style={styles.bbcLabel}>Wilson Franci</Text>
                                    <Image style={styles.timeIcon} source={require('../../../media/pictures/time.png')} />
                                    <Text style={styles.timeLabel}>1w ago</Text>
                                </View>
                                <View>
                                    <Image source={require('../../../media/pictures/3cham.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.itemData}>
                        <View>
                            <Image style={styles.imageData}
                                source={require('../../../media/pictures/business.jpg')} />
                        </View>
                        <View style={styles.contentData}>
                            <View>
                                <Text style={styles.categoryData}>Business</Text>
                                <Text style={styles.titleData} numberOfLines={2}>5 things to know before the stock market opens Monday</Text>
                            </View>
                            <View style={styles.cardNewsContainer}>
                                <View style={styles.cardNews}>
                                    <Image style={styles.bbcIcon} source={require('../../../media/pictures/avatar.jpg')} />
                                    <Text style={styles.bbcLabel}>Wilson Franci</Text>
                                    <Image style={styles.timeIcon} source={require('../../../media/pictures/time.png')} />
                                    <Text style={styles.timeLabel}>1h ago</Text>
                                </View>
                                <View>
                                    <Image source={require('../../../media/pictures/3cham.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.itemData}>
                        <View>
                            <Image style={styles.imageData}
                                source={require('../../../media/pictures/chua.jpg')} />
                        </View>
                        <View style={styles.contentData}>
                            <View>
                                <Text style={styles.categoryData}>Travel</Text>
                                <Text style={styles.titleData} numberOfLines={2}>Bali plans to reopen to international tourists in Septe...</Text>
                            </View>
                            <View style={styles.cardNewsContainer}>
                                <View style={styles.cardNews}>
                                    <Image style={styles.bbcIcon} source={require('../../../media/pictures/avatar.jpg')} />
                                    <Text style={styles.bbcLabel}>Wilson Franci</Text>
                                    <Image style={styles.timeIcon} source={require('../../../media/pictures/time.png')} />
                                    <Text style={styles.timeLabel}>1d ago</Text>
                                </View>
                                <View>
                                    <Image source={require('../../../media/pictures/3cham.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.itemData}>
                        <View>
                            <Image style={styles.imageData}
                                source={require('../../../media/pictures/health.jpg')} />
                        </View>
                        <View style={styles.contentData}>
                            <View>
                                <Text style={styles.categoryData}>Health</Text>
                                <Text style={styles.titleData} numberOfLines={2}>Healthy Living: Diet and Exercise Tips & Tools for Success.</Text>
                            </View>
                            <View style={styles.cardNewsContainer}>
                                <View style={styles.cardNews}>
                                    <Image style={styles.bbcIcon} source={require('../../../media/pictures/avatar.jpg')} />
                                    <Text style={styles.bbcLabel}>Wilson Franci</Text>
                                    <Image style={styles.timeIcon} source={require('../../../media/pictures/time.png')} />
                                    <Text style={styles.timeLabel}>1w ago</Text>
                                </View>
                                <View>
                                    <Image source={require('../../../media/pictures/3cham.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.navigate('CreateNew')}
                style={{
                    width: 54,
                    height: 54,
                    backgroundColor: '#1877f2',
                    borderRadius: 54,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 24,
                    right: 24
                }}>
                <Image style={{ tintColor: '#fff' }} source={require('../../../media/pictures/plus.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Profile2

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
    titleData: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000'
    },
    categoryData: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 19.5,
        letterSpacing: 0.12,
        color: '#4e4b66',
        marginBottom: 3
    },
    contentData: {
        marginLeft: 4,
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 4
    },
    imageData: {
        width: 96,
        height: 96,
        borderRadius: 6
    },
    itemData: {
        flexDirection: 'row',
        marginTop: 13,
        padding: 8,
        justifyContent: 'flex-start'
    },
    mau000fw600: {
        color: '#000',
        fontWeight: '600'
    },
    bottomBorder: {
        borderBottomColor: '#1877F2',
        borderWidth: 1,
        marginTop: 8
    },
    categoriesContent: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#4e4b66'
    },
    itemCategories: {
        marginEnd: 10
    },
    edit: {
        width: 165,
        height: 50,
        backgroundColor: '#1877f2',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fs16fw600lh24ls012: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.12
    },
    cl4e4b66: {
        color: '#4e4b66'
    },
    cl000: {
        color: "#000"
    },
    fs16fw400lh24ls012: {
        fontSize: 16,
        fontWeight: '400',
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

var CATEGORIES = [{
    id: 1,
    name: 'News'
}, {
    id: 2,
    name: 'Recent'
}]