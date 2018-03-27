import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated
} from 'react-native';


export default class TextInputComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFocused: false,

    }
  }
  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false, });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,

    }).start();
  }

  render() {
    const { label, ...props } = this.props;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      paddingTop: 18,
      paddingRight: 20,
      paddingLeft: 15,
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
        outputRange: ['#aaa', '#176fc1'],
      }),


    };

    return (
      <View >
        <Animated.Text style={labelStyle}>
          {label}
        </Animated.Text>

        <TextInput
          {...props}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
          placeholderTextColor="rgba(0,0,0,0.42)"
          underlineColorAndroid='transparent'
        />


      </View>

    );
  }
}


