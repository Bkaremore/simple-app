import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ViewComponent = ()=>{
    return(
        <View style={{
                        flexDirection: "row",
                        height: 100,
                        padding: 20
        }}>
            <View style={{flex:0.1,
                         backgroundColor:'blue'}}
                  accessible={true}
                  accessibilityLiveRegion={'polite'}

            />

            <View style={{flex:0.3,
                         backgroundColor:'green'}}
                  focusable={true}
            />
            <View style={{flex:0.5,
                         backgroundColor:'yellow'}}
                  pointerEvents={'box-none'}
            />
        </View>
    )
}
export default ViewComponent;