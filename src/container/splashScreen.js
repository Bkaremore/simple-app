import React, {Component} from 'react';
import {View, Image,Dimensions} from 'react-native'
import  * as Color from '../styles/colors';

const{height, width}= Dimensions.get('window')

class SplashScreen extends Component{

    componentWillMount() {
        setTimeout(()=>{
            this.props.navigation.navigate("Login");
        },500)
    }



    render() {
        return(
            <View style={{
                height:height,
                width:width,
                backgroundColor:Color.WHITE,
                justifyContent:'center',
                alignItems:'center'
            }}>
            <Image source={require('../images/shopping_bags.png')}
                    style={{height:120, width:120}}/>
            </View>
        );
    }
}
export  default SplashScreen;