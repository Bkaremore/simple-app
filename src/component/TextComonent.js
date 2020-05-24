import React,{useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet, Linking, ScrollView} from 'react-native';

import Styles from '../styles/style';
import * as Color from '../styles/colors'

const TextComponent =()=>{
    const [color , setColor] =useState(Color.WHITE)
    return(
        <ScrollView>
            <SafeAreaView style={[Styles.container,{backgroundColor:color}]}>

                {/*Wrap contain inside Text component*/}
                <Text style={styles.txt}>Text Component wrap inside Text Component!!!!</Text>
                <Text style={styles.margin}>

                    <Text accessibilityHint={'hint'}
                          accessibilityRole={'none'}>This is first Text Component !!!!</Text>

                    <Text accessibilityHint={'hint1'}
                          accessibilityRole={'button'}
                          accessible={false}
                          allowFontScaling={false}>This is second Text Component !!!!</Text>
                </Text>

                {/*Wrap contain inside View component*/}
                <Text style={styles.txt}>Text Component wrap inside View Component !!!!</Text>
                <View style={{margin:10}}>

                    <Text accessibilityHint={'hint2'}
                          accessibilityRole={'link'}
                          allowFontScaling={true}
                          maxFontSizeMultiplier={2}
                          ellipsizeMode={'head'}>This is Text Component !!!!</Text>

                    <Text accessibilityHint={'hint2'}
                          accessibilityRole={'image'}
                          dataDetectorType={'link'}
                          disabled={true}>This is Text Component !!!!</Text>
                </View>

                {/*ellipsize Mode head*/}
                <View style={styles.margin}>
                    <Text style={styles.txtSize}>Ellipsize Mode head : </Text>
                    <Text ellipsizeMode='head'
                          numberOfLines ={1}
                          style={{marginVertical:5}}>The line is displayed so that the end fits in the container and the missing text at the
                        beginning of the line is indicated by an ellipsis glyph.
                    </Text>
                </View>

                <View style={styles.margin}>
                    {/*ellipsize Mode tail*/}
                    <Text style={styles.txtSize}>Ellipsize Mode tail :</Text>
                    <Text ellipsizeMode='tail'
                          numberOfLines ={1}
                          style={{marginVertical:5}}>The line is displayed so that the end fits in the container and the missing text at the
                        beginning of the line is indicated by an ellipsis glyph.
                    </Text>
                </View>

                <View style={styles.margin}>
                    {/*ellipsize Mode middle*/}
                    <Text style={styles.txtSize}>Ellipsize Mode middle :</Text>
                    <Text ellipsizeMode='middle'
                          numberOfLines ={1}
                          style={{marginVertical:5}}>The line is displayed so that the end fits in the container and the missing text at the
                        beginning of the line is indicated by an ellipsis glyph.
                    </Text>
                </View>

                <View style={styles.margin}>
                    {/*ellipsize Mode clip*/}
                    <Text style={styles.txtSize}>Ellipsize Mode clip :</Text>
                    <Text ellipsizeMode='clip'
                          numberOfLines ={1}
                          selectable={true}
                          selectionColor={'yellow'}
                          style={{marginVertical:5, letterSpacing:2,textDecorationLine:'line-through'}}>The line is displayed so that the end fits in the container and the missing text at the
                        beginning of the line is indicated by an ellipsis glyph.
                    </Text>
                </View>

                <Text style={[styles.margin,{
                                    color:'blue',
                                    textShadowOffset:{height:50, width:50},
                                   //lineHeight:2,
                                    textDecorationLine:'underline',
                                    textShadowColor:'#000',
                                    textTransform:'capitalize',
                                    underlineColorAndroid:'blue'
                                }
                             ]}
                      textBreakStrategy={'highQuality'}
                      onLongPress={async()=>{
                          await Linking.openURL('https://reactnative.dev/docs/linking')
                      }}
                      onPress={async()=>{
                          if(await Linking.canOpenURL('https://reactnative.dev/docs/text')){
                              await Linking.openURL('https://reactnative.dev/docs/text')
                          }else{
                              alert("Url not found")
                          }
                      }}
                      onResponderGrant={()=>alert("Url click!!!!")}
                      onResponderRelease={()=>{setColor('grey')}}
                      pressRetentionOffset={{top:5, bottom:5}}
                >Press link</Text>

            </SafeAreaView>
        </ScrollView>
    );
}
export default TextComponent;
const styles= StyleSheet.create({
    txt:{
        fontSize:16,
        fontWeight:'bold',
        margin:8
    },
    margin:{
        margin: 10
    },
    txtSize:{
        fontSize: 15
    }
})