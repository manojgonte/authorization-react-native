import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default CustomSwitch = ({ selectionMode, option1, option2, option1Val, option2Val, onSelectSwitch }) => {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }

    return (
        <View style={{ height: 44, width: '100%', backgroundColor: '#e4e4e4', borderRadius: 10, borderColor: '#AD40AF', flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row', backgroundColor: getSelectionMode == 1 ? '#10519d' : '#e4e4e4', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                activeOpacity={1}
                onPress={() => updateSwitchData(1)}>
                <Text style={{ color: getSelectionMode == 1 ? '#fff' : '#10519d', fontSize: 14, fontFamily: 'Nexa-Bold' }}>
                    {option1}
                </Text>
                <View className="mx-2"><Text className="bg-blue-200 text-blue-800 font-bold px-2.5 py-0.5 rounded-full">{option1Val}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row', backgroundColor: getSelectionMode == 2 ? '#10519d' : '#e4e4e4', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                activeOpacity={1}
                onPress={() => updateSwitchData(2)}>
                <Text style={{ color: getSelectionMode == 2 ? '#fff' : '#10519d', fontSize: 14, fontFamily: 'Nexa-Bold' }}>
                    {option2}
                </Text>
                <View className="mx-2"><Text className="bg-blue-200 text-blue-800 font-bold px-2.5 py-0.5 rounded-full">{option2Val}</Text></View>
            </TouchableOpacity>
        </View>
    );
}
