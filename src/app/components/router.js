import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';

//初始化全局变量,用于存储
var storage = new Storage({
    size: 1000,
    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
})
global.storage = storage;

import RegistPage from "../../login/RegistPage"
import SelectUser from "../../login/SelectUserType"
import PersonLogin from "../../login/PersonLogin"

//栈式导航
const router = StackNavigator({
    SelectUser: {screen: SelectUser},
    Regist: {screen: RegistPage},
    PersonLogin: {screen: PersonLogin},
}, {
    navigationOptions: {
        headerTintColor: '#444',
        headerStyle: {height: 44, backgroundColor: '#fff',},
        headerTitleStyle: {
            fontSize: 18, color: '#444', alignSelf: 'center',
        },
        headerBackTitle: null,
    }
});
module.exports = router
