import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, SafeAreaView, ScrollView, FlatList, Image, TouchableOpacity, Linking } from 'react-native';
import { BASE_URL } from '../config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import ExStyles from '../style';
import Clipboard from '@react-native-clipboard/clipboard';
import EnqComment from '../components/EnqComment';

const EnqDetailsScreen = ({navigation, route}) => {
    let item = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [enquiry, setEnquiry] = useState([]);

    const fetchEnquiry = () => {
        setIsLoading(true);
        axios.get(`${BASE_URL}/enquiry/${item.id}`)
        .then(function (res) {
            setEnquiry(res.data);
        })
        .catch(function (error) {
            console.warn(error);
        });
        setIsLoading(false);
    }

    useEffect(() => {
        fetchEnquiry();
    });

    return (
        <SafeAreaView>
            <ScrollView className="p-3 bg-white">
                <View className="flex flex-row justify-between">
                    <Text className="text-[#a1a1a1]" style={ExStyles.ysoFontRegular}>{enquiry?.qrn}</Text>
                    <TouchableOpacity onPress={()=> navigation.goBack(null)}>
                        <Ionicons name="close" size={22} color='#6b6b6b' />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text className="text-black text-3xl pt-1" style={ExStyles.ysoFontBold}>{item?.title}</Text>
                </View>
                <View className="flex flex-row justify-start mt-3">
                    <Text className="text-[#a1a1a1] w-3/12" style={ExStyles.ysoFontBold}>Email</Text>
                    {enquiry.email ?
                    <View className="flex-row">
                        <TouchableOpacity className="w-9/12" onPress={() => {Linking.openURL(`mailto:${enquiry.email}`)}}>
                            <Text className="text-[#327cd0]" style={ExStyles.ysoFontBold}>{enquiry?.email}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Clipboard.setString(`${enquiry?.email}`)}>
                            <Ionicons name="copy-outline" size={18} color="#6b6b6b" />
                        </TouchableOpacity>
                    </View>
                        :
                    <Text className="text-[#aaa]" style={ExStyles.ysoFontBold}>NA</Text>
                    }
                </View>
                <View className="flex flex-row justify-start mt-3">
                    <Text className="text-[#a1a1a1] w-3/12" style={ExStyles.ysoFontBold}>Phone</Text>
                    {enquiry.phone ?
                    <View className="flex-row">
                        <TouchableOpacity className="w-9/12" onPress={() => {Linking.openURL(`tel:${enquiry.phone}`)}}>
                            <Text className="text-[#327cd0]" style={ExStyles.ysoFontBold}>{enquiry?.phone}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Clipboard.setString(`${enquiry?.phone}`)}>
                            <Ionicons name="copy-outline" size={18} color="#6b6b6b" />
                        </TouchableOpacity>
                    </View>
                    :
                    <Text className="text-[#aaa]" style={ExStyles.ysoFontBold}>NA</Text>
                    }
                </View>
                <View className="flex flex-row justify-start mt-3">
                    <Text className="text-[#a1a1a1] w-3/12" style={ExStyles.ysoFontBold}>Address</Text>
                    <Text className="text-[#000000] w-9/12" style={ExStyles.ysoFontBold}>{enquiry.address ? enquiry.address : <Text className="text-[#aaa]">NA</Text>}</Text>
                </View>
                <View className="flex flex-row justify-start mt-3">
                    <Text className="text-[#a1a1a1] w-3/12" style={ExStyles.ysoFontBold}>Region</Text>
                    <Text className="text-[#000000] w-9/12" style={ExStyles.ysoFontBold}>{enquiry?.city+","} {enquiry?.region}</Text>
                </View>
                <View className="flex flex-row justify-start mt-3">
                    <Text className="text-[#a1a1a1] w-3/12" style={ExStyles.ysoFontBold}>Assignee</Text>
                    <Image source={require('../../assets/images/user-profile.jpg')} className="w-9/12 rounded-full" style={ExStyles.avatar} />
                </View>
                <View className="flex flex-row justify-start mt-3">
                    <Text className="text-[#a1a1a1] w-3/12" style={ExStyles.ysoFontBold}>Date</Text>
                    <Text className="text-[#000000] w-9/12 font-medium">{moment(enquiry?.enq_date).format('MMM D, YYYY')}</Text>
                </View>
                <View className="flex flex-row justify-start mt-3">
                    <Text className="text-[#a1a1a1] w-3/12" style={ExStyles.ysoFontBold}>Label</Text>
                    <View className="flex-row w-9/12 justify-items-start">
                        <Text className="text-[#e2a731] bg-[#fff6e3] font-medium px-1 py-0.5 text-center align-baseline leading-none rounded-lg text-sm">Urgent</Text>
                        <Text className="text-[#6b6b6b] bg-[#f9f9f9] font-medium px-1 py-0.5 text-center align-baseline leading-none rounded-lg text-sm ml-2">Design</Text>
                        <View className="flex-row text-[#6b6b6b] bg-[#ffffff] border-2 border-[#d1d1d1] font-medium px-1 py-0.5 text-center align-baseline leading-none rounded-lg ml-2">
                            <Ionicons name="add-outline" size={18} color="#000" />
                            <Text className="font-medium text-[#000]">Add</Text>
                        </View>
                    </View>
                </View>
                <View className="flex flex-row justify-start mt-3">
                    <Text className="text-[#a1a1a1] w-3/12" style={ExStyles.ysoFontBold}>Status</Text>
                    <Text className="text-[#000000] w-9/12" style={ExStyles.ysoFontBold}>{enquiry?.status}</Text>
                </View>
                <View className="mt-5">
                    <View className="flex-row border-b border-[#eaeaea]">
                        <Text className="text-black text-lg" style={ExStyles.ysoFontBold}>Description</Text>
                        <View className="ml-1 justify-center">
                            <Ionicons name="create-outline" size={18} color="#6b6b6b" />
                        </View>
                    </View>
                    <View className="pt-3">
                        <Text className="text-[#999999] font-medium text-sm" style={ExStyles.ysoFontBold}>{enquiry?.description}</Text>
                    </View>
                </View>

                <View className="my-5">
                    <View className="flex-row border-b border-[#eaeaea]">
                        <Text className="text-black text-lg" style={ExStyles.ysoFontBold}>Comments</Text>
                        <View className="ml-1 justify-center">
                        <Text className="text-white bg-[#10519d] font-medium px-1 rounded-full ml-1">{enquiry.comments ? enquiry.comments.length : '0'}</Text>
                        </View>
                    </View>
                    <View className="pt-2">
                        {
                        enquiry.comments ?
                        <FlatList
                            data={enquiry.comments}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <EnqComment data={item} />
                            }
                        />
                        :
                        <Text className="text-[#6b6b6b]">No comments</Text>
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default EnqDetailsScreen;
