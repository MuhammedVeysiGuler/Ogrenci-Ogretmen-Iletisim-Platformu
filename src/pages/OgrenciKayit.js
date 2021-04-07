import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image,
    StatusBar
} from 'react-native';
import firebase from "firebase";
import '@react-native-firebase/firestore';
import bg from "../images/bg1.jpg"
const { width: WIDTH } = Dimensions.get('window');
export default class OgrenciKayit extends React.Component {

    constructor(props) {
        super(props)
        this.state = ({
            name: '',
            surname: '',
            email: '',
            password: '',
            university: '',
        });
    }

    dataYaz(name, surname, email, password, university) {
        try {
            if (this.state.password.length < 6) {
                alert("Lütfen 6 karakter veya daha uzun bir şifre girin!!")
                return;
            }
            else {
                const { email, password, name, surname, university } = this.state;
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((res) => {
                        firebase.database().ref('Ogrenci-Kayit/id: ' + res.user.uid).set({
                            name, surname, email, password, university
                        })
                    }).catch((error) => {
                        alert("Kayıt Yapılamadı HATA!!")
                        //console.log(error)
                    })
                alert("Öğrenci Kaydı Başarılı");
                this.props.navigation.navigate("OgrenciGiris")
            }
        }
        catch (error) {
            //console.log(error.toString())
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                <Image style={styles.bgImage} source={bg} />
                <View style={styles.baslikInfo}>
                    <Text style={styles.baslik}>ÖĞRENCİ KAYIT EKRANI</Text>
                </View>
                <View style={styles.textInputHizalama}>
                    <TextInput style={styles.textInput}
                        onChangeText={(email) => this.setState({ email })}
                        placeholder="Mail Adresiniz"
                        placeholderTextColor="#FFF"
                        value={this.state.email}
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />
                    <TextInput style={styles.textInput}
                        onChangeText={(name) => this.setState({ name })}
                        placeholder="İsim"
                        placeholderTextColor="#FFF"
                    />
                    <TextInput style={styles.textInput}
                        onChangeText={(surname) => this.setState({ surname })}
                        placeholder="Soyisim"
                        placeholderTextColor="#FFF"
                    />
                    <TextInput style={styles.textInput}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder="Şifre"
                        placeholderTextColor="#FFF"
                        secureTextEntry={true}
                        value={this.state.password}
                        autoCapitalize='none'
                    />
                    <TextInput style={styles.textInput}
                        onChangeText={(university) => this.setState({ university })}
                        placeholder="Okuduğunuz Üniversite"
                        placeholderTextColor="#FFF"
                    />
                </View>

                <TouchableOpacity style={styles.girisButon}
                    onPress={() => this.dataYaz(this.state.name,
                        this.state.surname,
                        this.state.email,
                        this.state.password,
                        this.state.university,
                    )}
                >
                    <Text style={styles.text}>Kayıt Ol</Text>
                </TouchableOpacity>
                <View style={styles.hizalama}>
                    <TouchableOpacity style={styles.toucable}
                        onPress={() => this.props.navigation.navigate('AnaSayfa')}>
                        <Text style={styles.text}>Geri</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toucable}
                        onPress={() => this.props.navigation.navigate('OgrenciGiris')}>
                        <Text style={styles.text}>Giriş Yap</Text>
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
        backgroundColor: '#AEB6BF',

    },
    textInputHizalama: {
        marginTop: 31
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
    girisButon: {
        width: 150,
        height: 80,
        backgroundColor: '#041801',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        borderRadius: 20,
        borderColor: '#FFF',
        borderWidth: 3,
        opacity: 0.8
    },
    text: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16
    },
    baslikInfo: {
        flex: 1.2,
        marginTop: 60
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
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
});