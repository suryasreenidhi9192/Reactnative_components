import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class SimpleCard extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.card}>
                    <View style={{ flex: 3 }}><Text style={styles.text}>Travis</Text></View>
                    <View style={{ flex: 6 }}><Text style={styles.text}> 03/10/2017 | 03:38 AM</Text></View>
                </View>
                <View style={styles.card}>
                    <View style={{ flex: 3 }}>
                        <Icon name="comment" size={30} color='#c45e23'></Icon>
                    </View>
                    <View style={{ flex: 6 }}><Text style={{ color: '#7c7c7c', fontSize: 15, fontStyle: 'italic' }}>adkjskdakmsdlkmalksdmlkasfhk asdjkhfka alskjdfh alsjdf ljf asldjk</Text></View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    container: {
        height: 110,
        width: 350,
        paddingTop: 15,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#dddddd',
        borderBottomWidth: 1,
        shadowColor: '#a3a3a3',
        elevation: 3,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 15
    },
    card:{
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        paddingLeft: 10,
        paddingBottom: 10,
    
    }
});