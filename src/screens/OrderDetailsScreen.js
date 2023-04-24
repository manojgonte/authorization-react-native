import React from 'react';
import { View, Text, Button } from 'react-native';

const OrderDetailsScreen = ({navigation, route}) => {
    return (
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Text>GameDetailsScreen</Text>
            <Text>{route.params?.title}</Text>
        </View>
    );
};

export default OrderDetailsScreen;
