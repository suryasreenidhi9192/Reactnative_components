import React, { Component } from 'react';
import {
    Modal,
    TouchableWithoutFeedback,
    View,
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    StatusBar
} from 'react-native';
import PropTypes from 'prop-types';
import TextInputComponent from '../common/TextInputComponent';

export default class Popup extends Component {
    render() {
        return (
            
            <TextInputComponent
                label='Popup'
                onChangeText={this.handleQuantityChange}
                style={styles.textInput}
                
            />
        
        )
    }
}

styles = StyleSheet.create({
textInput: {
    backgroundColor: 'rgba(0,0,0,0.06)',
    paddingLeft: 16,
    paddingTop: 30,
    justifyContent: 'space-around',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    justifyContent: 'center',
    //borderBottomWidth: 2,
    borderColor: '#c2c3c4',
    height: 80,
    width: '95%',
  },
})