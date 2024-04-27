import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Modal, ToastAndroid } from 'react-native'
import React, { useState, useCallback } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { uploadIamge } from '../newsHttp';
import { createNew } from '../newsHttp';
const AddNew = (props) => {
    const { navigation } = props
    const [modelVisible, setModelVisible] = useState(false);
    const [image, setImage] = useState(null);
    const [imagePath, setImagePath] = useState(null);
    const [title, setTitle] = useState('Quyet Dep Trai');
    const [content, setContent] = useState('Pho is renowned for its aromatic and flavorful qualities. The broth, often prepared by simmering beef bones and aromatic spices for hours, imparts a rich and hearty aroma. The combination of ingredients such as star anise, cinnamon, and cloves contributes to a warm and slightly sweet scent. When served, the fragrance of the broth combines with the fresh herbs, lime, and bean sprouts garnishing the dish, creating a complex and inviting olfactory experience that is characteristic of Pho.');
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
        }
    }
    return (
        <View style={{ backgroundColor: '#FFFFFF', height: '100%', width: '100%', alignItems: 'center' }}>
            <View style={{ flex: 0.5, height: 40, width: '100%', alignItems: 'center', justifyContent: 'space-between', }}>
                <View style={{ height: '100%', width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../../media/imgae/Back.png')} style={{ marginStart: 10 }} />
                    </TouchableOpacity>
                    <Text>Create New</Text>
                    <TouchableOpacity>
                        <Image source={require('../../../media/imgae/ThreeDot.png')} style={{ marginEnd: 5 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                // mở Modal
                onPress={OpenModal}

                style={{ flex: 2, height: 183, width: 380, backgroundColor: '#EEF1F4', borderStyle: 'dashed', borderWidth: 2, borderColor: '#4E4B66', alignItems: 'center', justifyContent: 'center' }}>
                {image ? <Image style={{ height: '100%', width: '100%' }} source={{ uri: image }} /> :
                    <View style={{ alignItems: 'center', }}>
                        <Text style={{ color: 'black' }}>+</Text>
                        <Text style={{ color: 'black' }}>Add Cover Photo</Text>
                    </View>}
            </TouchableOpacity>
            <View style={{ flex: 0.5, height: 46, width: 380, borderBottomWidth: 1 }}>
                <TextInput value={title} style={{ fontSize: 24 }} placeholder='New title' placeholderTextColor={'black'}></TextInput>
            </View>
            <View style={{ flex: 3, height: 'auto', width: 380, }}>
                <TextInput value={content} placeholder='Add News/Article' placeholderTextColor={'black'} multiline
                    numberOfLines={5} style={{ width: '100%', height: 'auto', }}></TextInput>
            </View>
            <View style={{ flex: 0.5, backgroundColor: 'gray', height: 78, width: '100%', flexDirection: 'row', alignItems: 'center', }}>
                <View style={{ width: '50%', flexDirection: 'row', marginStart: 15, justifyContent: 'space-between' }}>
                    <Image source={require('../../../media/imgae/Text.png')} />
                    <Image source={require('../../../media/imgae/MenuText.png')} />
                    <Image source={require('../../../media/imgae/ImageText.png')} />
                    <Image source={require('../../../media/imgae/DotText.png')} />
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
                            <Image source={require('../../../media/imgae/X.png')} style={{ margin: 5 }} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
                            <TouchableOpacity onPress={openCamera} style={{ alignItems: 'center', backgroundColor: '#00F5FF', borderRadius: 20, padding: 20 }}>
                                <Image style={{ height: 50, width: 60 }} source={require('../../../media/imgae/ImageText.png')} />
                                <Text style={{ color: 'white', fontWeight: 600, fontSize: 16 }}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={openLibrary} style={{ alignItems: 'center', backgroundColor: '#00F5FF', borderRadius: 20, padding: 20 }}>
                                <Image style={{ height: 50, width: 60 }} source={require('../../../media/imgae/ImageText.png')} />
                                <Text style={{ color: 'white', fontWeight: 600, fontSize: 16 }}>Album</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>


        </View>
    )
}

export default AddNew

const styles = StyleSheet.create({})