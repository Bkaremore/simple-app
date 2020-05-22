import React from 'react';
import {View, Text,ActivityIndicator} from 'react-native';

import Styles from '../styles/style';

const ActivityIndicatorApp =() => {

    return(
        <View style={Styles.container}>
            {/*show Activiy indicator*/}
            <ActivityIndicator size={'large'}
                               color={'red'}
                               animating={true}/>
        </View>
    )
}
export default ActivityIndicatorApp;