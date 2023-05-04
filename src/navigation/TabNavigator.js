import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import EnquiryScreen from '../screens/EnquiriesScreen';
import PaymentTrackerScreen from '../screens/PaymentTrackerScreen';
import EnqDetailsScreen from '../screens/EnqDetailsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='EnqDetails' component={EnqDetailsScreen} options={({ route }) => ({
                title: route.params?.title,
            })} />
        </Stack.Navigator>
    )
}

const TabNavigator = ({ navigation }) => {
    return (
        <Tab.Navigator screenOptions={{ 
                headerShown: false, 
                tabBarShowLabel: false, 
                tabBarStyle: 
                    { backgroundColor: '#fff', shadowColor:{elevation:5} }, 
                tabBarInactiveTintColor: '#9e9e9e', 
                tabBarActiveTintColor: '#10519d' 
            }}>
            <Tab.Screen name="Home2" component={HomeStack} options={({ route }) => ({
                tabBarStyle: { display: getTabBarVisibility(route), backgroundColor: '#fff' },
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='home-outline' color={color} size={size} />
                )
            })} />
            <Tab.Screen name="Enquiries" component={EnquiryScreen} options={{
                headerShown: true,
                tabBarBadge: 3,
                tabBarBadgeStyle: { backgroundColor: '#fff' },
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='chatbox-ellipses-sharp' color={color} size={size} />
                )
            }} />
            <Tab.Screen name="PaymentTracker" component={PaymentTrackerScreen} options={{
                title:'Payment Tracker',
                headerShown: true,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='cash-outline' color={color} size={size} />
                )
            }} />
        </Tab.Navigator>
    )
}

const getTabBarVisibility = route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    if(routeName == 'OrderDetails'){
        return 'none';
    }
    return 'flex';
}

export default TabNavigator;