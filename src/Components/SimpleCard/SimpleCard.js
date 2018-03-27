import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    fontFamily: 'Roboto',
    textAlign: 'left',
    paddingLeft: 10,
    fontStyle: 'normal',
    paddingTop:8
  },
  details: {
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'normal',
    paddingLeft: 10,
    paddingTop: 6,
    color: '#000',
  },
  card: {
    backgroundColor: '#ffffff',
    marginTop: 6,
    marginLeft: 6,
    marginRight: 6,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#dddddd',
    borderBottomWidth: 1,
    elevation: 3,
  },
  textStyle: {
    color: '#7c7c7c',
    fontSize: 15,
    fontStyle: 'italic',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 6,
  },
  iconStyle: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop:8,
    paddingBottom:8
  },
});


const SimpleCard = () => (
  <View style={styles.card}>

    <View>
      <Text style={styles.text}>Travis Kronow </Text>
      <Text style={styles.details}> 03/10/2017 | 03:38 AM </Text>
    </View>

    <View style={styles.iconStyle}>
      <Icon name="comment" size={25} color="#c45e23" />

      <Text style={styles.textStyle}>If you can't find Claiss Mix, I want Lay's Potato mix, 20 counts instead.</Text>
    </View>
  </View>
);
export default SimpleCard;



