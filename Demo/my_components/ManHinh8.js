import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ManHinh8 = () => {
    return (
        <View>
            <Text>ManHinh8</Text>
            <Text>ManHinh8</Text>
            <Text>ManHinh8</Text>
            <Text>ManHinh8</Text>
            <Text>ManHinh8</Text>
            <Text>ManHinh8</Text>
            <Text>ManHinh8</Text>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                {/* <Text>
                    insert into MOCK_DATA (name) values ('In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

                    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

                    Sed ante. Vivamus tortor. Duis mattis egestas metus.');
                    insert into MOCK_DATA (name) values ('In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

                    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.');
                    insert into MOCK_DATA (name) values ('Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

                    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.');
                    insert into MOCK_DATA (name) values ('Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

                    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.');
                    insert into MOCK_DATA (name) values ('Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.');
                    insert into MOCK_DATA (name) values ('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

                    Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.');
                    insert into MOCK_DATA (name) values ('Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

                    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

                    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.');
                    insert into MOCK_DATA (name) values ('Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

                    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.');
                    insert into MOCK_DATA (name) values ('Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.');
                    insert into MOCK_DATA (name) values ('Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.');
                    insert into MOCK_DATA (name) values ('In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.');
                    insert into MOCK_DATA (name) values ('In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

                    Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

                    Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.');
                    insert into MOCK_DATA (name) values ('Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.');
                    insert into MOCK_DATA (name) values ('Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

                    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.');
                    insert into MOCK_DATA (name) values ('Sed ante. Vivamus tortor. Duis mattis egestas metus.');
                    insert into MOCK_DATA (name) values ('Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

                    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

                    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.');
                    insert into MOCK_DATA (name) values ('Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.');
                    insert into MOCK_DATA (name) values ('Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.');
                    insert into MOCK_DATA (name) values ('Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

                    Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

                    Phasellus in felis. Donec semper sapien a libero. Nam dui.');
                    insert into MOCK_DATA (name) values ('Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

                    Sed ante. Vivamus tortor. Duis mattis egestas metus.

                    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.');
                </Text> */}
                {
                    DATA.map((item, index) => {
                        return (
                            <View key={index}>
                                <Text>{item.title}</Text>
                                <Text>{item.category}</Text>
                                <Text>{item.image}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default ManHinh8

const styles = StyleSheet.create({})
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