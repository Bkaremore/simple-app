import React,{useState} from 'react';
import {View, TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback, Text, StyleSheet} from 'react-native';

import * as Color from '../styles/colors';
import Styles from '../styles/style';

const TouchableComponent =()=>{
    return(
        <View style={Styles.container}>
            <TouchableHighlight style={Style.touchHighlight}
                                onPress={()=>{
                                   // alert("Press Touchable Highlight !!!!")
                                }}
                                activeOpacity={0.2}
                                onHideUnderlay={()=>alert('onHideUnderlay')}
                                onHideUnderlay={()=>alert('onShowUnderlay')}
                                underlayColor={"#852233"}

            >
                <Text style={Style.btnText}>Touchable Highlight</Text>
            </TouchableHighlight>

            <TouchableOpacity style={[Style.touchHighlight, {backgroundColor: '#35e6e6'}]}
                              activeOpacity={0.5}
                              onPress={()=>{ alert("Press Touchable Opacity !!!!")}}
            >
                <Text style={Style.btnText}>Touchable Opacity</Text>
            </TouchableOpacity>

            <TouchableWithoutFeedback style={[Style.touchHighlight, {backgroundColor: '#7b56f5'}]}
                                      onPress={()=>{ alert("Press Touchable Without Feedback !!!!")}}
                                      accessibilityIgnoresInvertColors={false}
                                      accessibilityRole={'text'}
                                      delayPressIn={1200}
                                      disabled={true}
                                      touchSoundDisabled={false}
            >
                <Text style={Style.btnText}>Touchable Without Feedback</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}
export default TouchableComponent;
const Style= StyleSheet.create({
    touchHighlight:{
        backgroundColor:'#fa1e43',
        width:'60%',
        padding:10,
        height:45,
        borderRadius:8,
        alignItems:'center',
        marginVertical:15
    },
    btnText:{
        color:Color.WHITE,
        fontSize:18,
        fontWeight:'bold'
    }
})