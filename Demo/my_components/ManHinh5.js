import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'


const ManHinh5 = (props) => {
    const { children } = props
    return (
        //style nào viết sau sẽ lấy style đó
        <View style={[styles.container, styles.color]}>
            <Text style={styles.text}>Màn hình 5</Text>
            <TextInput style={styles.textInput} />
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonLabel}>Press Here</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonContainer: {
        width: 300,
        height: 50,
        borderRadius: 5,
        backgroundColor: 'blue'
    },
    textInput: {
        width: 330,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        margin: 20,
        padding: 10
    },
    text: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        margin: 20,
        backgroundColor: 'green',
        textAlign: 'center',
        padding: 10,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: 'red'
    },
    color: {
        backgroundColor: 'yellow'
    },
    container: {
        backgroundColor: 'yellow',
        width: '100%',
        height: '100%'
    }
})

export default ManHinh5