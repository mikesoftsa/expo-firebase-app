import React from "react";
import RestaurantsScreen from "../screens/Restaurants/Restaurants";
import AddRestaurantScreen from "../screens/Restaurants/AddRestaurant";
import DetailRestaurantScreen from "../screens/Restaurants/DetailRestaurant";
import LogoutScreen from "../screens/Logout";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

const navigationOptions = {
    defaultNavigationOptions: {
        headerStyle:{
            backgroundColor: 'rgba(200, 38, 74, 1)'
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
};

const leftIcon = (navigation, icon) => <Icon 
    name={icon}
    style={{marginLeft: 20}}
    size={20}
    color="white"
    onPress={() => navigation.openDrawer()}
/>;

const rightIcon = (navigation, icon) => <Icon 
    name={icon}
    style={{marginRight: 20 }}
    size={30}
    color="white"
    onPress={() => navigation.navigate('ListRestaurants')}
/>;

const restaurantsScreenStack = createStackNavigator(
    {
        ListRestaurants:{
            screen: RestaurantsScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Restaurantes',
                headerLeft: leftIcon(navigation, 'bars')
            })
        },
        AddRestaurant: {
            screen: AddRestaurantScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Añadir restaurante',
                headerRight: rightIcon(navigation, 'home'),
                headerLeft: leftIcon(navigation, 'bars')
            })
        },
        DetailRestaurant: {
            screen: DetailRestaurantScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Detalle del restaurante',
                headerRight: rightIcon(navigation, 'home'),
                headerLeft: leftIcon(navigation, 'bars')
            })
        }

    },
    navigationOptions
);

const logoutScreenStack = createStackNavigator(
    {
        LogoutScreen:{
            screen: LogoutScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Restaurantes',
                headerLeft: leftIcon(navigation, 'bars')
            })
        }
    },
    navigationOptions
);





const RootStack = createDrawerNavigator(
    {
        RestaurantsScreen: {
            screen: restaurantsScreenStack,
            navigationOptions: ({ navigation }) => ({
                drawerLabel: 'Restaurantes',
                drawerIcon: ({tintColor}) => (<Icon name="home" size={30} style={{color: tintColor}} />),
              })
        },
        LogoutScreen: {
            screen: logoutScreenStack,
            navigationOptions: ({ navigation }) => ({
                drawerLabel: 'Cerrar sesión',
                drawerIcon: ({tintColor}) => (<Icon name="sign-out" size={30} style={{color: tintColor}} />),
              })
        }
    },
    {
        drawerBackgroundColor: 'rgba(128, 35, 60, 0.7)',
        contentOptions: {
                activeTintColor: 'white',
                activeBackgroundColor: 'transparent',
                inactiveTintColor: 'white',
                itemsContainerStyle: {
                    marginVertical: 0
                }
        },
        defaultNavigationOptions: navigationOptions
    }
);

export default createAppContainer(RootStack)

