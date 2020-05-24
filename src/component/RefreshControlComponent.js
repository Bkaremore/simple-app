import React,{useState} from 'react';
import {ScrollView, RefreshControl, Text, TouchableOpacity} from 'react-native';

import * as Color from "../styles/colors";
import Styles from "../styles/style";

let data = [{id:1,name:'Barlin', bgColor: '#f5c645', color:Color.WHITE},
    {id:2,name:'Rio', bgColor: '#f56a25', color:Color.WHITE},
    {id:3,name:'Tokyo', bgColor: '#f74036', color:Color.WHITE},
    {id:4,name:'Nairobi', bgColor: '#5fd927', color:Color.WHITE},
    {id:5,name:'Professor', bgColor: '#28d49b', color:Color.WHITE},
    {id:6,name:'Denver', bgColor: '#27cfc6', color:Color.WHITE},
    {id:7,name:'Monica', bgColor: '#4fadf0', color:Color.WHITE},
    {id:8,name:'Mascow', bgColor: '#f582b0', color:Color.WHITE}
]

const RefreshControlComponent =()=>{
    const [refresh, setRefresh]= useState(false);

   let onRefresh =()=>{
       setRefresh(true);
       setInterval(()=>{
           setRefresh(false);
       },1000)
    }

    return(
        <ScrollView style={{backgroundColor:'skyBlue'}}
                    decelerationRate={'fast'}
                    endFillColor={'red'}
                    horizontal={false}
                    pagingEnabled={true}
                    overScrollMode={'never'}
                    persistentScrollbar={true}
                    scrollEnabled ={true}
                    showsHorizontalScrollIndicator={true}
                    refreshControl={
                        <RefreshControl refreshing={refresh}
                                        onRefresh={onRefresh}
                                        enabled={true}
                                        progressBackgroundColor={'#f05d76'}
                                        progressViewOffset={2}
                                        //Support in IOS
                                        tintColor={Color.WHITE}
                        />
                    }>
            <Text style={{fontSize:14, textAlign:'center', margin:10}}>Pull down to show refresh control</Text>
            {data.map((record, index)=>
                <TouchableOpacity onPress={()=>{alert(JSON.stringify(record))}}>
                    <Text style={[Styles.flatListCard,{color:record.color,backgroundColor: record.bgColor}]}>{record.name}</Text>
                </TouchableOpacity>
            )
            }
        </ScrollView>
    )
}
export default RefreshControlComponent;