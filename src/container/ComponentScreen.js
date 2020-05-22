import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native';

import Styles from '../styles/style';

class MainComponentScreen extends Component{
    render() {
        return(
            <View style={Styles.container}>
                <TouchableOpacity style={Styles.optionBtn}
                                  onPress={()=> {
                                      this.props.navigation.navigate('ActivityIndicatorApp');
                                  }}>
                    <Text style={Styles.optionBtnText}>Activity Indicator Example</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.optionBtn}
                                  onPress={()=> {
                                      this.props.navigation.navigate('ButtonComponent');
                                  }}>
                    <Text style={Styles.optionBtnText}>Button Example</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.optionBtn}
                                  onPress={()=> {
                                      this.props.navigation.navigate('FlatlistCompnent');
                                  }}>
                    <Text style={Styles.optionBtnText}>Flatlist Example</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.optionBtn}
                                  onPress={()=> {
                                      this.props.navigation.navigate('ImageComponent');
                                  }}>
                    <Text style={Styles.optionBtnText}>Image Example</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default MainComponentScreen;
