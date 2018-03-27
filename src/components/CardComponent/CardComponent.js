import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Details from './Details';


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    marginTop: 6,
    marginLeft: 6,
    marginRight: 6,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#dddddd',
    borderBottomWidth: 1,
    shadowColor: '#a3a3a3',
    elevation: 3,
  },
  image: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 37,
    width: 160,
    height: 160,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'roboto',
    color: '#000',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.icons = {
      up: <Icon name="angle-down" size={30} color="#c45e23" />,
      down: <Icon name="angle-up" size={30} color="#c45e23" />,
    };
    this.state = {
      status: false,
    };
  }
  ShowHideTextComponentView = () => {
    if (this.state.status === true) {
      this.setState({ status: false });
    } else {
      this.setState({ status: true });
    }
  }


  render() {
    let icon = this.icons.up;
    if (this.state.status === true) {
      icon = this.icons.down;
    }

    return (
      <View style={styles.card}>

        <Text id="product-title" style={styles.textStyle}>Frito-Lay Family Fun Mix Chips Variety Pack, 20 Count, 18.875 oz </Text>
        <View style={{ alignItems: 'center', paddingTop: 15 }}>

          <Image id="image" style={styles.image} />
        </View>
        <View>
          <Details id="Qty to Pick" title="Qty to Pick" detail="3/5" />
          <Details id="Price" title="Price" detail="5.98" />
          <View>
            <Details id="UPC" title="UPC" detail="123456789" />
            <TouchableOpacity
              onPress={this.ShowHideTextComponentView}
              style={{
                position: 'absolute',
                paddingTop: 20,
                paddingRight: 20,
                alignSelf: 'flex-end',
              }}
            >
              <Icon>{icon}</Icon>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {
            this.state.status ? <View><Details id="OSN" title="OSN" detail="1190" /><Details id="OnHand"title="On Hand" detail="12" /></View> : null
          }
        </View>
      </View>
    );
  }
}

