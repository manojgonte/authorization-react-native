import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default CustomSwitch = ({selectionMode, option1, option2,onSelectSwitch}) => {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = (value) =>{
        setSelectionMode(value);
        onSelectSwitch(value);
    }

    return (
        <View style={{height:44, width:'100%',backgroundColor:'#e4e4e4',borderRadius:10,borderColor:'#AD40AF',flexDirection:'row',justifyContent:'center'}}>
            <TouchableOpacity 
            style={{flex:1, backgroundColor:getSelectionMode == 1 ? '#10519d' : '#e4e4e4', borderRadius: 10, justifyContent:'center',alignItems:'center'}} 
            activeOpacity={1} 
            onPress={()=>updateSwitchData(1)}>
                <Text style={{color:getSelectionMode == 1 ? '#fff' : '#10519d',fontSize:14,fontFamily:'Roboto-Medium'}}>{option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={{flex:1, backgroundColor:getSelectionMode == 2 ? '#10519d' : '#e4e4e4', borderRadius: 10, justifyContent:'center',alignItems:'center'}} 
            activeOpacity={1} 
            onPress={()=>updateSwitchData(2)}>
                <Text style={{color:getSelectionMode == 2 ? '#fff' : '#10519d',fontSize:14,fontFamily:'Roboto-Medium'}}>{option2}</Text>
            </TouchableOpacity>
        </View>
    );
}
