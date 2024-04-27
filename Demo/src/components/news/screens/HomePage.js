import { Image, StyleSheet, Text, TextInput, View, FlatList, Pressable, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getNews } from '../../../http/NewsHTTP'

const HomePage = (props) => {
    const [news, setNews] = useState([])
    //useEffect: chạy sau khi màn hình render và sau khi state thay đổi
    useEffect(() => {
        console.log('>>>>>>9')
    })
    //chạy sau khi render
    useEffect(() => {
        //Lấy danh sách tin tức từ API
        const fetchData = async () => {
            try {
                const result = await getNews();
                setNews(result.data);
            } catch (error) {
                console.log('>>>>>>>>fetch data 20: ', error)
            }
        }
    }, [])
    const [count, setCount] = useState(0)
    //chạy sau khi render và sau khi state theo dõi thay đổi
    useEffect(() => {
        console.log('>>>>>>>>>15');
    }, [count])

    const [categories, setCategories] = useState(CATEGORIES)
    const [indexPress, setIndexPress] = useState(1)
    const [data, setData] = useState(DATA)
    const Tab = createBottomTabNavigator();

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

    const renderData = (val) => {
        const { id, image, category, title } = val.item
        return (
            <View style={styles.itemData}>
                <View>
                    <Image style={styles.imageData}
                        source={{ uri: image }} />
                </View>
                <View style={styles.contentData}>
                    <View>
                        <Text style={styles.categoryData}>{category}</Text>
                        <Text style={styles.titleData} numberOfLines={2}>{title}</Text>
                    </View>
                    <View style={styles.cardNewsContainer}>
                        <View style={styles.cardNews}>
                            <Image style={styles.bbcIcon} source={require('../../../media/pictures/bbcnews.png')} />
                            <Text style={styles.bbcLabel}>BBC News</Text>
                            <Image style={styles.timeIcon} source={require('../../../media/pictures/time.png')} />
                            <Text style={styles.timeLabel}>4h ago</Text>
                        </View>
                        <View>
                            <Image source={require('../../../media/pictures/3cham.png')} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <View style={styles.titleContainer}>
                    <Image style={styles.kabarIcon} source={require('../../../media/pictures/kabar.png')} />
                    <View style={styles.bellContainer}>
                        <Image style={styles.bellIcon} source={require('../../../media/pictures/bell.png')} />
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <View style={styles.searchInputContainer}>
                        <TextInput style={styles.searchInput}
                            placeholder='Search' />
                        <Image style={styles.searchIcon} source={require('../../../media/pictures/search.png')} />
                        <Image style={styles.filterIcon} source={require('../../../media/pictures/filter.png')} />
                    </View>
                </View>
                <View style={styles.trendingContainer}>
                    <Text style={styles.trending}>Trending</Text>
                    <Text style={styles.seeAll}>See all</Text>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.battleshipContainer}>
                        <Image style={styles.battleship} source={require('../../../media/pictures/battleship.png')} />
                    </View>
                    <View>
                        <Text style={styles.europe}>Europe</Text>
                        <Text style={styles.russian}>Russian warship: Moskva sinks in Black Sea</Text>
                    </View>
                    <View style={styles.cardNewsContainer}>
                        <View style={styles.cardNews}>
                            <Image style={styles.bbcIcon} source={require('../../../media/pictures/bbcnews.png')} />
                            <Text style={styles.bbcLabel}>BBC News</Text>
                            <Image style={styles.timeIcon} source={require('../../../media/pictures/time.png')} />
                            <Text style={styles.timeLabel}>4h ago</Text>
                        </View>
                        <View>
                            <Image source={require('../../../media/pictures/3cham.png')} />
                        </View>
                    </View>
                </View>
                <View style={styles.trendingContainer}>
                    <Text style={styles.trending}>Lasted</Text>
                    <Text style={styles.seeAll}>See all</Text>
                </View>
                <View>
                    <FlatList
                        data={categories}
                        renderItem={renderCategories}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false} />
                </View>
                <View style={styles.dataContainer}>
                    <FlatList
                        data={data}
                        renderItem={renderData}
                        keyExtractor={item => item.id}
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false} />
                </View>
            </ScrollView>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
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
        color: '#4e4b66'
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
        marginVertical: 8,
        padding: 8,
        justifyContent: 'flex-start'
    },
    dataContainer: {
        flex: 1,
        marginTop: 8
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
        marginTop: 16,
        marginEnd: 10
    },
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
        height: 20
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
    battleshipContainer: {
        elevation: 10,
        shadowColor: '#52006A',
        borderRadius: 6
    },
    battleship: {
        width: '100%',
        height: 183,
        borderRadius: 6
    },
    cardContainer: {
        padding: 8,
        marginTop: 16,
        backgroundColor: '#FFF'
    },
    seeAll: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4e4b66'
    },
    trending: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000'
    },
    trendingContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    filterIcon: {
        position: 'absolute',
        right: 10,
        top: 10,
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    searchIcon: {
        position: 'absolute',
        left: 10,
        top: 10,
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    searchInput: {
        height: 48,
        padding: 10,
        borderRadius: 6,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#4e4b66',
        paddingStart: 35,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12
    },
    searchInputContainer: {
        position: 'relative'
    },
    searchContainer: {
        marginTop: 16
    },
    bellIcon: {
        width: 18,
        height: 21.5
    },
    bellContainer: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#fff',
        elevation: 10,
        shadowColor: '#52006A'
    },
    kabarIcon: {
        width: 99,
        height: 30
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: 56
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 24,
        backgroundColor: '#fff'
    }
})

