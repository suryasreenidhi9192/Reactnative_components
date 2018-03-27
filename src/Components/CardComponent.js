import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ListView
} from 'react-native';

import Details from './common/Details';
export default class CardComponent extends Component {
    render() {
        return (

            <View style={styles.container}>

                <Details title='Product Title' detail='Frito-Lay Family Fun Mix Chips Variety Pack, 20 Count, 18.875 oz ' />
                <View style={{ alignItems: 'center', paddingTop: 15 }}>
                    <Image source={require('../Images/my-icon.jpeg')} style={{ height: 160, width: 160, }} />
                </View>
                <Details title='Qty to Pick' detail='3/5' />
                <Details title='Price' detail='5.98' />

                <View><Details title='UPC' detail='123456789' /></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        marginTop: 15,
        marginLeft: 25,
        marginRight: 25,
        borderWidth: 3,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#dddddd',
        borderBottomWidth: 1,
        shadowColor: '#a3a3a3',
        elevation: 3,
    }
});
