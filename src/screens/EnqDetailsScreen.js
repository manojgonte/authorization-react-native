import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, Button, SafeAreaView, ScrollView } from 'react-native';
import { BASE_URL } from '../config';

const EnqDetailsScreen = ({navigation, route}) => {
    let item = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [enquiry, setEnquiry] = useState([]);

    const enquiryDetails = () => {
        setIsLoading(true);
        axios.get(`${BASE_URL}/enquiry/${item.id}`)
        .then(function (res) {
            console.warn(res.data);
            setEnquiry(res.data);
        })
        .catch(function (error) {
            console.warn(error);
        });
        setIsLoading(false);
    }

    useEffect(() => {
        enquiryDetails();
    }, []);

    return (
        <SafeAreaView>
            <ScrollView style={{ padding: 20 }}>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text>{item?.title}</Text>
                    <Text>{enquiry?.qrn}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default EnqDetailsScreen;
