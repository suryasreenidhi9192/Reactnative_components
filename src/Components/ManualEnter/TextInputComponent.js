import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Animated,
    Image,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class TextInputComponent extends Component {
    constructor(props) {
        super(props)

        this.clear = this.clear.bind(this);

    }
    componentWillMount() {
        this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
    }

    componentDidUpdate() {
        Animated.timing(this._animatedIsFocused, {
            toValue: (this.props.isFocused || this.props.value !== '') ? 1 : 0,

        }).start();
    }
    clear() {
        this.input.clear();
    }
    // onClick = () => this.setState({ isFocused: true });

    handleBlur = () => this.setState({ isFocused: false });
    handleFocus = () => this.setState({ isFocused: true });

    render() {

        const { label, ...props, } = this.props;
        const labelStyle = {
            position: 'absolute',
            paddingTop: 15,
            fontFamily: 'Roboto',
            fontSize: 8,
            paddingLeft: 19,
            top: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [18, 0],
            }),
            fontSize: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 14],
            }),
            color: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: ['rgba(0, 0, 0, 0.42)', '#017acd'],

            }),

        };

        return (
            <View style={styles.textinput}>
                <Animated.Text style={labelStyle}>
                    {label}
                </Animated.Text>
                <View style={styles.SectionStyle}>

                    <TextInput
                        style={{ flex: 1 }}
                        ref={(input) => { this.input = input; }}
                        {...props}
                        handleBlur={this.handleBlur}
                        onFocus={this.handleFocus}
                        isFocused={this.props.isFocused}
                        blurOnSubmit
                        placeholderTextColor="rgba(0,0,0,0.42)"
                        underlineColorAndroid='transparent'

                    />
                    <TouchableOpacity style={{
                        position: 'absolute', paddingTop: 20, paddingLeft: 40, paddingRight: 30, paddingTop: 10, alignSelf: 'flex-end'
                    }}
                        onPress={this.clear}>
                        <Image source={require('./images/cross.png')} style={{
                            height: 20, width: 20,

                        }} /></TouchableOpacity >

                </View>
            </View>
        );
    }
}


styles = StyleSheet.create({
    textinput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10

    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 10,
        width: 10,
        resizeMode: 'stretch',
        alignItems: 'center'
    },

});