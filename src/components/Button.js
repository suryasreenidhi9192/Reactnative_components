import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Button = props => (
  <TouchableOpacity
    onPress={props.onPress}
    disabled={props.disabled}
  >
    {props.children}
  </TouchableOpacity>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
