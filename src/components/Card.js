import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-fa-icons';
import styles from './styles'

const cardImage = require('../assets/cc0.png')
const cardImage1 = require('../assets/cc1.png')
const cardImage2 = require('../assets/cc2.png')

export default class Card extends React.Component {
    render(){
        return(
            <View>
                <View style = {styles.wrapper}>
                    <View style = {styles.headerStyle}>
                    <TouchableOpacity>
                        <Icon name="user" style={styles.profileIconStyle}/>
                    </TouchableOpacity>
                        <Text style = {styles.titleStyle}>Account</Text> 
                    <TouchableOpacity>
                        <Icon name="search" style={styles.searchIconStyle}/>
                    </TouchableOpacity>
                    </View>
                    
                    <View style = {styles.cardWrapper}>
                    <ScrollView horizontal = {true}>
                        <View style = {{paddingLeft: 55, paddingRight:7}}>
                        <Text style = {styles.balanceText}>$10 234,12</Text>
                        <TouchableOpacity>
                        <Image 
                            style = {styles.cardImageStyle}
                            source = {cardImage}
                        />
                        </TouchableOpacity>
                        </View>

                        <View style = {{paddingLeft:7, paddingRight:7}}>
                        <Text style = {styles.balanceText}>$30 567,13</Text>
                        <TouchableOpacity>
                        <Image 
                            style = {styles.cardImageStyle}
                            source = {cardImage1}
                        />
                        </TouchableOpacity>
                        </View>

                        <View style = {{paddingLeft:7, paddingRight:55}}>
                        <Text style = {styles.balanceText}>$2 089,14</Text>
                        <TouchableOpacity>
                        <Image 
                            style = {styles.cardImageStyle}
                            source = {cardImage2}
                        />
                        </TouchableOpacity>
                        </View>
                    </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}
