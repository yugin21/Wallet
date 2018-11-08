import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const iconApp = require('../assets/icon.png')

export default class Splash extends Component{
    
    gotoLogin(){
        this.props.navigation.navigate('login')
    }

    render(){
        return(
            <View style = {styles.wrapper}>
                <View style = {styles.titleWrapper}>
                <Text style = {styles.title}>Hello!</Text>
                <Text style = {styles.title1}>Welcome to wallet app.</Text>
                </View>
                <View style = {styles.iconWrapper}>
                <Image 
                    style = {styles.icon}
                    source = {iconApp}
                />
                </View>
                <TouchableOpacity style = {styles.buttonStyle} onPress = {() => this.gotoLogin()}>
                    <Text style = {styles.buttonText}>PIN login</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        backgroundColor: '#57606f',
    },
    titleWrapper:{
        flex: 1,
        paddingLeft: 30,
    },
    title:{
        fontSize: 50,
        color: 'white',
        top: '30%',
    },
    title1:{
        fontSize: 34,
        color: 'white',
        top: '35%',
        fontStyle: 'normal',
    },
    buttonText:{
        alignSelf: 'center',
        fontSize: 16,
        
        color: '#57606f',
        paddingTop: 15,
        paddingBottom: 15,
    },
    buttonStyle:{
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#57606f',
        marginLeft: 25,
        marginRight: 25,
        bottom: 25
    },
    iconWrapper:{
        flex: 1,
        justifyContent: 'center',
    },
    icon:{
        alignSelf: 'center',
        width:90,
        height:110,
        bottom: '20%'
    }
})