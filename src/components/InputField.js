import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default InputField = ({ 
    label, 
    icon, 
    secureTextEntry, 
    keyboardType, 
    fieldButtonLabel, 
    fieldButtonFunction, 
    value,
    onChangeText
}) => {
    return (
        <View style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                borderBottomColor: '#666', 
                borderBottomWidth: 1, 
                paddingBottom: 8, 
                marginBottom: 25 
            }}>
            {icon}
            <TextInput 
                placeholder={label} 
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChangeText}
                style={{ flex: 1, paddingVertical: 0, color:'#000' }} 
            />
            <TouchableOpacity onPress={fieldButtonFunction}>
                <Text style={{ color: '#10519d', fontWeight: '700' }}>{fieldButtonLabel}</Text>
            </TouchableOpacity>
        </View>
    );
};
