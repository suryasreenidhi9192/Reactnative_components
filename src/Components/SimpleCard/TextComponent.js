import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TextComponent extends Component{
    render(){
        return(
            <View>
                <Text>{Name}</Text>
                <Text>{Date}</Text>
                </View>
        )
    }
}