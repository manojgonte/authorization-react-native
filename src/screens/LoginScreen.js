import React, {useContext, useState} from 'react';
import { View, Text, Button, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginSVG from '../../assets/images/misc/login.svg';
import GoogleSVG from '../../assets/images/misc/google.svg';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import AuthContext from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('manoj@ycstech.in');
    const [password, setPassword] = useState('admin@123');
    const {login} = useContext(AuthContext);
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 25 }}>
                <View style={{ alignItems: 'center' }}>
                    <LoginSVG height={250} width={250} style={{ transform: [{ rotate: '-5deg' }] }} />
                </View>
                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 28, fontWeight: '500', color: '#333', marginBottom: 30 }}>Login</Text>
                <InputField label={'Email'} value={email} onChangeText={text => setEmail(text)} icon={<MaterialIcons name='alternate-email' size={20} color={'#666'} style={{ marginRight: 5 }} />} keyboardType='email-address' />
                <InputField label={'Password'} value={password} onChangeText={text => setPassword(text)} icon={<Ionicons name='ios-lock-closed-outline' size={20} color={'#666'} style={{ marginRight: 5 }} />} secureTextEntry={true} />
                <CustomButton label={'Login'} onPress={()=>{login(email, password);}} />
                
                <Text style={{ color: '#666', textAlign: 'center', marginBottom: 30 }}>or login with</Text>

                <View style={{flexDirection: 'row',justifyContent: 'center',marginBottom: 30,}}>
                    <TouchableOpacity onPress={() => {}} style={{borderColor: '#ddd',borderWidth: 2,borderRadius: 10,paddingHorizontal: 30,paddingVertical: 10, alignContent:'center',alignItems:'center'}}>
                        <GoogleSVG height={25} width={25} />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',justifyContent: 'center',marginBottom: 30,}}>
                    <Text>New to the app?</Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
                        <Text style={{color: '#10519d', fontWeight: '700'}}> Register</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;
