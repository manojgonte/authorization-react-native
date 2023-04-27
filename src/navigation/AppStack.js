import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ReportsScreen from '../screens/ReportsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import CustomDrawer from '../components/CustomDrawer';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = ({ navigation }) => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
            headerShown: false,
            drawerLabelStyle: {
                marginLeft: -15, fontFamily: 'Roboto-Medium', fontSize: 15
            },
            drawerActiveBackgroundColor: '#10519d',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',
        }}>
            <Drawer.Screen name='Home' component={TabNavigator} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='home-outline' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name='Profile' component={ProfileScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='person-outline' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name='Dashboard' component={DashboardScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='home-outline' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name='Messages' component={MessagesScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='chatbox-ellipses-outline' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name='Reports' component={ReportsScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='timer-outline' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name='Settings' component={SettingsScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='settings-outline' size={22} color={color} />
                )
            }} />
        </Drawer.Navigator>
    );
};

export default AppStack;