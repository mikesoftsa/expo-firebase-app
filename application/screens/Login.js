import React, { Component } from 'react';
import { View } from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import t from 'tcomb-form-native';
import FormValidation from "../utils/validation";
import { Card } from "react-native-elements";
const Form = t.form.Form;
import * as firebase from "firebase";
import Toast from 'react-native-simple-toast';

export default class Login extends Component {
    constructor(){
        super();

        this.user = t.struct({
            email: FormValidation.email,
            password: FormValidation.password
        });

        this.options = {
            fields: {
                email: {
                    help: 'Introduce tu email',
                    error: 'Email incorrecto',
                    autoCapitalize: 'none',

                },
                password: {
                    help: 'Introduce tu email',
                    error: 'Email incorrecto',
                    password: true,
                    secureTextEntry: true,
                }
            }
        }
    }

    login(){

    }

    render(){
        return(
            <BackgroundImage source={require('../../assets/images/login-bg.png')}>
                <View>
                    <Card wrapperStyle={{paddingLeft: 10}} title="Iniciar sesión">
                        <Form
                            ref="form"
                            type={ this.user }
                            options={this.options}
                        >

                        </Form>
                    </Card>
                </View>
            </BackgroundImage>
        );
    }
}