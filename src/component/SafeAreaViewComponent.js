import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import * as Color from "../styles/colors";
import Styles from "../styles/style";

const SafeAreaViewComponent = () =>{
    return(
        <SafeAreaView style={Styles.container}
                      emulateUnlessSupported={true}>
            <Text>Example of SafeArea View.</Text>
        </SafeAreaView>
    )
}
export default SafeAreaViewComponent;

