import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Image, StatusBar
} from 'react-native';
import bg from "../images/bg1.jpg"
export default class AnaSayfa extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                <Image style={styles.bgImage} source={bg} />
                <View style={styles.baslikInfo}>
                    <Text style={styles.baslik}>Öğrenci Öğretmen İletişim Platformu</Text>
                </View>
                <View style={styles.hizalama}>
                    <TouchableOpacity style={styles.toucable}
                        onPress={() => this.props.navigation.navigate('OgrenciGiris')}>
                        <Text style={styles.text}>ÖĞRENCİ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toucable}
                        onPress={() => this.props.navigation.navigate('OgretmenGiris')}>
                        <Text style={styles.text}>ÖĞRETMEN</Text>
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
        //backgroundColor:'#AEB6BF'
    },
    toucable: {
        width: 180,
        height: 90,
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
        color: 'gray',
        textAlign: 'center',
    },
    baslikInfo: {
        flex: 1.2,
        marginTop: 50,
    },
    hizalama: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 250
    },
    baslik: {
        alignItems: 'center',
        fontSize: 30,
        color: '#B1B8B1',
        opacity: 1,
        textAlign: 'center',
        marginTop: 30
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


