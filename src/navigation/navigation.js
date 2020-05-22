import React,{Component} from 'react';
import {View, useWindowDimensions } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import SplashScreen from "../container/splashScreen";
import Login from '../container/login';
import HomeScreen from "../container/home";
import MainComponentScreen from '../container/ComponentScreen';

import LanguageTranslate from "../component/LanguageTranslate";
import HookExample from '../component/UsingHooks';
import ActivityIndicatorApp from '../component/ActivityIndicatiorComponent';
import ButtonComponent from "../component/ButtonComponet";
import FlatlistCompnent from "../component/FlatListComponent";
import ImageComponent from '../component/ImageComponent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

class App extends Component{
    render() {
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName='MainComponentScreen'>
                    <Stack.Screen options={{headerShown:false}} name={'SplashScreen'} component={SplashScreen}/>
                    <Stack.Screen options={{headerShown:false}} name={'Login'} component={Login}/>
                    <Stack.Screen options={{headerShown:false}} name={'HomeScreen'} component={HomeScreen}/>
                    <Stack.Screen options={{headerShown:false}} name={'LanguageTranslate'} component={LanguageTranslate}/>
                    <Stack.Screen  name={'MainComponentScreen'} component={MainComponentScreen}/>

                    <Stack.Screen  name={'HookExample'} component={HookExample}/>
                    <Stack.Screen  name={'ActivityIndicatorApp'} component={ActivityIndicatorApp}/>
                    <Stack.Screen  name={'ButtonComponent'} component={ButtonComponent}/>
                    <Stack.Screen  name={'FlatlistCompnent'} component={FlatlistCompnent}/>
                    <Stack.Screen  name={'ImageComponent'} component={ImageComponent}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default App;