var CATEGORIES = [{
    id: 1,
    name: 'All'
}, {
    id: 2,
    name: 'Sports'
}, {
    id: 3,
    name: 'Politics'
}, {
    id: 4,
    name: 'Business'
}, {
    id: 5,
    name: 'Health'
}, {
    id: 6,
    name: 'Travel'
}, {
    id: 7,
    name: 'Science'
}, {
    id: 8,
    name: 'Fashion'
}]

var DATA = [{
    "id": 1,
    "image": "https://static.wixstatic.com/media/2f11fa_130cde4b3699412b86480e01315c1e71~mv2.png/v1/fill/w_980,h_653,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/2f11fa_130cde4b3699412b86480e01315c1e71~mv2.png",
    "category": "Giraud",
    "title": "Proin leo odio, porttitor id."
}, {
    "id": 2,
    "image": "https://asset-2.tstatic.net/kupang/foto/bank/images/Kapal-perang-terbesar-Rusia-Moskva.jpg",
    "category": "Asia",
    "title": "Fusce consequat. Nulla nisl. Nunc nisl."
}, {
    "id": 3,
    "image": "https://www.sparesinmotion.com/sites/default/files/styles/teaser/public/enercon-e40-644-e2-600kw-76m-steel-tower-from-2002-img-20220915-wa0014.webp?itok=EXuzni-4",
    "category": "Regen",
    "title": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
}, {
    "id": 4,
    "image": "https://www.news10.com/wp-content/uploads/sites/64/2022/01/227e02a354ce48eaa6f9183f538862b3.jpg?w=960&h=540&crop=1",
    "category": "Auguste",
    "title": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
}, {
    "id": 5,
    "image": "https://www.md7.com/wp-content/uploads/2019/12/Cabra_Castle_at_Night-1.jpg",
    "category": "Josi",
    "title": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
}, {
    "id": 6,
    "image": "https://demoda.vn/wp-content/uploads/2022/08/hinh-anh-bao-ve-moi-truong-dep-nhat.jpg",
    "category": "Novelia",
    "title": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
}, {
    "id": 7,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VTfyJC1TR_CSoCs22ivd2eT5ZI3U7Qt8tw&usqp=CAU",
    "category": "Cecilio",
    "title": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
}, {
    "id": 8,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGitgGK0hGHc-Y_UzDsVnkFND2ojM3ocP5ZA&usqp=CAU",
    "category": "Shalom",
    "title": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
}, {
    "id": 9,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtpndScLaxvhI7rkm0zCe1v14oTwk3moPew&usqp=CAU",
    "category": "Leola",
    "title": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
}, {
    "id": 10,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkhvciv3lHKZULMZV505XEMzKKtd2OrO-cA&usqp=CAU",
    "category": "Naraka",
    "title": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
}]