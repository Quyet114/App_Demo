import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const ManHinh1 = (props) => {
    const { children, ho_ten, tuoi, ham } = props
    //children là props mặc định của React
    const [names, setNames] = useState(['Nguyen Van A',
        'Nguyen Van B', 'Nguyen Van C',
        'Nguyen Van D', 'Nguyen Van E'])
    const [name, setName] = useState(null)
    const [luckyIndex, setLuckyIndex] = useState(-1)

    const quaySoMayMan = () => {
        let randomIndex = Math.floor(Math.random() * names.length)
        setName(names[randomIndex])
        setLuckyIndex(randomIndex)
    }

    const onButtonPress = () => {
        setName('Nguyen Van B')
        console.log('>>>>>>>> setName')
    }

    //danh sách sản phẩm
    const [cart, setCart] = useState([
        { id: 1, name: 'iPhone X', price: 1000, quantity: 1 },
        { id: 2, name: 'iPhone 11', price: 2000, quantity: 3 },
        { id: 3, name: 'iPhone 12', price: 1500, quantity: 2 },
        { id: 4, name: 'iPhone 13', price: 2100, quantity: 5 },
        { id: 5, name: 'iPhone 14', price: 2200, quantity: 4 }
    ])

    const total = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price * cart[i].quantity
        }
        return total;
    }
    return (
        <View>
            {/* <Text>{children}</Text> */}
            <Text>{ho_ten}</Text>
            <Text>{tuoi}</Text>
            <Text>{ham}</Text>
            <Text style={{ fontSize: 22 }}>Tên trúng thưởng: {name}</Text>
            <Text style={{ fontSize: 22 }}>Danh sách tên: </Text>
            {
                names.map((item, index) => {
                    return <Text style={{ fontSize: luckyIndex === index ? 30 : 15 }}
                        key={index}>{item}</Text>
                })
            }
            <Text style={{ fontSize: 22 }}>Danh sách sản phẩm: </Text>
            {
                cart.map((product, index) => {
                    const { id, name, price, quantity } = product
                    return (
                        <View>
                            {/* <Text key={index}>{product.id} - {product.name} - {product.price} - {product.quantity}</Text> */}
                            <Text key={index}>{id} - {name} - {price} - {quantity}</Text>
                        </View>
                    )
                })
            }

            <Text>{total()}</Text>

            <Button
                title='Quay số'
                //callback
                onPress={quaySoMayMan} />
        </View>
    )
}

export default ManHinh1
/**
 * Dữ liệu component
 * 1. State: dữ liệu thay đổi trong component
 * useState: hooks
 * 2. Props (Object): dữ liệu truyền từ component cha sang component con
 */