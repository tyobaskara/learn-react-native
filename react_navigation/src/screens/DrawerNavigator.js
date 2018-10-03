import React, { Component } from "react";
import {
    StyleSheet
} from "react-native";

import { DrawerNavigator, StackNavigator } from 'react-navigation'

import HomeScreenTabNavigator from './HomeScreenTabNavigator'

const InnerStackNavigator = new StackNavigator({
    TabNavigator: {
        screen: HomeScreenTabNavigator
    }
})

const AppDrawerNavigator = new DrawerNavigator({
    HomeScreen: { screen: InnerStackNavigator }
})


export default AppDrawerNavigator;