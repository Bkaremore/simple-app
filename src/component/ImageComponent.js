import React from 'react';
import {View, ScrollView, Image, Text, ActivityIndicator} from 'react-native';

import * as Color from '../styles/colors';
import Styles from '../styles/style';

function ActivityIndicatiorFun(){
    return(
        <ActivityIndicator size={'large'}
                            color={'red'}/>
    )
}
const ImageComponent = () =>{

    return(
        <ScrollView>
            <View style={Styles.container}>
                <View style={Styles.imageAnTxtContainer}>

                    <Text> Resize Mode : Repeat</Text>
                    {/*Local data image */}
                    <Image source={require('../images/envelope.png')}
                           style={Styles.imageStyle}
                           resizeMode={'repeat'}
                    />
                </View>

                <View style={Styles.imageAnTxtContainer}>

                    <Text> Resize Mode : stretch</Text>
                    <Image source={require('../images/shopping.png')}
                           style={Styles.imageStyle}
                           resizeMode={'stretch'}
                    />
                </View>

                <View style={Styles.imageAnTxtContainer}>
                    <Text> Resize Mode : center</Text>
                    <Image source={require('../images/shopping_bags.png')}
                           style={Styles.imageStyle}
                           resizeMode={'center'}
                           blurRadius={2}
                           capInsets={5}
                           fadeDuration={50}
                    />
                </View>

                <View style={Styles.imageAnTxtContainer}>
                    <Text> Resize Mode : Contain</Text>
                    {/*Network data image */}
                    <Image source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
                           style={Styles.imageStyle}
                           resizeMode={'contain'}
                           onLoad={()=>ActivityIndicatiorFun()}
                           onLoadEnd={()=>ActivityIndicatiorFun()}
                    />
                </View>

                <View style={Styles.imageAnTxtContainer}>
                    <Text> Resize Mode : Cover</Text>
                    {/*Gif image */}
                    <Image source={require('../images/minions.gif')}
                           style={Styles.imageStyle}
                           resizeMode={'cover'}
                    />
                </View>

            </View>
        </ScrollView>

    )
}
export default ImageComponent;
