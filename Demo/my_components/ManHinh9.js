import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

const ManHinh9_1 = () => {
    return (
        <View>
            <Text>Man hinh 9.1</Text>
        </View>
    )
}

const ManHinh9_2 = () => {
    return (
        <View>
            <Text>Man hinh 9.2</Text>
        </View>
    )
}

const ManHinh9 = () => {
    const [change, setChange] = useState(false)
    return (
        <View>
            <Text>ManHinh9</Text>
            {
                change ? <ManHinh9_1 /> : <ManHinh9_2 />
            }
            <Button title="Change"
                onPress={() => setChange(!change)} />
        </View>
    )
}

export default ManHinh9

const styles = StyleSheet.create({})