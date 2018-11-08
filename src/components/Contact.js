import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

const addIcon = require('../assets/plus.png')
const elonMusk = require('../assets/elon.jpg')
const pavelDurov = require('../assets/pavel.jpg')
const matsumoto = require('../assets/matz.jpg')
const david = require('../assets/david.jpg')
const jordan = require('../assets/jordan.jpg')

const Contact = () =>{
    return(
        <View style = {styles.contactContainer}>
            <Text style = {styles.contactText}>Send money to</Text>
            <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
                <TouchableOpacity style = {styles.addcontactCard}>
                    <Image 
                        style = {styles.addIconStyle}
                        source = {addIcon}
                    />
                    <Text style = {styles.contactName}>Add new contact</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.contactCard}>
                    <Image 
                        style = {styles.ppStyle}
                        source = {elonMusk}
                    />
                    <Text style = {styles.contactName}>Elon Reeve Musk</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.contactCard}>
                    <Image 
                        style = {styles.ppStyle}
                        source = {pavelDurov}
                    />
                    <Text style = {styles.contactName}>Pavel Durov</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.contactCard}>
                    <Image 
                        style = {styles.ppStyle}
                        source = {matsumoto}
                    />
                    <Text style = {styles.contactName}>Yukihiro Matsumoto</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.contactCard}>
                    <Image 
                        style = {styles.ppStyle}
                        source = {david}
                    />
                    <Text style = {styles.contactName}>David Hannsson</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.contactCard}>
                    <Image 
                        style = {styles.ppStyle}
                        source = {jordan}
                    />
                    <Text style = {styles.contactName}>Jordan Walke</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contactContainer:{
        backgroundColor: '#fcfcfc',
        height: 140,
        paddingTop: 10,
        position: 'relative',
        paddingLeft: 20,
    },
    contactText:{
        fontSize: 15,
        color: '#b7b5b5',
        paddingBottom: 7,
    },
    addcontactCard:{
        height: 90,
        width: 70,
        paddingHorizontal: 7,
        paddingVertical: 7,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#efeded',
        borderStyle: 'dashed',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        marginHorizontal: 4,
    },
    contactCard:{
        height: 90,
        width: 70,
        paddingHorizontal: 7,
        paddingVertical: 7,
        borderRadius: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        marginHorizontal: 4,
    },
    addIconStyle:{
        height: 15,
        width: 15,
        borderWidth: 1,
        borderRadius: 15 / 2,
    },
    contactName:{
        fontSize: 11,
        color: '#b7b5b5',
        textAlign: 'center'
    },
    ppStyle:{
        height: 35,
        width: 35,
        borderWidth: 1,
        borderRadius: 35 / 2,
    },
})

export default Contact;