import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Alert,
    ActivityIndicator,
    Image, StatusBar
} from 'react-native';
import firebase from "firebase";
import '@react-native-firebase/firestore';
import bg from "../images/bg1.jpg"

const { width: WIDTH } = Dimensions.get('window');



export default class OgrenciGiris extends React.Component {

    constructor(props) {
        super(props)
        this.state = ({
            email: '',
            password: '',
            isLoading: false,
            error: '',
        })
    }



    userLogin = () => {
        if (this.state.email == "" || this.state.password == "") {
            Alert.alert('Giriş İçin Gerekli Yerleri Doldurun Lütfen')
        }
        else {
            this.setState({
                isLoading: true,
            })
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    //console.log(res)
                    Alert.alert('Kullanıcı Girişi Başarılı!  ')
                    this.setState({
                        isLoading: false,
                        email: '',
                        password: ''
                    })
                    this.props.navigation.navigate('OgrenciAnaSayfa')
                })
                .catch((res) => {
                    this.setState({
                        isLoading: false,
                    })
                    Alert.alert("Kullanıcı Girişi Başarısız!")
                })
        }

    }





    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                <Image style={styles.bgImage} source={bg} />
                <View style={styles.baslikInfo}>
                    <Text style={styles.baslik}>ÖĞRENCİ GİRİŞ EKRANI</Text>
                </View>
                <TextInput style={styles.textInput}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder="Mail Adresiniz"
                    placeholderTextColor="#FFF"
                    keyboardType='email-address'
                />
                <TextInput style={styles.textInput}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder="Şifreniz"
                    placeholderTextColor="#FFF"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.girisButon}
                    onPress={() => this.userLogin()}>
                    <Text style={styles.text}>Giriş Yap</Text>
                </TouchableOpacity>


                <View style={styles.hizalama}>
                    <TouchableOpacity style={styles.toucable}
                        onPress={() => this.props.navigation.navigate('AnaSayfa')}>
                        <Text style={styles.text}>Geri</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toucable}
                        onPress={() => this.props.navigation.navigate('OgrenciKayit')}>
                        <Text style={styles.text}>Kayıt Ol</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#AEB6BF'
    },
    toucable: {
        width: 180,
        height: 100,
        backgroundColor: '#041801',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderColor: '#FFF',
        borderWidth: 2,
        opacity: 0.8
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
    baslikInfo: {
        flex: 1.2,
        marginTop: 70
    },
    hizalama: {
        flex: 1.1,
        flexDirection: 'row',
    },
    baslik: {
        alignItems: 'center',
        fontSize: 30,
        color: '#B1B8B1',
        opacity: 0.9
    },
    textInput: {
        height: 40,
        borderBottomWidth: 2,
        color: 'white',
        borderColor: 'black',
        marginTop: 21,
        borderRadius: 10,
        width: WIDTH - 140,
        fontSize: 17
    },
    girisButon: {
        width: 150,
        height: 80,
        backgroundColor: '#041801',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 48,
        borderRadius: 20,
        borderColor: '#FFF',
        borderWidth: 3,
        opacity: 0.8
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
});




