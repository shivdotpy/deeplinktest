import { createSwitchNavigator, createAppContainer, createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import WelcomeScreen from '../components/WelcomeScreen';
import DashboardScreen from '../components/DashboardScreen';
import Feed from '../components/Feed';
import Profile from '../components/Profile';
import Account from '../components/Account';


const dashboardTabNavigator = createBottomTabNavigator({
    Feed: Feed,
    Profile: Profile,
    Account: Account
})

const dashboardStackNavigator = createStackNavigator({
    Dashboard: {screen: dashboardTabNavigator, path: 'Dashboard'}
})


const drawerNavigator = createDrawerNavigator({
    Dashboard: dashboardStackNavigator
})

const sn = createSwitchNavigator({
    Welcome: {screen: WelcomeScreen, path: 'Welcome'},
    Dashboard: {screen: drawerNavigator, path: 'Dashboard'}
})



const AppCOntainer = createAppContainer(sn)

export default AppCOntainer;