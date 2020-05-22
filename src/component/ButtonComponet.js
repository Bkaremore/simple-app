import React from 'react';
import {View, Text,Button} from 'react-native';

import Styles from '../styles/style';

const ButtonComponent = ()=>{
    return(
        <View style={{margin:15}}>
            <Button onPress={()=>alert("Click on")}
                    color={'red'}
                    title={'Click'}
                    disabled={true}
            />

                    <View style={{flexDirection:'row', justifyContent:'space-around',margin:15}}>
                        <Button onPress={()=>alert("Click on left button!!!!")}
                                color={'red'}
                                title={'LEFT'}
                                accessibilityLabel={'press buttons when'}/>
                        <Button onPress={()=>alert("Click on right button!!!!")}
                                color={'red'}
                                title={'RIGHT'}/>
                    </View>
        </View>
    )
}
export default ButtonComponent;