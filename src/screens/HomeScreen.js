import React, { useContext, useState } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { freeGames, paidGames, sliderData } from '../model/data';
import windowWidth from '../utils/Dimensions';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import AuthContext from '../context/AuthContext';

const HomeScreen = ({ navigation }) => {
    const [EnqTab, setEnqTab] = useState(1);
    const {userInfo} = useContext(AuthContext);
    const onSelectSwitch = (value) =>{
        setEnqTab(value);
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: 20 }}>

                {/* user bar */}
                <View style={styles.userHeader}>
                    <Text style={{ fontSize: 16, fontFamily: 'Roboto-Medium',color:'#000' }}>Hello, {userInfo.user.name}</Text>
                    <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                        <ImageBackground source={require('../../assets/images/user-profile.jpg')} style={styles.avatar} imageStyle={{ borderRadius: 25 }} />
                    </TouchableOpacity>
                </View>

                {/* search bar */}
                <View style={styles.searchBar}>
                    <Ionicons color='#c6c6c6' name='search' size={20} style={{ marginRight: 5 }} />
                    <TextInput placeholder='Search' />
                </View>
                
                <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:15}}>
                    <Text style={{ fontSize: 16, fontFamily: 'Roboto-Medium' }}>Hot Enquiries</Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={{color:'#0aada8',fontWeight:'bold',textDecorationLine:"underline"}}>View All</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginVertical:20}}>
                    <CustomSwitch 
                    selectionMode={1} 
                    option1="HOT" 
                    option2="WARM"
                    onSelectSwitch={onSelectSwitch}
                    />
                </View>

                { EnqTab == 1 &&
                    freeGames.map((item) =>
                        <ListItem data={item} key={item.id} onPress={()=>navigation.navigate('OrderDetails',{title:item.title, id:item.id})} /> 
                    )
                }
                { EnqTab == 2 && 
                    paidGames.map((item) =>
                        <ListItem data={item} key={item.id} onPress={()=>navigation.navigate('OrderDetails',{title:item.title, id:item.id})} /> 
                    )
                }

                {/* <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                    <Text>Home</Text>
                    <Button title='Go to Dashboard' onPress={()=>navigation.navigate('Dashboard')} />
                </View> */}
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
