import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Modal, ToastAndroid, ScrollView } from 'react-native'
import React, { useState, useCallback } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { uploadIamge } from '../NewsHTTP';
import { createNew } from '../NewsHTTP';

const CreateNew = (props) => {
    const { navigation } = props
    const [modelVisible, setModelVisible] = useState(false);
    const [image, setImage] = useState(null);
    const [imagePath, setImagePath] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    //Tắt mở Modal
    const OpenModal = () => {
        setModelVisible(true);
    };
    // Mở camera
    const openCamera = useCallback(async () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            saveToPhotos: true,
        };
        await launchCamera(options, takePhoto);
    }, []);
    // Mở Library
    const openLibrary = useCallback(async () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            saveToPhotos: true,
        };
        await launchImageLibrary(options, takePhoto);
    }, []);

    const takePhoto = useCallback(async (response) => {
        if (response.didCancel) return;
        if (response.errorCode) return;
        if (response.errorMessage) return;
        if (response.assets && response.assets.length > 0) {
            const asset = response.assets[0];
            setImage(asset.uri);
            setModelVisible(false);
            // upload image
            const formData = new FormData();
            formData.append('image', {
                uri: asset.uri,
                type: asset.type,
                name: asset.fileName,
            });
            const result = await uploadIamge(formData);
            console.log('>>>>>upload image: ', result.data.path);
            setImagePath(result.data.path);
        }
    }, []);

    const Publish = async () => {
        try {
            const result = await createNew(title, content, imagePath);
            console.log(result);
            ToastAndroid.show('Successfuly', ToastAndroid.SHORT)
            setImage(null);
            setTitle(null);
            setContent(null);

        } catch (error) {
            console.log(error)
            console.log('>>>>>>>title', title);
            console.log('>>>>>>>content', content);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ padding: 24 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../../../media/pictures/back.png')} />
                        </TouchableOpacity>
                        <Text style={[styles.fs16fw400lh24ls012, { color: '#000' }]}>Create New</Text>
                        <TouchableOpacity>
                            <Image source={require('../../../media/pictures/morever.png')} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        // mở Modal
                        onPress={OpenModal}
                        style={{
                            marginTop: 16,
                            height: 183,
                            backgroundColor: '#EEF1F4',
                            borderStyle: 'dashed', borderWidth: 2,
                            borderColor: '#4E4B66',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 6
                        }}>
                        {image ? <Image style={{ height: '100%', width: '100%' }} source={{ uri: image }} /> :
                            <View style={{ alignItems: 'center', }}>
                                <Text style={{ color: 'black' }}>+</Text>
                                <Text style={{ color: 'black' }}>Add Cover Photo</Text>
                            </View>}
                    </TouchableOpacity>
                    <View style={{ borderBottomWidth: 1, marginTop: 16, borderColor: '#c4c4c4' }}>
                        <TextInput
                            value={title}
                            onChangeText={setTitle}
                            style={{ fontSize: 24 }} placeholder='News title'
                            placeholderTextColor={'#c4c4c4'}></TextInput>
                    </View>
                    <View style={{ flex: 1, height: 'auto' }}>
                        <TextInput
                            value={content}
                            onChangeText={setContent}
                            placeholder='Add News/Article' placeholderTextColor={'#c4c4c4'} multiline
                            numberOfLines={5} style={{ textAlign: 'justify', width: '100%', height: 'auto', }}></TextInput>
                    </View>
                </View>
            </ScrollView>
            <View style={{ height: 78, width: '100%', flexDirection: 'row', alignItems: 'center', borderTopWidth: 1 }}>
                <View style={{ width: '50%', flexDirection: 'row', marginStart: 15, justifyContent: 'space-between' }}>
                    <Image source={require('../../../media/pictures/a.png')} />
                    <Image source={require('../../../media/pictures/alignleft.png')} />
                    <Image source={require('../../../media/pictures/image.png')} />
                    <Image source={require('../../../media/pictures/morehor.png')} />
                </View>
                <View style={{ width: '50%', alignItems: 'flex-end', paddingEnd: 30 }}>
                    <TouchableOpacity onPress={Publish} style={{ width: '50%', alignItems: 'center', backgroundColor: 'blue', height: 50, borderRadius: 10, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 600 }}>Publish</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal animationType='slide'
                transparent={true}
                visible={modelVisible}
                onRequestClose={() => {
                    setModelVisible(false);
                }}>
                <View style={{ justifyContent: 'flex-end', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.3)', padding: 20 }}>
                    <View style={{ height: '30%', width: '100%', backgroundColor: '#F8F8FF', borderRadius: 20 }}>
                        <TouchableOpacity onPress={() => {
                            setModelVisible(false)
                        }} style={{ alignItems: 'flex-end', height: 50 }}>
                            <Image source={require('../../../media/pictures/close.png')} style={{ margin: 5 }} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
                            <TouchableOpacity onPress={openCamera} style={{ alignItems: 'center', backgroundColor: '#00F5FF', borderRadius: 20, padding: 20 }}>
                                <Image style={{ height: 50, width: 60 }} source={require('../../../media/pictures/a.png')} />
                                <Text style={{ color: 'white', fontWeight: 600, fontSize: 16 }}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={openLibrary} style={{ alignItems: 'center', backgroundColor: '#00F5FF', borderRadius: 20, padding: 20 }}>
                                <Image style={{ height: 50, width: 60 }} source={require('../../../media/pictures/image.png')} />
                                <Text style={{ color: 'white', fontWeight: 600, fontSize: 16 }}>Album</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default CreateNew

const styles = StyleSheet.create({
    fs16fw400lh24ls012: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0.12
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    }
})