import Splash from '../components/Splash'
import Login from '../components/Login';
import Home from  '../components/Home';
import { createStackNavigator } from 'react-navigation';

export default Navigator = createStackNavigator({
    splash:{
        screen: Splash,
        navigationOptions:{
            header: null
        }
    },
    login:{
        screen: Login,
        navigationOptions:{
            header: null
        }
    },
    home:{
        screen: Home,
        navigationOptions:{
            header: null
        }
    }
})