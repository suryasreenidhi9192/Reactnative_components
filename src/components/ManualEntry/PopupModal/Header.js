import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#176fc1',
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
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
