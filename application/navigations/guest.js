import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import StartScreen from '../screens/Start';
import LoginScreen from '../screens/Login';

const AppNavigator = createStackNavigator(
    {
        Start: {
            screen: StartScreen
        },
        Login: {
            screen: LoginScreen
        }
    },
    {
        initialRouteName: 'Start',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center',
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
                flex: 1
            }
        }
    }

)

export default createAppContainer(AppNavigator);