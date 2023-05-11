import React, { useEffect, useState } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView, FlatList, TextInput, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import CustomSwitch from '../components/CustomSwitch';
import axios from 'axios';
import { BASE_URL } from '../config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import filter from 'lodash.filter';

const EnquiriesScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState();
    const [hotEnq, setHotEnq] = useState([]);
    const [fullData, setFullData] = useState([]);
    const [warmEnq, setWarmEnq] = useState([]);
    const [error, setError] = useState();

    const [EnqTab, setEnqTab] = useState(1);
    const onSelectSwitch = (value) => {
        setEnqTab(value);
    }

    const HotEnquiriesList = () => {
        setIsLoading(true);    
        axios.get(`${BASE_URL}/enquiries/HOT`)
            .then(function (res) {
                setHotEnq(res.data);
                setFullData(res.data);
            })
            .catch(function (error) {
                setError(error);
                console.log(error);
            });
        setIsLoading(false);
    }

    const WarmEnquiriesList = () => {
        setIsLoading(true);
        axios.get(`${BASE_URL}/enquiries/WARM`)
            .then(function (res) {
                setWarmEnq(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        setIsLoading(false);
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
        const formattedQuery = query.toLowerCase();
        const filteredData = filter(fullData, (item) => {
            // console.warn(contains(item, formattedQuery));
            return contains(item, formattedQuery);
        })
        setHotEnq(filteredData);
    }
    
    const contains = ({ customer_name, city, description }, query) => {
        if (
            customer_name && customer_name.includes(query) ||
            city && city.includes(query) ||
            description && description.includes(query)
        ) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        HotEnquiriesList();
        WarmEnquiriesList();
    }, []);

    if(error){
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Text>Could not load data.</Text>            
        </View>
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ padding: 10, marginBottom: 50 }}>
                <View style={{ marginVertical: 10 }}>
                    <CustomSwitch
                        selectionMode={1}
                        option1="HOT"
                        option1Val={hotEnq.length}
                        option2="WARM"
                        option2Val={warmEnq.length}
                        onSelectSwitch={onSelectSwitch}
                    />
                </View>

                {EnqTab == 1 &&
                    <View>
                        {/* <View style={styles.searchBar}>
                            <Ionicons color='#c6c6c6' name='search' size={20} style={{ marginRight: 5 }} />
                            <TextInput
                                placeholder='Search'
                                placeholderTextColor="#000"
                                clearButtonMode='always'
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={searchQuery}
                                onChangeText={(query) => handleSearch(query)}
                                style={{ flex: 1, paddingVertical: 5 }} 
                            />
                        </View> */}

                        <FlatList
                            data={hotEnq}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <ListItem
                                    data={item}
                                    key={item.id}
                                    onPress={() => navigation.navigate('EnqDetails', { title: item.customer_name, id: item.id })}
                                />
                            }
                        />
                    </View>
                }
                {EnqTab == 2 &&
                    <FlatList
                        data={warmEnq}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <ListItem
                                data={item}
                                key={item.id}
                                onPress={() => navigation.navigate('EnqDetails', { title: item.customer_name, id: item.id })}
                            />
                        }
                    />
                }
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        borderColor: '#c6c6c6',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 1,
        alignItems: 'center',
        marginBottom: 10
    }
})

export default EnquiriesScreen;
