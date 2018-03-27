import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

const Header = props => (
  <View style={styles.header}>
    {props.children}
  </View>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
};

export default Header;
