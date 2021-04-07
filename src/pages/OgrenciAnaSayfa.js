import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Image, StatusBar
} from 'react-native';
import firebase from "firebase";
import bg from "../images/bg1.jpg"
import '@react-native-firebase/firestore';
export default class OgrenciAnaSayfa extends React.Component {



    constructor(props) {
        super(props)
        this.state = ({
            name: '',
            surname: '',
            university: '',
        });
    }

    /*getname() {
        firebase.database().ref(`users/${this.state.uid}`).on('value', (snapshot) => {
            console.log("deneme ismi ::: " + snapshot.val());
        })
    }*/



    render() {

        /*var user = firebase.auth().currentUser;
        var name, email, uid, emailVerified;
        if (user != null) {
            name = user.
            email = user.email;
            uid = user.uid;
            //giriş yapılanınkini vermiyor, kayıt olunanınkını verıyor*/

        /*var user = firebase.auth().currentUser;

        if (user != null) {
            user.providerData.forEach(function (profile) {
                console.log("Sign-in provider: " + profile.providerId);
                console.log("  Provider-specific UID: " + profile.uid);
                console.log("  Name: " + profile.displayName);
                console.log("  Email: " + profile.email);
                console.log("  Photo URL: " + profile.photoURL);
            });
        }*/

        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                <Image style={styles.bgImage} source={bg} />
                <View style={styles.baslikInfo}>
                    <Text style={styles.baslik}>Hoşgeldiniz ...{/*Kullanıcı isminin adresi*/}</Text>
                    <Text style={styles.baslik}>Okuduğu Üniversite {/*kullanıcının üniversitesinin adresi*/}</Text>
                </View>
                <View style={styles.hizalama}>
                    <TouchableOpacity style={styles.toucable}
                        onPress={() => this.props.navigation.navigate('')} /*Ders Kayıta Bastıgında Acılacak Sayfa*/>
                        <Text style={styles.text}>Ders Kayıt</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toucable}
                        onPress={() => this.props.navigation.navigate('')} /*Kayıt Olunan Derslere Bastıgında Acılacak Sayfa*/>
                        <Text style={styles.text}>Kayıt Olunan Dersler</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toucable}
                        onPress={() => this.props.navigation.navigate('')} /*Mesajlarıma Bastıgında Acılacak Sayfa*/>
                        <Text style={styles.text}>Mesajlarım</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toucable}
                        onPress={() => {
                            firebase.auth().signOut()
                                .then(() => { alert("Çıkış Yapıldı") })
                                .catch((error) => { console.log(error) })
                            this.props.navigation.navigate('AnaSayfa')

                        }}>
                        <Text style={styles.text}>Çıkış Yap</Text>
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
        width: 300,
        height: 100,
        backgroundColor: '#041801',
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderColor: '#FFF',
        borderWidth: 2,
        opacity: 0.8,
    },
    text: {
        color: '#AEB6BF',
        textAlign: 'center',
    },
    baslikInfo: {
        flex: 1.2,
        marginTop: 50,
    },
    hizalama: {
        flex: 2,
        flexDirection: 'column',
        marginBottom: 40
    },
    baslik: {
        alignItems: 'center',
        fontSize: 30,
        color: '#FFF',
        opacity: 1,
        justifyContent: 'center',
        textAlign: "center",
        height: 120,
        width: 400,
        opacity: 0.7,
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

