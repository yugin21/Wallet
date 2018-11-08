import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PinView from 'react-native-pin-view'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
    this.state = {
        pin: "2120"
    }
  }
  
  onComplete(inputtedPin, clear) {
    if(inputtedPin !== this.state.pin){
      clear();
    } else {
      this.gotoHome()
    }
  }

  gotoHome(){
    this.props.navigation.navigate('home')
  }

  render() {
    return (
      <View style={{
        flex           : 1,
        backgroundColor: '#57606f',
        justifyContent : 'center'
      }}>
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            top: '7%'
        }}>
        <Text style={{
            fontSize: 20, 
            color: 'white'   
        }}>Enter your PIN number</Text>
        </View>
        <PinView
        onComplete={this.onComplete}
        pinLength={this.state.pin.length}
        buttonBgColor={'#57606f'}
        buttonTextColor={'#fff'}
        />
      </View>
    );
  }
}