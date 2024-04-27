import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import ManHinh3 from './ManHinh3';
import ManHinh4 from './ManHinh4';

const ManHinh2 = (props) => {
    const { children } = props;
    const [number, setNumber] = useState(0);
    const [ketQua, setKetQua] = useState(undefined);
    const [so1, setSo1] = useState(undefined);
    const [so2, setSo2] = useState(undefined);
    const [so3, setSo3] = useState(undefined);
    const [result, setResult] = useState(undefined)
    const [sinhVien, setSinhVien] = useState({
        ten: 'Nguyen Van A',
        tuoi: 20,
        diem: 8
    })
    const quaySoMayMan = () => {
        let randomIndex = Math.floor(Math.random() * names.length)
        setName(names[randomIndex])
        setLuckyIndex(randomIndex)
    }
    return (
        <View style={{ backgroundColor: 'yellow', width: '100%' }}>
            <Text style={{ fontSize: 25 }}>ManHinh2</Text>
            {/* <Button
                title='Quay số'
                //callback
                onPress={quaySoMayMan} /> */}
            <TextInput
                style={{ height: 40, backgroundColor: 'white' }}
                onChangeText={text => setSo1(text)}
                value={so1}
                placeholder='Nhập số thứ 1'
                keyboardType='numeric'
            />
            <TextInput
                style={{ height: 40, backgroundColor: 'white' }}
                onChangeText={text => setSo2(text)}
                value={so2}
                placeholder='Nhập số thứ 2'
                keyboardType='numeric'
            />
            <TextInput
                style={{ height: 40, backgroundColor: 'white' }}
                onChangeText={text => setSo3(text)}
                value={so3}
                placeholder='Nhập số thứ 3'
                keyboardType='numeric'
            />
            <ManHinh3
                // number={number}
                ketQua={ketQua}
                so1={so1}
                so2={so2}
                so3={so3}
                setResult={setResult} />
            <ManHinh4
                // number={number}
                // setNumber={setNumber}
                {...sinhVien}
                // ten={sinhVien.ten}
                // tuoi={sinhVien.tuoi}
                // diem={sinhVien.diem}
                setKetQua={setKetQua}
                result={result} />
        </View>
    )
}

export default ManHinh2
/**
 * MH1: 3 ô TextInput nhập số
 * MH2: 1 nút bấm quay số
 * MH3: 1 ô Text hiển thị kết quả quay số
 */