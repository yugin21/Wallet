import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-fa-icons';

const cardImage = require('../assets/cc0.png')
const cardImage1 = require('../assets/cc1.png')
const cardImage2 = require('../assets/cc2.png')

class Card extends React.Component {
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
    

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: '#57606f',
        height: 235,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    titleStyle:{
        fontSize: 17,
        color: '#fff'
    },
    headerStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        
    },
    profileIconStyle:{
        fontSize: 17, 
        color:'white',
        marginLeft: 17
    },
    searchIconStyle:{
        fontSize: 17, 
        color:'white',
        marginRight: 17,
    },
    cardWrapper:{
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',  
        paddingTop: 10, 
    },
    cardImageStyle:{
        height: 145,
        width: 249
    },
    balanceText:{
        fontSize: 15,
        color: '#fff',
        paddingBottom: 10,
        alignSelf: 'center'
    }
})

export default Card;