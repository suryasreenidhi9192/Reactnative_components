import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import ManualEntry from '../ManualEnter/ManualEntry';
export default class Footer extends Component {
    // openModal() {
    //     this.setState({ modalVisible: true });
    // }
    // closeModal() {
    //     this.setState({ modalVisible: false });
    // }

    render() {
        return (
            <View style={{borderWidth:1, borderColor:'#000',
            }}>

            <ManualEntry /> 
            
            </View>
        )
    }
}