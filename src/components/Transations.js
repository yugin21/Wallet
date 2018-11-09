import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import styles from './styles';

const hm = require('../assets/hm.png')
const apple = require('../assets/apple.png')
const starbucks = require('../assets/starbucks.png')
const walmart = require('../assets/Walmart.png')
const adobe = require('../assets/adobe.png')
const spotify = require('../assets/spotify.png')
const mcD = require('../assets/mcD.png')

const Transations = () =>{
    return(
        <View style = {styles.transContainer}>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <Text style = {styles.transText}>Last transations</Text>
                    <TouchableOpacity style = {styles.transSection}>
                    <View>
                        <Image 
                            style = {styles.transIconStyle}
                            source = {hm}
                        />
                    </View>
                    <View style = {{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text style = {{fontSize: 15}}>H&M</Text>
                        <Text style = {{fontSize: 10, color:'#b7b5b5',}}>17-08-2017</Text>
                    </View>
                    <View style = {{flexDirection:'row'}}>
                        <View style = {{width:40,height:45}}>
                        <Text style = {{alignSelf:'flex-end', textAlign:'right', color:'red'}}>- $34,21</Text>
                        </View>
                        <Text style = {{alignSelf:'center', paddingLeft: 7, color:'#b7b5b5', fontSize: 13}}>></Text>
                    </View>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.transSection}>
                    <View>
                        <Image 
                            style = {styles.transIconStyle}
                            source = {apple}
                        />
                    </View>
                    <View style = {{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text style = {{fontSize: 15}}>Apple Inc. Salary</Text>
                        <Text style = {{fontSize: 10, color:'#b7b5b5',}}>17-08-2017</Text>
                    </View>
                    <View style = {{flexDirection:'row'}}>
                        <View style = {{width:40,height:45}}>
                        <Text style = {{alignSelf:'flex-end',textAlign:'right', color:'rgb(45, 183, 132)'}}>+ $4 342,12</Text>
                        </View>
                        <Text style = {{alignSelf:'center', paddingLeft: 7, color:'#b7b5b5', fontSize: 13}}>></Text>
                    </View>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.transSection}>
                    <View>
                        <Image 
                            style = {styles.transIconStyle}
                            source = {starbucks}
                        />
                    </View>
                    <View style = {{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text style = {{fontSize: 15}}>Starbucks</Text>
                        <Text style = {{fontSize: 10, color:'#b7b5b5',}}>16-08-2017</Text>
                    </View>
                    <View style = {{flexDirection:'row'}}>
                        <View style = {{width:40,height:45}}>
                        <Text style = {{alignSelf:'flex-end', textAlign:'right', color:'red'}}>- $3,99</Text>
                        </View>
                        <Text style = {{alignSelf:'center', paddingLeft: 7, color:'#b7b5b5', fontSize: 13}}>></Text>
                    </View>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.transSection}>
                    <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            style = {{  height: 9,
                                        width: 35,
                                        marginLeft: 5,
                                        marginRight: 10}}
                            source = {walmart}
                        />
                    </View>
                    <View style = {{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text style = {{fontSize: 15}}>Walmart</Text>
                        <Text style = {{fontSize: 10, color:'#b7b5b5',}}>16-08-2017</Text>
                    </View>
                    <View style = {{flexDirection:'row'}}>
                        <View style = {{width:40,height:45}}>
                        <Text style = {{alignSelf:'flex-end', textAlign:'right', color:'red'}}>- $78,19</Text>
                        </View>
                        <Text style = {{alignSelf:'center', paddingLeft: 7, color:'#b7b5b5', fontSize: 13}}>></Text>
                    </View>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.transSection}>
                    <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            style = {{  height: 30,
                                        width: 25,
                                        marginLeft: 5,
                                        marginRight: 20}}
                            source = {adobe}
                        />
                    </View>
                    <View style = {{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text style = {{fontSize: 15}}>Adobe</Text>
                        <Text style = {{fontSize: 10, color:'#b7b5b5',}}>15-08-2017</Text>
                    </View>
                    <View style = {{flexDirection:'row'}}>
                        <View style = {{width:40,height:45}}>
                        <Text style = {{alignSelf:'flex-end', textAlign:'right', color:'red'}}>- $19,99</Text>
                        </View>
                        <Text style = {{alignSelf:'center', paddingLeft: 7, color:'#b7b5b5', fontSize: 13}}>></Text>
                    </View>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.transSection}>
                    <View style = {{justifyContent: 'center', alignItems: 'center',}}>
                        <Image 
                            style = {{  height: 25,
                                        width: 35,
                                        marginLeft: 5,
                                        marginRight: 10}}
                            source = {spotify}
                        />
                    </View>
                    <View style = {{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text style = {{fontSize: 15}}>Spotify</Text>
                        <Text style = {{fontSize: 10, color:'#b7b5b5',}}>15-08-2017</Text>
                    </View>
                    <View style = {{flexDirection:'row'}}>
                        <View style = {{width:40,height:45}}>
                        <Text style = {{alignSelf:'flex-end', textAlign:'right', color:'red'}}>- $9,99</Text>
                        </View>
                        <Text style = {{alignSelf:'center', paddingLeft: 7, color:'#b7b5b5', fontSize: 13}}>></Text>
                    </View>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.transSection}>
                    <View style = {{justifyContent: 'center', alignItems: 'center',}}>
                        <Image 
                            style = {{  height: 25,
                                        width: 30,
                                        marginLeft: 5,
                                        marginRight: 15}}
                            source = {mcD}
                        />
                    </View>
                    <View style = {{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text style = {{fontSize: 15}}>Mcdonald's</Text>
                        <Text style = {{fontSize: 10, color:'#b7b5b5',}}>14-08-2017</Text>
                    </View>
                    <View style = {{flexDirection:'row'}}>
                        <View style = {{width:40,height:45}}>
                        <Text style = {{alignSelf:'flex-end', textAlign:'right', color:'red'}}>- $5,49</Text>
                        </View>
                        <Text style = {{alignSelf:'center', paddingLeft: 7, color:'#b7b5b5', fontSize: 13}}>></Text>
                    </View>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.loadSection}>
                        <Text style = {{fontSize: 15}}>More transations</Text>
                    </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Transations;