import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  badge: {
    width: 18,
    height: 18,
    borderRadius: 100 / 2,
    backgroundColor: '#FFFFFF',
    marginLeft: 5,
  },
  badgeText: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: '#017ACD',
    fontSize: 11,
    textAlignVertical: 'center',
    paddingTop: 2,
  },
});

const BadgeComponent = props => (
  <View style={styles.badge}>
    <Text style={styles.badgeText}>{props.badgeCount}</Text>
  </View>);

BadgeComponent.propTypes = {
  badgeCount: PropTypes.number.isRequired,
};

export default BadgeComponent;
