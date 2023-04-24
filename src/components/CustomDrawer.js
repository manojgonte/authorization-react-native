import React, { useContext } from 'react';
import { View, Text, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AuthContext from '../context/AuthContext';

const CustomDrawer = (props) => {
    const {logout} = useContext(AuthContext);
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#8200d6' }}>
                <ImageBackground source={require('../../assets/images/menu-bg.jpeg')} style={{ padding: 20 }} >
                    <Image source={require('../../assets/images/user-profile.jpg')} style={{ height: 80, width: 80, borderRadius: 40 }} />
                    <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Roboto-Medium' }}>Manoj G</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#fff', fontFamily: 'Roboto-Regular', marginRight: 5 }}>280 Coins</Text>
                        <FontAwesome5 name='coins' size={14} color="#fff" />
                    </View>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc'}}>
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name='share-social-outline' size={22} />
                        <Text style={{fontSize:15, fontFamily:'Roboto-Bold',marginLeft:5}}>Share</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{logout()}} style={{paddingVertical:15}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name='exit-outline' size={22} />
                        <Text style={{fontSize:15, fontFamily:'Roboto-Bold',marginLeft:5}}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;
