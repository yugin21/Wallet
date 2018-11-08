import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TabBar from 'react-native-nav-tabbar';
import Account from '../components/Account';

const Home = require('../assets/home.png')
const HomeActive = require('../assets/homeAct.png')
const Clock = require('../assets/clock.png')
const ClockActive = require('../assets/clockAct.png')
const Card = require('../assets/card.png')
const CardActive = require('../assets/cardAct.png')
const Stat = require('../assets/statistics.png')
const StatActive = require('../assets/statisticsAct.png')

class TabNavigator extends Component {
    render(){
        return(
            <TabBar>
                <TabBar.Item
                    icon= {Home}
                    selectedIcon={HomeActive}
                >
                    <View>
                        <Account />
                    </View>
                </TabBar.Item>

                <TabBar.Item
                    icon={Card}
                    selectedIcon={CardActive}
                >
                    <View style = {{flex:1, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 18}}>Card</Text>
                    </View>
                </TabBar.Item>

                <TabBar.Item>
                    <View style = {{flex:1, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 18}}>Send</Text>
                    </View>
                </TabBar.Item>

                <TabBar.Item
                    icon={Stat}
                    selectedIcon={StatActive}
                >
                    <View style = {{flex:1, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 18}}>Statistic</Text>
                    </View>
                </TabBar.Item>
                
                <TabBar.Item
                    icon={Clock}
                    selectedIcon={ClockActive}
                >
                    <View style = {{flex:1, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 18}}>History</Text>
                    </View>
                </TabBar.Item>
            </TabBar>
        )
    }
}

export default TabNavigator;