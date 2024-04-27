import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import ManHinh1 from './ManHinh1'
import ManHinh2 from './ManHinh2'
import ManHinh4 from './ManHinh4'

const ManHinh3 = (props) => {
    const { number } = props
    const { ketQua } = props
    const [luckyIndex, setLuckyIndex] = useState(-1)
    const [names, setNames] = useState(['Nguyen Van A',
        'Nguyen Van B', 'Nguyen Van C',
        'Nguyen Van D', 'Nguyen Van E'])
    const { danhSach } = props
    const [name, setName] = useState(null)
    const { so1, so2, so3, setResult } = props
    const [soQuayDuoc, setSoQuayDuoc] = useState(undefined)
    const handlePress = () => {
        const num_1 = Math.floor(Math.random() * 90) + 1;
        const num_2 = Math.floor(Math.random() * 90) + 1;
        const num_3 = Math.floor(Math.random() * 90) + 1;
        setSoQuayDuoc(`${num_1}-${num_2}-${num_3}`)
        if (so1 == num_1 && so2 == num_2 && so3 == num_3) {
            setResult('Bạn đã trúng thưởng')
        } else {
            setResult('Chúc bạn may mắn lần sau')
        }
    }
    return (
        <View style={{ backgroundColor: 'red', width: '100%', height: '30%' }}>
            <Text style={{ fontSize: 25 }}>ManHinh3</Text>
            <Text>{soQuayDuoc}</Text>
            {/* <Text style={{ fontSize: 50 }}>{number}</Text> */}
            {/* <Text style={{ fontSize: 25 }}>{ketQua}</Text> */}
            {/* <Text style={{ fontSize: 22 }}>Danh sách tên: </Text>
            {
                names.map((item, index) => {
                    return <Text style={{ fontSize: luckyIndex === index ? 30 : 15 }}
                        key={index}>{item}</Text>
                })
            } */}
            <Button
                title='Quay số may mắn'
                onPress={handlePress} />
        </View>
    )
}

export default ManHinh3