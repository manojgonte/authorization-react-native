import React from 'react';
import { View, Text, Button } from 'react-native';

const Dashboard = ({navigation}) => {
    return (
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Text>Dashboard</Text>
            <Button title='Go to Home' onPress={()=>navigation.navigate('Home')} />
        </View>
    );
};

export default Dashboard;
