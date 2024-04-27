import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ManHinh6 = (props) => {
    const { children } = props
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.view1}></View>
                <View style={styles.view2}></View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.view5}></View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={styles.view3}></View>
                <View style={styles.view4}></View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    view1: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    view2: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow'
    },
    view3: {
        width: 50,
        height: 50,
        backgroundColor: 'green'
    },
    view4: {
        width: 50,
        height: 50,
        backgroundColor: 'pink'
    },
    view5: {
        width: 50,
        height: 50,
        backgroundColor: 'black',
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
        justifyContent: 'space-between'
    }
})

export default ManHinh6