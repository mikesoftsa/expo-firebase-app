import React, { Component } from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import PreLoader from '../../components/PreLoader';
import { StyleSheet, FlatList, View} from 'react-native';
import { Card, Divider, Text } from 'react-native-elements';
import * as firebase from 'firebase';
import CommentEmpty from './CommentEmpty';

export default class CommentList extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            loaded: false,
        };

          
    }

    componentDidMount(){
        firebase.database().ref(`comments/${this.props.restaurantId}`).on('value', snapshot => {
            let comments = [];
            snapshot.forEach(row => {
                comments.push({
                    id: row.key,
                    rating: row.val().rating,
                    comment: row.val().comment
                })
            });
            this.setState({
                comments,
                loaded: true
            })
        })
    }

    render(){
        const { comments, loaded } = this.state;

        if(!loaded){
            return( <PreLoader/>);
        }

        if(!comments.length){
            return (
                <CommentEmpty />
            )
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}> Opiniones </Text>
                <Divider style={styles.divider}/>
                <Card>
                    <FlatList 
                        data={comments}
                        renderItem={(data)=>this.renderComment(data.item)}
                    />
                </Card>
            </View>
        )
    }

    renderComment(comment){
        return (
            <Text>{comment.comment}</Text>
        )
    }


    
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
		marginTop: 10,
		marginBottom: 10
	},
	title: {
		fontSize: 22,
		color: 'white',
		textAlign: 'center'
	},
	divider: {
		backgroundColor: 'red',
	}
});