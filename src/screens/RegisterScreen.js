import React, { useState, useContext } from 'react';
import { View, Text, Button, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginSVG from '../../assets/images/misc/registration.svg';
import GoogleSVG from '../../assets/images/misc/google.svg';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import DatePicker from 'react-native-date-picker';

const RegisterScreen = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [dobLabel, setDobLabel] = useState('Date of Birth');

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 25 }}>
                <View style={{ alignItems: 'center' }}>
                    <LoginSVG height={250} width={250} style={{ transform: [{ rotate: '-5deg' }] }} />
                </View>

                <View style={{flexDirection: 'row',justifyContent: 'center',marginBottom: 30,}}>
                    <TouchableOpacity onPress={() => {}} style={{borderColor: '#ddd',borderWidth: 2,borderRadius: 10,paddingHorizontal: 30,paddingVertical: 10, alignContent:'center',alignItems:'center'}}>
                        <GoogleSVG height={25} width={25} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: '#666', textAlign: 'center', marginBottom: 10 }}>or register with email</Text>
                
                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 28, fontWeight: '500', color: '#333', marginBottom: 30 }}>Register</Text>
                <InputField label={'Full Name'} icon={<MaterialIcons name='person-outline' size={20} color={'#666'} style={{ marginRight: 5 }} />} />
                <InputField label={'Email'} icon={<MaterialIcons name='alternate-email' size={20} color={'#666'} style={{ marginRight: 5 }} />} keyboardType='email-address' />
                <InputField label={'Password'} icon={<Ionicons name='ios-lock-closed-outline' size={20} color={'#666'} style={{ marginRight: 5 }} />} secureTextEntry={true} />
                <InputField label={'Confirm Password'} icon={<Ionicons name='ios-lock-closed-outline' size={20} color={'#666'} style={{ marginRight: 5 }} />} secureTextEntry={true} />

                {/* <InputField label={'Date of Birth'} icon={<Ionicons name='calendar-outline' size={20} color={'#666'} style={{ marginRight: 5 }} />} /> */}
                <View style={{
                        flexDirection: 'row',
                        borderBottomColor: '#666',
                        borderBottomWidth: 1,
                        paddingBottom: 8,
                        marginBottom: 30,
                    }}>
                    <Ionicons
                        name="calendar-outline"
                        size={20}
                        color="#666"
                        style={{marginRight: 5}}
                    />
                    <TouchableOpacity onPress={() => setOpen(true)}>
                        <Text style={{color: '#666', marginLeft: 5, marginTop: 5}}>
                        {dobLabel}
                        </Text>
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        mode={'date'}
                        maximumDate={new Date()}
                        minimumDate={new Date('1980-01-01')}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                            setDobLabel(date.toDateString());
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </View>
                
                {/* <TouchableOpacity onPress={() => { }} style={{ backgroundColor: '#10519d', padding: 20, borderRadius: 10, marginBottom: 30 }}>
                    <Text style={{ color: '#fff', fontWeight: '600', textAlign: 'center', fontSize: 16 }}>Register</Text>
                </TouchableOpacity> */}
                <CustomButton label={'Register'} onPress={()=>{}} />
                
                
                <View style={{flexDirection:'row',justifyContent: 'center',marginBottom: 30,}}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                        <Text style={{color: '#10519d', fontWeight: '700'}}> Login</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default RegisterScreen;
