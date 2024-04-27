import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useContext, createContext } from 'react'

//Tạo kho chứa data chung của app
const AppContext = createContext();

const AppContextProvider = (props) => {
    // const { children } = props
    const [input, setInput] = useState(0)
    return (
        <AppContext.Provider
            value={{ input, setInput }}>
            {props.children}
            {/* {children} */}
        </AppContext.Provider>
    )
}

const ManHinh12_1 = (props) => {
    const { input } = useContext(AppContext)
    return (
        <View>
            <Text style={{ fontSize: 30 }}>{input}</Text>
        </View>
    )
}

const ManHinh12_2 = (props) => {
    const { input, setInput } = useContext(AppContext)
    return (
        <View>
            <Button title='Change input'
                onPress={() => setInput(input + 1)}
                style={{ fonSize: 30 }} />
        </View>
    )
}

const ManHinh12 = () => {
    return (
        <AppContextProvider>
            <View>
                <ManHinh12_1 />
                <ManHinh12_2 />
            </View>
        </AppContextProvider>
    )
}

export default ManHinh12

const styles = StyleSheet.create({})