import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native';
import AuthContext from '../context/AuthContext';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { CardThree } from 'react-native-card-ui';
import ExStyles from '../style';
import { windowWidth } from '../utils/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons'

const HomeScreen = ({ navigation }) => {
    const { userInfo } = useContext(AuthContext);

    const chartConfig = {
        backgroundColor: "#10519d",
        backgroundGradientFrom: "#10519d",
        backgroundGradientTo: "#10519d",
        decimalPlaces: 1,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#10519d"
        }
    }

    const data = [
        {
          name: "Seoul",
          population: 25,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Toronto",
          population: 15,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Beijing",
          population: 10,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "New York",
          population: 30,
          color: "black",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Moscow",
          population: 20,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: 15 }}>

                {/* <View style={styles.userHeader}>
                    <Text className="text-[#000] text-lg" style={ExStyles.ysoFontBold}>Hello, {userInfo.user.name}</Text>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <ImageBackground source={require('../../assets/images/user-profile.jpg')} style={styles.avatar} imageStyle={{ borderRadius: 25 }} />
                    </TouchableOpacity>
                </View> */}

                <View className="flex-row justify-between items-center mb-5 border-b-2 border-[#ededed]">
                    <View className="flex-1 flex-row items-center pb-1">
                        <View className="flex flex-shrink-0 items-center justify-center">
                            <Image className="h-14 w-14 rounded-full" source={require('../../assets/images/user-profile.jpg')} />
                        </View>
                        <View className="flex-grow flex flex-col ml-2">
                            <View className="flex-row items-center justify-between">
                                <Text className="text-gray-500 font-medium">Hello,</Text>
                            </View>
                            <Text className="text-[#000] text-lg" style={ExStyles.ysoFontBold}>{userInfo.user.name}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Ionicons name="reorder-three" size={55} color="#3a3a3a" />
                        </TouchableOpacity>
                    </View>
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

                <View className="flex items-center justify-center">
	                <View className="grid lg:grid-cols-3 md:grid-cols-2 w-full max-w-6xl">
                        <View className="flex-row">
                            <View className="flex-1 flex-row items-center p-2 bg-[#c3f6b9] rounded shadow-md shadow-[#35a11f]">
                                <View className="flex flex-shrink-0 items-center justify-center bg-[#35a11f] h-12 w-12 rounded">
                                    <Ionicons name="cash-outline" size={25} color="#9cf48a" />
                                </View>
                                <View className="flex-grow flex flex-col ml-2">
                                    <Text className="text-lg font-bold text-[#000]">₹120L</Text>
                                    <View className="flex-row items-center justify-between">
                                        <Text className="text-gray-500 font-medium">April, 2023</Text>
                                        {/* <Text className="text-green-500 text-sm font-semibold ml-2">+12.6%</Text> */}
                                    </View>
                                </View>
                            </View>
                            <View className="flex-1 flex-row items-center p-2 ml-2 bg-[#bae2f5] rounded shadow-md shadow-[#2488b7]">
                                <View className="flex flex-shrink-0 items-center justify-center bg-[#2488b7] h-12 w-12 rounded">
                                    <Ionicons name="disc-outline" size={25} color="#bae2f5" />
                                </View>
                                <View className="flex-grow flex flex-col ml-2">
                                    <Text className="text-lg font-bold text-[#000]">₹270/500L</Text>
                                    <View className="flex-row items-center justify-between">
                                        <Text className="text-gray-500 font-medium">Sales Target</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View className="flex-row mt-3">
                            <View className="flex-1 flex-row items-center p-2 bg-[#ecb6f8] rounded shadow-md shadow-[#a825c5]">
                                <View className="flex flex-shrink-0 items-center justify-center bg-[#a825c5] h-12 w-12 rounded">
                                    <Ionicons name="disc-outline" size={25} color="#ecb6f8" />
                                </View>
                                <View className="flex-grow flex flex-col ml-2">
                                <Text className="text-lg font-bold text-[#000]">₹420/500L</Text>
                                    <View className="flex-row items-center justify-between">
                                        <Text className="text-gray-500 font-medium">Booking Target</Text>
                                    </View>
                                </View>
                            </View>
                            <View className="flex-1 flex-row items-center p-2 ml-2 bg-[#f9f3b5] rounded shadow-md shadow-[#b5a814]">
                                <View className="flex flex-shrink-0 items-center justify-center bg-[#b5a814] h-12 w-12 rounded">
                                    <Ionicons name="people-outline" size={25} color="#f3e765" />
                                </View>
                                <View className="flex-grow flex flex-col ml-2">
                                    <Text className="text-lg font-bold text-[#000]">47</Text>
                                    <View className="flex-row items-center justify-between">
                                        <Text className="text-gray-500 font-medium">HOT Enquiries</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                    
                {/* charts */}
                <View className="mt-5">
                    <Text>Line Chart</Text>
                    <LineChart
                        className="flex"
                        data={{
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                            datasets: [{
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                ]}
                            ]
                        }}
                        width={windowWidth}
                        height={220}
                        yAxisLabel="₹"
                        yAxisSuffix="k"
                        yAxisInterval={1}
                        chartConfig={chartConfig}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                </View>

                <View>
                    <Text>Pie chart</Text>
                    <PieChart
                        data={data}
                        width={windowWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor={"population"}
                        backgroundColor={"#e6edf3"}
                        paddingLeft={"5"}
                        center={[2, 5]}
                        absolute
                    />
                </View>

                <View>
                    <Text>Bar Chart</Text>
                    <BarChart
                        className="flex"
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                        data={{
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                            datasets: [{
                                data: [20, 45, 28, 80, 99, 43]
                            }]
                        }}
                        width={windowWidth}
                        height={220}
                        yAxisLabel="₹"
                        chartConfig={chartConfig}
                        verticalLabelRotation={0}
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
        alignItems: 'center'
    }
})

export default HomeScreen;
