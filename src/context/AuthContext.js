import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../config";
import { ToastAndroid } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = (email,password) => {

        if (!email) {
            ToastAndroid.show('Please enter email address', ToastAndroid.SHORT);
        } else if (!password) {
            ToastAndroid.show('Please enter password', ToastAndroid.SHORT);
        }

        setIsLoading(true);

        axios.post(`${BASE_URL}/login`, {
            email,
            password
        })
        .then(function (res) {
            let userInfo = res.data;
            setUserInfo(userInfo); 
            setUserToken(userInfo.access_token);
            AsyncStorage.setItem('userToken', userInfo.access_token);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        })
        .catch(function (error) {
            console.log(error);
        });
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userInfo = await AsyncStorage.getItem('userInfo');
            let userToken = await AsyncStorage.getItem('userToken');
            userInfo = JSON.parse(userInfo);
            if(userInfo){
                setUserToken(userToken);
                setUserInfo(userInfo);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(`isLogged in error: ${error}`);
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken, userInfo }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;