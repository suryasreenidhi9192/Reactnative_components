import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: 'center',
    maxWidth: 248,
    minWidth: 124,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 16,
  },
});

const MenuItem = props => (
  <TouchableHighlight
    disabled={props.disabled}
    onPress={props.onPress}
    style={[styles.container, props.style]}
    underlayColor={props.underlayColor}
  >
    <Text
      numberOfLines={1}
      style={[
        styles.title,
        props.disabled && props.disabledTextStyle,
        !props.disabled && props.textStyle,
      ]}
    >
      {props.children}
    </Text>
  </TouchableHighlight>
);

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  disabledTextStyle: PropTypes.objectOf(PropTypes.any),
  textStyle: PropTypes.objectOf(PropTypes.any),
  style: PropTypes.objectOf(PropTypes.any),
  underlayColor: PropTypes.string,
};

MenuItem.defaultProps = {
  disabled: false,
  onPress: () => true,
  disabledTextStyle: {
    color: 'rgb(189,189,189)',
  },
  textStyle: {},
  style: {},
  underlayColor: 'rgb(224,224,224)',
};

export default MenuItem;
