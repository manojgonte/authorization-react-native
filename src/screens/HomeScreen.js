import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import AuthContext from '../context/AuthContext';
import { LineChart } from 'react-native-chart-kit';
import { CardThree } from 'react-native-card-ui';

const HomeScreen = ({ navigation }) => {
    const {userInfo} = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: 20 }}>

                {/* user bar */}
                <View style={styles.userHeader}>
                    <Text style={{ fontSize: 16, fontFamily: 'Nexa-Bold',color:'#000' }}>Hello, {userInfo.user.name}</Text>
                    <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                        <ImageBackground source={require('../../assets/images/user-profile.jpg')} style={styles.avatar} imageStyle={{ borderRadius: 25 }} />
                    </TouchableOpacity>
                </View>

                <View className="flex-1 items-center justify-center bg-white mt-8 px-2">
                    <Text className="text-black text-5xl" style={{fontFamily:'Nexa-Bold'}}>YSO</Text>
                </View>

                {/* search bar */}
                {/* <View style={styles.searchBar}>
                    <Ionicons color='#c6c6c6' name='search' size={20} style={{ marginRight: 5 }} />
                    <TextInput placeholder='Search' />
                </View> */}
                
                {/* <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:15}}>
                    <Text style={{ fontSize: 16, fontFamily: 'Nexa-Regular' }}>Hot Enquiries</Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={{color:'#0aada8',fontWeight:'bold',textDecorationLine:"underline"}}>View All</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={{flexDirection:'column', marginHorizontal:50}}>
                    <CardThree
                        title={"250/500 L"}
                        subTitle={"April, 2023"}
                        profile={{
                        uri:
                            "http://www.annonce-musicien.fr/assets/user_xl-e4e8b0bbfd2332dce41ff66644dd16f2.png"
                        }}
                        icon={"forward"}
                        iconColor={"grey"}
                    />
                    <CardThree
                        title={"350/500 L"}
                        subTitle={"Sales Target"}
                        profile={{
                        uri:
                            "http://www.annonce-musicien.fr/assets/user_xl-e4e8b0bbfd2332dce41ff66644dd16f2.png"
                        }}
                        icon={"forward"}
                        iconColor={"grey"}
                    />
                    <CardThree
                        title={"350/500 L"}
                        subTitle={"Booking Target"}
                        profile={{
                        uri:
                            "http://www.annonce-musicien.fr/assets/user_xl-e4e8b0bbfd2332dce41ff66644dd16f2.png"
                        }}
                        icon={"forward"}
                        iconColor={"grey"}
                    />
                    <CardThree
                        title={"42"}
                        subTitle={"HOT Enquiries"}
                        profile={{
                        uri:
                            "http://www.annonce-musicien.fr/assets/user_xl-e4e8b0bbfd2332dce41ff66644dd16f2.png"
                        }}
                        icon={"forward"}
                        iconColor={"grey"}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: 35,
        height: 35
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    userHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row'
    },
    searchBar: {
        flexDirection: 'row', 
        borderColor: '#c6c6c6', 
        borderWidth: 1, 
        borderRadius: 8, 
        paddingHorizontal: 8, 
        paddingVertical: 2,
        alignItems:'center'
    }
})

export default HomeScreen;
