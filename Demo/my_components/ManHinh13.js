import { StyleSheet, Text, View, Modal, TouchableOpacity, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { uploadIamge } from '../src/components/news/NewsHTTP'

const ManHinh13 = (props) => {
    //ẩn hiện modal
    const [show, setShow] = useState(false);
    const [imagePath, setImagePath] = useState(null);
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onPress = () => {
        setShow(true)
    }

    const takePhoto = useCallback(async (response) => {
        if (response.didCancel) return;
        if (response.errorCode) return;
        if (response.errorMessage) return;
        if (response.assets && response.assets.length > 0) {
            const asset = response.assets[0];
            setImage(asset.uri);
            setShow(false);
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

    const openCamera = useCallback(async () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            saveToPhotos: true
        };
        await launchCamera(options, takePhoto);
    }, []);

    const openLibrary = useCallback(async () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            saveToPhotos: true
        };
        await launchImageLibrary(options, takePhoto);
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}>
                <Text style={{ fontSize: 30, color: 'red' }}>Mở modal</Text>
            </TouchableOpacity>
            {
                image && <Image style={{ width: 200, height: 200 }} source={{ uri: image }} />
            }
            <Modal
                animationType='slide'
                transparent={true}
                visible={show}
                onRequestClose={() => {
                    setShow(false)
                }}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={() => {
                            setShow(false);
                        }}>
                            <Text>
                                Đóng modal
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openCamera}>
                            <Text style={{ fontSize: 30 }}>
                                Chụp ảnh
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openLibrary}>
                            <Text style={{ fontSize: 30 }}>
                                Chọn ảnh
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ManHinh13

const styles = StyleSheet.create({
    modalContent: {
        width: '100%',
        height: '70%',
        backgroundColor: 'white',
        borderRadius: 20
    },
    modalContainer: {
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})