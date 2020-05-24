import React, { Component } from 'react'
import { View,ScrollView, TouchableOpacity, Text } from 'react-native';

import Styles from '../styles/style';

class MainComponentScreen extends Component{
    render() {
        return(
            <ScrollView>
                <View style={Styles.container}>
                    <View style={Styles.row}>
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

                    </View>

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

                    <TouchableOpacity style={Styles.optionBtn}
                                      onPress={()=> {
                                          this.props.navigation.navigate('ModelComponent');
                                      }}>
                        <Text style={Styles.optionBtnText}>Model Example</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.optionBtn}
                                      onPress={()=> {
                                          this.props.navigation.navigate('RefreshControlComponent');
                                      }}>
                        <Text style={Styles.optionBtnText}>Refresh Control Example</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.optionBtn}
                                      onPress={()=> {
                                          this.props.navigation.navigate('SafeAreaViewComponent');
                                      }}>
                        <Text style={Styles.optionBtnText}>SafeAreaView Example</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.optionBtn}
                                      onPress={()=> {
                                          this.props.navigation.navigate('TextComponent');
                                      }}>
                        <Text style={Styles.optionBtnText}>Text Example</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.optionBtn}
                                      onPress={()=> {
                                          this.props.navigation.navigate('TextInputComponent');
                                      }}>
                        <Text style={Styles.optionBtnText}>TextInput Example</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.optionBtn}
                                      onPress={()=> {
                                          this.props.navigation.navigate('TouchableComponent');
                                      }}>
                        <Text style={Styles.optionBtnText}>Touchable Example</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.optionBtn}
                                      onPress={()=> {
                                          this.props.navigation.navigate('ViewComponent');
                                      }}>
                        <Text style={Styles.optionBtnText}>View Example</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
export default MainComponentScreen;
