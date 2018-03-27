import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  divider: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const MenuDivider = props => (
  <View style={[
      styles.divider,
      { borderBottomColor: props.color },
      props.style,
    ]}
  />
);

MenuDivider.propTypes = {
  color: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
};

MenuDivider.defaultProps = {
  color: 'rgba(0,0,0,0.12)',
  style: {},
};

export default MenuDivider;

