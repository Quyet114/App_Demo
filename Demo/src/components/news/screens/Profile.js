import {
  Image, StyleSheet, Text, View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Modal
} from 'react-native'
import React, { useState, useContext, useCallback } from 'react'
import { UserContext } from '../../user/UserContext'
import { updateProfile } from '../NewsHTTP'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { uploadIamge } from '../NewsHTTP';

const Profile = (props) => {
  const { navigation } = props
  const { user } = useContext(UserContext)
  const [modelVisible, setModelVisible] = useState(false);
  const { setUser } = useContext(UserContext)
  const [address, setAddress] = useState(user.address)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(user.phone)
  const [bio, setBio] = useState('')
  const [website, setWebsite] = useState('')
  const [avatar, setAvatar] = useState('')
  const [image, setImage] = useState(null);
  const [imagePath, setImagePath] = useState(null);

  const handleUpdateProfile = async () => {
    try {
      const result = await updateProfile(name, address, phone, avatar)
      console.log('>>>>result', result);
      setUser(result.data)
      Alert.alert('Thông báo', 'Update profile thành công')
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  }

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
      setAvatar(asset.uri);
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
      setAvatar(null);
      setTitle(null);
      setContent(null);

    } catch (error) {
      console.log(error)
      console.log('>>>>>>>title', title);
      console.log('>>>>>>>content', content);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.profileContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: 24 }}>
          <View style={styles.backContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile2')}>
              <Image source={require('../../../media/pictures/close.png')} />
            </TouchableOpacity>
            <Text style={[styles.fs16fw600lh24, styles.cl000]}>Edit Profile</Text>
            <TouchableOpacity
              onPress={() => handleUpdateProfile()}
            >
              <Image source={require('../../../media/pictures/check.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.avatarContainer}>
            {
              avatar ? <View>
                <Image style={{ width: 140, height: 140, borderRadius: 140 }}
                  source={{ uri: avatar }} />
              </View> : <View style={styles.avatar}></View>
            }
            <TouchableOpacity
              onPress={OpenModal}
              style={styles.camera}>
              <Image
                style={{ width: 16, height: 16 }}
                source={require('../../../media/pictures/camera.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.usernameContainer}>
            <Text style={[styles.fs14fw400lh21, styles.cl4e4b66]}>Username</Text>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder='Nhập Username'
              style={styles.usernameInput} />
          </View>
          <View style={styles.usernameContainer}>
            <Text style={[styles.fs14fw400lh21, styles.cl4e4b66]}>Full Name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder='Nhập Fullname'
              style={styles.usernameInput} />
          </View>
          <View style={styles.usernameContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.fs14fw400lh21, styles.cl4e4b66]}>Email Address</Text>
              <Text style={{ color: 'red' }}>*</Text>
            </View>
            <TextInput
              value={user.email}
              onChangeText={setEmail}
              placeholder='Nhập Email'
              style={styles.usernameInput} />
          </View>
          <View style={styles.usernameContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.fs14fw400lh21, styles.cl4e4b66]}>Phone Number</Text>
              <Text style={{ color: 'red' }}>*</Text>
            </View>
            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder='Nhập Phone Number'
              style={styles.usernameInput} />
          </View>
          <View style={styles.usernameContainer}>
            <Text style={[styles.fs14fw400lh21, styles.cl4e4b66]}>Address</Text>
            <TextInput
              value={address}
              onChangeText={setAddress}
              style={styles.usernameInput} />
          </View>
          <View style={styles.usernameContainer}>
            <Text style={[styles.fs14fw400lh21, styles.cl4e4b66]}>Website</Text>
            <TextInput
              value={user.name}
              onChangeText={null}
              style={styles.usernameInput} />
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
      </ScrollView >
    </KeyboardAvoidingView>
  )
}

export default Profile

const styles = StyleSheet.create({
  clfff: {
    color: '#fff'
  },
  buttonContainer: {
    backgroundColor: '#1877f2',
    padding: 13,
    borderRadius: 6,
    alignItems: 'center'
  },
  nextContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    elevation: 1,
    height: 130,
    borderTopWidth: 0.2,
    borderColor: '#4e4b66',
    padding: 24
  },
  usernameInput: {
    borderWidth: 1,
    marginTop: 4,
    borderRadius: 6,
    backgroundColor: '#fff',
    borderColor: '#4e4b66',
    padding: 10,
    height: 48,
    color: '#000'
  },
  usernameContainer: {
    marginVertical: 6
  },
  fs14fw400lh21: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12
  },
  camera: {
    width: 30,
    height: 30,
    backgroundColor: '#1877f2',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 195
  },
  avatar: {
    borderRadius: 140,
    width: 140,
    height: 140,
    backgroundColor: '#EEF1F4'
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 16,
    position: 'relative'
  },
  cl4e4b66: {
    color: '#4e4b66'
  },
  cl1877f2: {
    color: '#1877f2'
  },
  cl000: {
    color: '#000'
  },
  fs16fw600lh24: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profileContainer: {
    flex: 1,
    backgroundColor: 'white'
  }
})