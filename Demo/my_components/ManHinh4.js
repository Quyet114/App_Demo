import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const ManHinh4 = (props) => {
    const { number, setNumber } = props
    const { setKetQua, ten, tuoi, diem } = props; //đọc từ màn hình 2 qua
    const [heSoA, setHeSoA] = useState(undefined);
    const [heSoB, setHeSoB] = useState(undefined);
    const [heSoC, setHeSoC] = useState(undefined)
    // const [ketQua, setKetQua] = useState(undefined)
    const { ketQua } = props
    const { result } = props

    const giaiPhuongTrinhBac2 = () => {
        const delta = heSoB * heSoB - 4 * heSoA * heSoC;
        if (delta > 0) {
            const x1 = (-heSoB + Math.sqrt(delta)) / 2 * heSoA
            const x2 = (-heSoB - Math.sqrt(delta)) / 2 * heSoA
            setKetQua(`Phương trình có 2 nghiệm:\nx1 = ${Math.round(x1)}\nx2 = ${Math.round(x2)}`)
        } else if (delta < 0) {
            setKetQua('Phương trình vô nghiệm')
        } else if (delta === 0) {
            const x = -heSoB / (2 * heSoA)
            setKetQua(`Phương trình có nghiệm kép\nx1 = x2 = ${x}`)
        }
    }
    return (
        <View style={{ backgroundColor: 'blue', width: '100%', height: '30%' }}>
            <Text style={{ fontSize: 25 }}>ManHinh4</Text>
            {/* <TextInput
                style={{ height: 40, backgroundColor: 'white' }}
                onChangeText={text => setHeSoA(text)}
                value={heSoA}
                placeholder='Nhập hệ số a'
                keyboardType='numeric'
            />
            <TextInput
                style={{ height: 40, backgroundColor: 'white' }}
                onChangeText={text => setHeSoB(text)}
                value={heSoB}
                placeholder='Nhập hệ số b'
                keyboardType='numeric'
            />
            <TextInput
                style={{ height: 40, backgroundColor: 'white' }}
                onChangeText={text => setHeSoC(text)}
                value={heSoC}
                placeholder='Nhập hệ số c'
                keyboardType='numeric'
            />
            <Button
                title='Giải phương trình bậc 2'
                onPress={giaiPhuongTrinhBac2}
            /> */}
            {/* <Text style={{ fontSize: 25 }}>{ketQua}</Text> */}
            {/* <Text>{ten}</Text>
            <Text>{tuoi}</Text>
            <Text>{diem}</Text>
            <Button
                title='Tăng'
                onPress={() => {
                    setNumber(number + 1)
                }} /> */}
            {/* <Text style={{ fontSize: 22 }}>Tên trúng thưởng: {ketQua}</Text> */}
            <Text>{result}</Text>
        </View>
    )
}

export default ManHinh4