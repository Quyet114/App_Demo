import { FlatList, StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'

const ManHinh7 = (props) => {
    const [data, setData] = useState(DATA);
    const [categories, setCategories] = useState(CATEGORIES);
    //chỉ số của item dc chọn
    const [indexPress, setIndexPress] = useState(0)
    const renderItem = (val) => {
        const { id, image, category, title } = val.item;
        return (
            <View style={styles.item}>
                <View>
                    <Image style={styles.image}
                        source={{ uri: image }} />
                </View>
                <View style={styles.content}>
                    <Text>{category}</Text>
                    <Text numberOfLines={2}>{title}</Text>
                </View>
            </View>
        )
    }
    const renderCategory = (val) => {
        const { id, name } = val.item;
        const onSelectItem = () => {
            setIndexPress(id)
        }
        return (
            <View>
                <Pressable onPress={onSelectItem}>
                    <Text style={[styles.text, id.toString() == indexPress.toString() ? styles.backgroundne : null]}>{name}</Text>
                    <View style={id.toString() == indexPress.toString() ? styles.bottomBorder : null}></View>
                </Pressable>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={CATEGORIES}
                renderItem={renderCategory}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false} />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false} />
        </View>
    )
}

export default ManHinh7

const styles = StyleSheet.create({
    content: {
        margin: 8,
        backgroundColor: 'red',
        padding: 8,
        flex: 1
    },
    image: {
        width: 96,
        height: 96,
        borderRadius: 6
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 8,
        padding: 8
    },
    backgroundne: {
        width: '100%',
        backgroundColor: 'red',
        color: 'yellow'
    },
    bottomBorder: {
        borderBottomColor: 'yellow',
        borderWidth: 2,
        marginHorizontal: 8
    },
    text: {
        fontSize: 18,
        margin: 8
    }
})

var CATEGORIES = [{
    id: 1,
    name: 'Danh muc 1'
},
{
    id: 2,
    name: 'Danh muc 2'
},
{
    id: 3,
    name: 'Danh muc 3'
},
{
    id: 4,
    name: 'Danh muc 4'
},
{
    id: 5,
    name: 'Danh muc 5'
},
{
    id: 6,
    name: 'Danh muc 6'
},
{
    id: 7,
    name: 'Danh muc 7'
},]

var DATA = [{
    "id": 1,
    "image": "http://dummyimage.com/159x100.png/dddddd/000000",
    "category": "Giraud",
    "title": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
}, {
    "id": 2,
    "image": "http://dummyimage.com/240x100.png/5fa2dd/ffffff",
    "category": "Asia",
    "title": "Fusce consequat. Nulla nisl. Nunc nisl."
}, {
    "id": 3,
    "image": "http://dummyimage.com/171x100.png/ff4444/ffffff",
    "category": "Regen",
    "title": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
}, {
    "id": 4,
    "image": "http://dummyimage.com/174x100.png/5fa2dd/ffffff",
    "category": "Auguste",
    "title": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
}, {
    "id": 5,
    "image": "http://dummyimage.com/190x100.png/cc0000/ffffff",
    "category": "Josi",
    "title": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
}, {
    "id": 6,
    "image": "http://dummyimage.com/179x100.png/cc0000/ffffff",
    "category": "Novelia",
    "title": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
}, {
    "id": 7,
    "image": "http://dummyimage.com/102x100.png/5fa2dd/ffffff",
    "category": "Cecilio",
    "title": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
}, {
    "id": 8,
    "image": "http://dummyimage.com/109x100.png/5fa2dd/ffffff",
    "category": "Shalom",
    "title": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
}, {
    "id": 9,
    "image": "http://dummyimage.com/151x100.png/ff4444/ffffff",
    "category": "Leola",
    "title": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
}, {
    "id": 10,
    "image": "http://dummyimage.com/128x100.png/dddddd/000000",
    "category": "Gregory",
    "title": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
}, {
    "id": 11,
    "image": "http://dummyimage.com/236x100.png/cc0000/ffffff",
    "category": "Linet",
    "title": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
}, {
    "id": 12,
    "image": "http://dummyimage.com/211x100.png/dddddd/000000",
    "category": "Red",
    "title": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
}, {
    "id": 13,
    "image": "http://dummyimage.com/188x100.png/dddddd/000000",
    "category": "Kendrick",
    "title": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
}, {
    "id": 14,
    "image": "http://dummyimage.com/146x100.png/5fa2dd/ffffff",
    "category": "Arnoldo",
    "title": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
    "id": 15,
    "image": "http://dummyimage.com/181x100.png/ff4444/ffffff",
    "category": "Elfie",
    "title": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
}, {
    "id": 16,
    "image": "http://dummyimage.com/209x100.png/5fa2dd/ffffff",
    "category": "Camila",
    "title": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
}, {
    "id": 17,
    "image": "http://dummyimage.com/148x100.png/5fa2dd/ffffff",
    "category": "Berny",
    "title": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
}, {
    "id": 18,
    "image": "http://dummyimage.com/126x100.png/dddddd/000000",
    "category": "Gayel",
    "title": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
}, {
    "id": 19,
    "image": "http://dummyimage.com/126x100.png/ff4444/ffffff",
    "category": "Artemas",
    "title": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
}, {
    "id": 20,
    "image": "http://dummyimage.com/240x100.png/ff4444/ffffff",
    "category": "Fayre",
    "title": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
}]