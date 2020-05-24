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
import ModelComponent from '../component/ModelComponent';
import RefreshControlComponent from '../component/RefreshControlComponent';
import SafeAreaViewComponent from '../component/SafeAreaViewComponent';
import TextComponent from '../component/TextComonent';
import TextInputComponent from  '../component/TextInputComponent';
import TouchableComponent from '../component/TouchableComponent';
import ViewComponent from '../component/ViewComponent';

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
                    <Stack.Screen  name={'ModelComponent'} component={ModelComponent}/>
                    <Stack.Screen  name={'RefreshControlComponent'} component={RefreshControlComponent}/>
                    <Stack.Screen  name={'SafeAreaViewComponent'} component={SafeAreaViewComponent}/>
                    <Stack.Screen  name={'TextComponent'} component={TextComponent}/>
                    <Stack.Screen  name={'TextInputComponent'} component={TextInputComponent}/>
                    <Stack.Screen  name={'TouchableComponent'} component={TouchableComponent}/>
                    <Stack.Screen  name={'ViewComponent'} component={ViewComponent}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default App;