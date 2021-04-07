import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Image, StatusBar
} from 'react-native';
import firebase from "firebase";
import bg from "../images/bg1.jpg"
export default class OgretmenAnaSayfa extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                <Image style={styles.bgImage} source={bg} />
                <View style={styles.baslikInfo}>
                    <Text style={styles.baslik}>Hoşgeldiniz ...{/*Kullanıcı isminin adresi*/}</Text>
                    <Text style={styles.baslik}>Üniversite İsmi {/*kullanıcının üniversitesinin adresi*/}</Text>
                </View>
                <View style={styles.hizalama}>
                    <TouchableOpacity style={styles.toucable}
                        onPress={() => this.props.navigation.navigate('')} /*Ders Aça Bastıgında Acılacak Sayfa*/>
                        <Text style={styles.text}>Ders Aç</Text>
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
        flex: 1.6,
        flexDirection: 'column',
        marginBottom: 40,
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


