import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { windowWidth } from "../utils/Dimensions";
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from "moment";

export default ListItem = ({ data, onPress }) => {
    const item = data;
    return (
        <View style={styles.listContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                {/* <Image
                    source={item.poster}
                    style={{ width: 55, height: 55, borderRadius: 10, marginRight: 8 }} 
                /> */}
                <Ionicons name='chatbubbles-outline' color={'#000'} size={22} />
                <View style={{ width: windowWidth - 120, marginLeft: 10 }}>
                    <Text style={{ color: '#333', fontSize: 15, fontFamily: 'Nexa-Bold'}}>{item.customer_name}</Text>
                    { item.city ?
                        <Text style={{ color: '#333', fontSize: 15, fontFamily: 'Nexa-Regular', textTransform:'capitalize' }}>{item?.city}</Text>
                        : null
                    }
                    <Text numberOfLines={1} style={{ color: '#898989', fontSize: 14, fontFamily: 'Nexa-Regular' }}>{item?.description}</Text>
                </View>
                
            </View>
            <View>

            <Text style={{color:'#10519d', fontSize:12, fontFamily:'Nexa-Regular'}}>{moment(new Date(item.enq_date)).format("D MMM")}</Text>
            <TouchableOpacity onPress={onPress} style={{ backgroundColor: '#e4e4e4', padding: 10, borderRadius: 10 }}>
                <Ionicons name='arrow-forward' color={'#10519d'} size={22} />
            </TouchableOpacity>
            </View>
            {/* <TouchableOpacity onPress={onPress} style={{ backgroundColor: '#0aada8', padding: 10, width: 100, borderRadius: 10 }}>
                <Text style={{ color: '#fff', textAlign: 'center', fontFamily: 'Nexa-Regular', fontSize: 14 }}>
                    {item.isFree == 'Yes' && 'Play'}
                    {item.isFree == 'No' && item.price}
                </Text>
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 5, 
        borderBottomColor:'#aaaaaa61', 
        borderBottomWidth:1, 
        paddingVertical:5
    }
})