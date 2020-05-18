import React, {Component} from 'react';
import {View, Image, TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as Color from "../styles/colors";

class Login extends Component{

    constructor(props) {
        super(props);
        this.state={
            password:'',
            email:'',
            errorEmail:'',
            errorPassword:'',
            isPasswordVisible:false
        }
    }

    doLogin = () => {
        let allOk = true;
        let emailVal = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        if (emailVal.test(this.state.email) === false) {
            allOk = false
            this.setState({
                errorEmail: 'enter valid email id.'
            })
        }

       if (this.state.password.length > 6 || this.state.password.length < 6) {
            allOk = false
            this.setState({
                errorPassword: 'Enter password 6 digit password.'
            })
        }

       if (allOk) {
            this.props.navigation.navigate('HomeScreen');
        }
    }

    render() {
    let{email, password, errorEmail, errorPassword, isPasswordVisible} = this.state;
    return(
        <View style={Styles.container}>
            <Text style={Styles.loginTxt}>LOGIN</Text>
           <View style={Styles.inputContainer}>
               <Image source={require('../images/envelope.png')}
                        style={Styles.iconImg}
               />
               <TextInput onChangeText={(text)=>{
                               this.setState({
                                   email:text
                               })
                           }}
                          value={email}
                          style={Styles.txtInput}
                          placeholder={'Email'}
                          placeholderTextColor={Color.TRANSPARANT_WHITE}
                          keyboardType={'email-address'}
                          onFocus={()=>{
                              this.setState({errorEmail:''})
                          }}
                         />
           </View>
            {errorEmail !=null? <Text style={{color:Color.WHITE}}>{errorEmail}</Text>:null}


            <View style={Styles.inputContainer}>

                <TouchableOpacity onPress={()=>{
                    this.setState({isPasswordVisible:!isPasswordVisible})
                }}>

                    <Image source={!isPasswordVisible ?require('../images/visible.png'):require('../images/hidden.png')}
                           style={Styles.iconImg}/>
                </TouchableOpacity>
                <TextInput onChangeText={(text)=>{
                    this.setState({password:text})
                }}
                           value={password}
                           style={Styles.txtInput}
                           placeholder={'Password'}
                           keyboardType={'number-pad'}
                           placeholderTextColor={Color.TRANSPARANT_WHITE}
                           secureTextEntry={!isPasswordVisible ?true:false}
                           onFocus={()=>{
                               this.setState({errorPassword:''})
                           }}
                           maxLength={6}/>

            </View>
            {errorPassword !=null? <Text style={{color:Color.WHITE}}>{errorPassword}</Text>:null}

            <TouchableOpacity style={Styles.loginBtn}
                              onPress={()=>{
                                  console.log("click on login")
                                  this.doLogin()
                              }}>
                <Text style={{color: Color.RED, fontSize:18, fontWeight:'bold'}}>Login</Text>
            </TouchableOpacity>
        </View>
        );
    }
}
export default Login;

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:Color.RED,
        alignItems:'center'
    },
    inputContainer:{
        backgroundColor:Color.TRANSPARANT_WHITE,
        borderWidth:1,
        height:45,
        margin:20,
        borderColor:Color.TRANSPARANT_WHITE,
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:8,
        width:'70%'
    },
    loginTxt:{color: Color.WHITE,
        fontSize:30,
        fontWeight:'bold',
        marginVertical:10,
        textAlign:'center'
    },
    iconImg:{
        height:25,
        width:25,
        tintColor:Color.TRANSPARANT_WHITE,
        marginRight:8
    },
    loginBtn:{
        width:'50%',
        justifyContent:'center',
        alignItems:'center',
        height:40,
        backgroundColor:Color.WHITE,
        marginVertical:20,
        borderRadius: 5
    },
    txtInput:{
        fontSize:14,
        color: Color.WHITE
    }
})