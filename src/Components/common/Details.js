import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Details extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                <View style={{ flex: 3 }} ><Text style={styles.text}>{this.props.title}</Text></View>
                <View style={{ flex: 5 }}><Text style={styles.details}>{this.props.detail}</Text></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#848587',
        flex: 3,
        paddingLeft: 10
    },
    details: {
        fontSize: 20,
        color: '#000000',
        paddingLeft: 10
    },

});