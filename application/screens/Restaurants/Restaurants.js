import React, { Component } from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import PreLoader from '../../components/PreLoader';
import { StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as firebase from 'firebase';

import { NavigationActions } from 'react-navigation';
import RestaurantEmpty from '../../components/Restaurant/RestaurantEmpty';
import RestaurantAddButton from '../../components/Restaurant/RestaurantAddButton';

export default class Restaurants extends Component {
    constructor(){
        super();
        this.state = {
            restaurants: [],
            loaded: false,
            restaurant_logo: require('../../../assets/images/restaurant.png')
        };

        this.refRestaurants = firebase.database().ref().child('restaurants')
    }

    addRestaurant(){
        const navigateAction = NavigationActions.navigate({
            routeName: 'AddRestaurant'
        });
        this.props.navigation.dispatch(navigateAction);
    }

    restaurantDetail(restaurant){
        
    }

    componentDidMount() {
        this.refRestaurants.on('value', snapshot => {
            let restaurants = [];
            snapshot.forEach(row => {
                restaurants.push({
                    id: row.key,
                    name: row.val().name,
                    address: row.val().address,
                    capacity: row.val().capacity,
                    descripcion: row.val().descripcion
                })
            });
            this.setState({
                restaurants,
                loaded: true
            });
        });
    }

}

const styles = StyleSheet.create({
    title:{
        color: '#fff'
    },
    listIconStyle: {
        marginRight: 10,
        fontSize:15,
        color: 'rgba(255, 38, 74, 0.6)'
    },
    item: {
        padding: 0,
        backgroundColor: 'rgba(206 , 206, 206, 0.6)'
    }

});