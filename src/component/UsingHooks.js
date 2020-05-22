import React, {useState, useRef} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet,TextInput} from 'react-native'

function HookExample() {

    const [count, setCount] = useState(0);
    const inputRef = useRef(null)


    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
           
            <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold'}}>Increase Count : {count}</Text>
           
            <View style={Styles.conatainer}>
              
                <TouchableOpacity onPress={()=>setCount(count + 1)}
                                  style={Styles.buttonStyle} >
                    <Text style={Styles.buttonColor}>Increase Count</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                                            if(count <= 0){
                                                
                                            }else{
                                                setCount(count - 1)
                                            }
                                        }
                                    }
                                    style={Styles.buttonStyle}
                >
                    <Text style={Styles.buttonColor}>Decrease Count</Text>
                </TouchableOpacity>

            </View>

            <TextInput ref={inputRef} 
                onChangeText={(text)=>console.log("text ==>",text)}/>
                <Button onPress={()=> inputRef.current.focus()}
                        title='Click for focus'/>
           
        </View>
    )
}

export default HookExample;
const Styles = StyleSheet.create({

    conatainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        margin:10
    },
    buttonStyle:{
        backgroundColor:'blue',
        width:'40%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:30
    },
    buttonColor:{
        color:'#fff',
        fontSize:16
    }
})