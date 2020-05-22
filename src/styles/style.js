import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import * as Color from "./colors";

const Styles = StyleSheet.create({
    container:{
        flex:1,
        margin:15,
        alignItems:'center'
    },
    optionBtn:{
        backgroundColor:'blue',
        borderRadius:5,
        height:40,
        width:'55%',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        marginVertical:15
    },
    optionBtnText:{
        color:Color.WHITE,
        fontSize:16,
        fontWeight:'bold'
    },
    flatListCard:{
        height:50,
        margin:20,
        textAlign:'center',
        textAlignVertical:'center',
        width:'auto',
        fontSize:16,
        fontWeight:'bold'
    },
    flatlistFooter:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: Color.WHITE,
        height:50,
        padding:5,
        alignItems:'center',
        paddingHorizontal:10,
        elevation:10,
       // position:'absolute'
    },
    addCharacter:{
        flexDirection: 'row',
        backgroundColor:'grey',
        width:'40%',
        justifyContent:'center',
        alignItems:'center',
        height:40,
        margin:10,
        borderRadius: 8
    },
    imageStyle:{
        height: 200,
        width:200,
        marginVertical:10
    },
    imageAnTxtContainer:{
        marginVertical:15,
        alignItems:'center'
    }
})

export default Styles;