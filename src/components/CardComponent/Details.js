import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#848587',
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Roboto',
    textAlign: 'left',
    paddingTop: 8,
    flex: 3,

  },
  details: {
    fontSize: 20,
    color: '#000000',
    paddingRight: 10,
    fontFamily: 'Roboto',
    textAlign: 'left',
    paddingTop: 8,
    flex: 4,

  },

});

const Details = props => (
  <View style={{ flexDirection: 'row', paddingTop: 15 }}>
    <Text style={styles.text}>{props.title}</Text>
    <Text style={styles.details}>{props.detail}</Text>
  </View>
);
Details.propTypes = {
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};
export default Details;
