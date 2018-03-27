import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class TextComponent extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text style={styles.text}></Text>
                    <View style={{ flex: 6 }}><Text style={styles.text}> 03/10/2017 | 03:38 AM</Text></View>
                </View>
                <View style={styles.card}>
                    <View style={{ flex: 3 }}>
                        <Icon name="comment" size={30} color='#c45e23'></Icon>
                    </View>
                    <View style={{ flex: 6 }}><Text style={{ color: '#7c7c7c', fontSize: 15, fontStyle: 'italic' }}>adkjskdakmsdlkmalksdmlkasfhk asdjkhfka alskjdfh alsjdf ljf asldjk</Text></View>
                </View>
            </View>
        )
    }
}
