import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#137cca',
    marginLeft: '8%',
    marginRight: '8%',
    width: '84%',
    height: 40,
    flexDirection: 'row',
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
