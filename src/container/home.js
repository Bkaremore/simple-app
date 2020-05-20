import React, {Component} from 'react';
import {View, Image, TextInput, StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import * as Color from "../styles/colors";

const {height, width}=Dimensions.get('window');

class HomeScreen extends Component{

    renderHeader(){
        return(
            <View style={Styles.header}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.toggleDrawer();
                }}>
                    <Image source={require('../images/interface.png')}
                           style={Styles.headerIcon}
                           // tintColor={'#B00020'}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{

                }}>
                <Image source={require('../images/shop.png')}
                       style={Styles.headerIcon}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{

                }}>
                    <Text style={Styles.bandge}>3</Text>
                <Image source={require('../images/commerce_and_shopping.png')}
                        style={Styles.headerIcon}/>
                </TouchableOpacity>

            </View>
        )
    }
    render() {
        return(
            <View style={{flex:1}}>
                {this.renderHeader()}
                <Text style={{marginVertical:20,textAlign:'center', fontSize:22}}>Welcome to Home screen!!!</Text>
            </View>
        );
    }
}
export default HomeScreen;

const Styles = StyleSheet.create({
    header:{
        height:50,
        width:'100%',
        elevation:10,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:Color.WHITE,
        alignItems:'center',
        paddingLeft:10.,
        paddingRight:10
    },
    headerIcon:{
        height:25,
        width:25,
        padding:5
    },
    bandge:{
        backgroundColor: 'red',
        //backgroundColor: '#d77f8f',
        zIndex:2,
        position:'absolute',
        height:18,
        width:18,
        color:Color.WHITE,
        fontSize:12,
        fontWeight:'bold',
        borderRadius:100,
        textAlign:'center',
        textAlignVertical:'center',
        right:-3,
        top:-5
    }
})