import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import PaymentTrackerScreen from '../screens/PaymentTrackerScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='OrderDetails' component={OrderDetailsScreen} options={({ route }) => ({
                title: route.params?.title,
            })} />
        </Stack.Navigator>
    )
}

const TabNavigator = ({ navigation }) => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: true, tabBarStyle: { backgroundColor: '#10519d' }, tabBarInactiveTintColor: '#fff', tabBarActiveTintColor: '#58a8ff' }}>
            <Tab.Screen name="Home2" component={HomeStack} options={({ route }) => ({
                tabBarStyle: { display: getTabBarVisibility(route), backgroundColor: '#10519d', },
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='home-outline' color={color} size={size} />
                )
            })} />
            <Tab.Screen name="Cart" component={CartScreen} options={{
                tabBarBadge: 3,
                tabBarBadgeStyle: { backgroundColor: '#fff' },
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='cart-outline' color={color} size={size} />
                )
            }} />
            <Tab.Screen name="PaymentTracker" component={PaymentTrackerScreen} options={{
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