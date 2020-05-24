import React,{useState} from 'react';
import {SafeAreaView, TextInput,StyleSheet, Text} from 'react-native';

const TextInputComponent =()=>{
    const [value, setValue] =useState("")
    return(
        <SafeAreaView style={{flex:1}}>
            <TextInput onChangeText={(text)=>setValue(text)}
                        style={[Styles.txtInputContainer,{borderLeftWidth:2,
                                                            borderTopWidth:3,
                                                            borderRightWidth:4
                        }]}
                        multiline ={true}
                       autoCapitalize={'character'}
                       autoCompleteType={'password'}
                       autoFocus={false}
                       autoCorrect={false}
                       importantForAutofill={'yes'}
                       keyboardType={'default'}
                       placeholder={'text input one'}
                       placeholderTextColor={'grey'}
                       returnKeyLabel={'search'}
                       textAlign={'left'}
                       textContentType={'addressCity'}
                       underlineColorAndroid={'grey'}
                       value={value}
            />

            <TextInput onChangeText={(text)=>setValue(text)}
                        style={Styles.txtInputContainer}
                       autoCapitalize={'sentence'}
                       autoCompleteType={'username'}
                       autoFocus={true}
                       autoCorrect={true}
                       blurOnSubmit={true}
                       importantForAutofill={'noExcludeDescendants'}
                       keyboardType={'phone-pad'}
                       numberOfLines={1}
                       placeholder={'text input two'}
                       placeholderTextColor={'green'}
                       returnKeyLabel={'next'}
                       textAlign={'right'}
                       underlineColorAndroid={'green'}
            />

            <TextInput onChangeText={(text)=>setValue(text)}
                       style={Styles.txtInputContainer}
                       autoCapitalize='word'
                       autoCompleteType={'email'}
                       caretHidden={true}
                       importantForAutofill={'auto'}
                       keyboardType={'visible-password'}
                       multiline={true}
                       onFocus={()=>{setValue('')}}
                       placeholder={'text input three'}
                       placeholderTextColor={'red'}
                       returnKeyLabel={'go'}
                       secureTextEntry={true}
                       selectionColor={'red'}
                       showSoftInputOnFocus={false}
                       textAlign={'center'}
            />

            <TextInput onChangeText={(text)=>setValue(text)}
                        style={Styles.txtInputContainer}
                       autoCapitalize={'none'}
                       autoCompleteType={'off'}
                       contextMenuHidden={true}
                       disableFullscreenUI={true}
                       editable={true}
                       importantForAutofill={'no'}
                       keyboardType={'email-address'}
                       maxLength={5}
                       placeholder={'text input four'}
                       placeholderTextColor={'yellow'}
                       returnKeyLabel={'previous'}
                       secureTextEntry={true}
                       selectTextOnFocus={true}
            />
        </SafeAreaView>
    )
}
export default TextInputComponent;
const Styles = StyleSheet.create({
    txtInputContainer:{
        borderColor:'#000',
        height:50,
        borderWidth:1,
        margin:20
    }
})