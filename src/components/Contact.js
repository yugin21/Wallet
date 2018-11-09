import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

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

export default Contact;