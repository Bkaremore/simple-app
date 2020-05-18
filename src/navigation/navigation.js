import React,{Component} from 'react';
import {View, useWindowDimensions } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import SplashScreen from "../container/splashScreen";
import Login from '../container/login';
import HomeScreen from "../container/home";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

class App extends Component{
    render() {
        return(
            <NavigationContainer>
                <Drawer.Navigator initialRouteName='SplashScreen'>
                    <Drawer.Screen options={{headerShown:false}} name={'SplashScreen'} component={SplashScreen}/>
                    <Drawer.Screen options={{headerShown:false}} name={'Login'} component={Login}/>
                    <Drawer.Screen options={{headerShown:false}} name={'HomeScreen'} component={HomeScreen}/>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}
export default App;