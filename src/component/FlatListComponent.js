import React from 'react';
import {View, FlatList, Text, TouchableOpacity,Image, ActivityIndicator} from 'react-native';

import * as Color from '../styles/colors';
import Styles from '../styles/style';

let data = [];

data = [{id:1,name:'Barlin', bgColor: '#f5c645', color:Color.WHITE},
        {id:2,name:'Rio', bgColor: '#f56a25', color:Color.WHITE},
        {id:3,name:'Tokyo', bgColor: '#f74036', color:Color.WHITE},
        {id:4,name:'Nairobi', bgColor: '#5fd927', color:Color.WHITE},
        {id:5,name:'Professor', bgColor: '#28d49b', color:Color.WHITE},
        {id:6,name:'Denver', bgColor: '#27cfc6', color:Color.WHITE},
    ]

function RenderItem({item, index}){
    console.log("item ==>",item)
    return(
        <TouchableOpacity onPress={()=>{alert(JSON.stringify(item))}}>
             <Text style={[Styles.flatListCard,{color:item.color,backgroundColor: item.bgColor}]}>{item.name}</Text>
        </TouchableOpacity>
    )
}

const FlatlistCompnent = () =>{

    return(
            <FlatList data={data}
                      extraData={data}
                      keyExtractor={(item)=>{item.id}}
                      renderItem={({item, index})=>(
                         <RenderItem item={item}
                                     index={index}/>
                      )}
                      ListHeaderComponent={()=>{
                          return(
                              <TouchableOpacity onPress={()=>{
                                  data.push({id:7,name:'Helsinki', bgColor: '#2584cc', color:Color.WHITE})
                              }}
                                                style={{alignItems:'center'}}>
                                  <Text style={{color:Color.WHITE, fontWeight:'bold', fontSize:16}}>Add Character</Text>
                              </TouchableOpacity>
                          )
                      }}
                      ListHeaderComponentStyle={Styles.addCharacter}
                      ListFooterComponent={()=>{
                          return(
                              <View style={Styles.flatlistFooter}>
                                  <Image source={require('../images/envelope.png')}
                                         style={{height:30,width:30}}/>

                                 <Image source={require('../images/envelope.png')}
                                        style={{height:30,width:30}}/>

                                 <Image source={require('../images/envelope.png')}
                                        style={{height:30,width:30}}/>
                              </View>
                          )
                      }}
                      horizontal={false}
                      initialNumToRender={6}
                      initialScrollIndex={5}
                      inverted={false}
                      onEndReachedThreshold={1}
                      progressViewOffset={2}
                      refreshing={false}
                      onRefresh={()=>{
                          return(
                              <ActivityIndicator size={'large'}
                                                 color={'red'}/>
                          )
                      }}
                      getItemLayout={(data, index) => (
                          {length: 50, offset: 50 * index, index}
                      )}
            />
    )
}
export default FlatlistCompnent;