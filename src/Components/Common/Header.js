import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Header extends Component {
    render() {
        return (
            <View style={{
                height: 60,
                width: '100%',
                paddingTop: 15,
                borderColor: '#dddddd',
                borderBottomWidth: 1,
                shadowColor: '#a3a3a3',
                marginTop: 15,
                flexDirection:'row',
                
        elevation: 3,
            }}>
                <Icon name="map-marker" size={30} color='#000' style={{paddingRight:20,marginLeft:20,paddingTop:8, paddingBottom:8}}></Icon>
                <Text style={{fontSize:20, fontFamily:'roboto', color:'#444444', paddingTop:8, paddingBottom:8}}> H5 - 12 - 03 - 3456 </Text>
            </View>
        )
    }
}

