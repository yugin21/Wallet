import React from 'react';
import { View } from 'react-native';
import Card from './Card';
import Contact from './Contact';
import Transations from './Transations';

const Account = () =>{
    return(
        <View>
            <Card />
            <Contact />
            <Transations />   
        </View>
    )
}

export default Account;