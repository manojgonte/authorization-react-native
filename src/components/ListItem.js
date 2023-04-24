import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { windowWidth } from "../utils/Dimensions";

export default ListItem = ({ data, onPress }) => {
    const item = data;
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <Image
                    source={item.poster}
                    style={{ width: 55, height: 55, borderRadius: 10, marginRight: 8 }} />
                <View style={{ width: windowWidth - 220 }}>
                    <Text style={{ color: '#333', fontSize: 14, fontFamily: 'Roboto-Medium' }}>{item.subtitle}</Text>
                    <Text numberOfLines={1} style={{ color: '#333', fontSize: 14, fontFamily: 'Roboto-Medium', textTransform: 'uppercase' }}>{item.title}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={onPress} style={{ backgroundColor: '#0aada8', padding: 10, width: 100, borderRadius: 10 }}>
                <Text style={{ color: '#fff', textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 14 }}>
                    {item.isFree == 'Yes' && 'Play'}
                    {item.isFree == 'No' && item.price}
                </Text>
            </TouchableOpacity>
        </View>
    );
}