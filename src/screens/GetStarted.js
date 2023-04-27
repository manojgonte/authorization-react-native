import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GSImg from '../../assets/images/GSImg.svg';
import Logo from '../../assets/images/yso.png';

const GetStarted = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.text}>YSO</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', 'alignItems': 'center' }}>
                <GSImg width={300} height={300} />
                {/* <Image source={Logo} width={300} height={300} resizeMode="contain"></Image> */}
            </View>
            <TouchableOpacity style={styles.getStartedBtn} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.btnText}>Get Started</Text>
                <Ionicons name='chevron-forward-outline' size={30} color={'#fff'} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 30,
        color: '#10519d',
        fontFamily: 'Roboto-Bold'
    },
    getStartedBtn: {
        backgroundColor: '#10519d',
        padding: 20,
        width: '90%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
    }
})

export default GetStarted;
