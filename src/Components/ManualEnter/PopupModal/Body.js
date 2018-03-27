import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  body: {
    paddingTop: '3%',
    backgroundColor: '#fff',
    paddingLeft:10,
    paddingRight: 10,
  },
});

const Body = props => (
  <View style={styles.body}>
    {props.children}
  </View>
);

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

Body.defaultProps = {
};

export default Body;
