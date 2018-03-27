import React, { Component } from 'react';
import {

  StyleSheet,
  View,
  TextInput,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  textinput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,

  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 10,
    width: 10,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

});

export default class TextInputComponent extends Component {
  constructor(props) {
    super(props);

    this.clear = this.clear.bind(this);
  }
  componentWillMount() {
    this.animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

  componentDidUpdate() {
    Animated.timing(this.animatedIsFocused, {
      toValue: (this.props.isFocused || this.props.value !== '') ? 1 : 0,

    }).start();
  }
/*eslint-disable */
    onClick = () => this.setState({ isFocused: true });
    clear() {
      this.input.clear();
    }

    handleBlur = () => this.setState({ isFocused: false });
    handleFocus = () => this.setState({ isFocused: true });
  /* eslint-enable */
    render() {
      const { label } = this.props;
      const labelStyle = {
        position: 'absolute',
        paddingTop: 15,
        fontFamily: 'Roboto',
        paddingLeft: 19,
        top: this.animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [18, 0],
        }),
        fontSize: this.animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 14],
        }),
        color: this.animatedIsFocused.interpolate({
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
              handleBlur={this.handleBlur}
              onFocus={this.handleFocus}
              isFocused={this.props.isFocused}
              blurOnSubmit
              placeholderTextColor="rgba(0,0,0,0.42)"
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity
              style={{
                        position: 'absolute', paddingTop: 20, paddingLeft: 40, paddingRight: 30, alignSelf: 'flex-end',
                    }}
              onPress={this.clear}
            >
              <Image
                style={{ height: 20, width: 20 }}
              />
            </TouchableOpacity >

          </View>
        </View>
      );
    }
}

TextInputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  isFocused: PropTypes.bool.isRequired,
};
