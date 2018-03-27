import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const LineSeparator = (props) => {
  const { height, backgroundColor, opacity } = props;
  return (<View
    style={{
      flex: 1,
      height,
      backgroundColor,
      opacity,
    }}
  />);
};

LineSeparator.propTypes = {
  backgroundColor: PropTypes.string,
  opacity: PropTypes.number,
  height: PropTypes.number,
};

LineSeparator.defaultProps = {
  height: StyleSheet.hairlineWidth,
  backgroundColor: '#8E8E8E',
  opacity: 1,
};

export default LineSeparator;
