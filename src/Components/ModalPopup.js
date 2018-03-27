import React, { Component } from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StatusBar
} from 'react-native';
import PropTypes from 'prop-types';
import TextInputComponent from './TextInputComponent';
import Icon from 'react-native-vector-icons/FontAwesome';

class ModalPopup extends Component {
  constructor() {
    super();

    this.state = {
      modalVisible: false,
      borderBottomColor: '#ffffff',
      value: '',
      UPC: '',
      Quantity: '',
      QuantityValidate: true,
      UPCValidate: true,

    }
  }


  //handleTextChange = (newText) => this.setState({ value: newText });
  handleQuantityChange = (newText) => {
    this.setState({ Quantity: newText });
    if (this.state.Quantity.length == '' || this.state.Quantity.length < 4) {
      this.setState({
        QuantityValidate: true,
      })
    }
    else {
      this.setState({
        QuantityValidate: false,
      })
    }
  }


  handleUPCChange = (newText) => {
    this.setState({ UPC: newText });
    if (this.state.UPC.length == '' || this.state.UPC.length < 4) {
      this.setState({
        UPCValidate: true,
      })
    }
    else {
      this.setState({
        UPCValidate: false,
      })
    }
  }


  handlePick = () => {
    const { UPC, Quantity } = this.state;
    alert(`Pick: ${UPC} password: ${Quantity}`);
  }
  openModal() {
    this.setState({ modalVisible: true });
  }
  closeModal() {
    this.setState({ modalVisible: false });
  }
  modelClose() {

  }



  render() {
    const supportedOrientations = [
      'portrait',
      'portrait-upside-down',
      'landscape',
      'landscape-left',
      'landscape-right',
    ];
    const { UPC, Quantity } = this.state;
    const isEnabled =
      UPC.length == 4 &&
      Quantity.length < 5;
    return (
      <View style={styles.input}>
        <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}
          onRequestClose={() => this.modelClose}>
          <View style={styles.header}>

            <TouchableOpacity
              onPress={() => this.closeModal()}
              title="Close modal">
              <Icon name="times"
                size={25} color="#fff"
                style={styles.iconStyle}>
              </Icon>
            </TouchableOpacity>


            <Text style={styles.HeaderText}>
              Manual Entry
             </Text>

            <TouchableOpacity
              onPress={() => this.handlePick()}
              title="Close modal"
              disabled={!isEnabled}>
              <Text style={styles.HeaderText}>
                PICK
            </Text>
            </TouchableOpacity>

          </View>

          <View style={{ marginLeft: 12, paddingTop: 10 }}>
            <StatusBar hidden />
            <TextInputComponent
              label="UPC"
              value={this.state.UPC}
              onChangeText={this.handleUPCChange}
              style={[styles.textInput,
              !this.state.UPCValidate ? styles.error : null]}
              keyboardType='numeric'
            />


            <View style={styles.text}>
              <Text>Enter UPC</Text>
              <Text style={styles.textstyle}>
                123456
              </Text>
            </View>

            <TextInputComponent
              label='Quantity'
              value={this.state.Quantity}
              onChangeText={this.handleQuantityChange}
              style={[styles.textInput,
              !this.state.QuantityValidate ? styles.error : null]}
              keyboardType='numeric'
            />


            <View style={styles.text}>
              <Text>4</Text>
              <Text style={styles.textstyle}>
                Quantity to pick
              </Text>
            </View>

          </View>
        </Modal>

        <Button
          onPress={() => this.openModal()}
          title="Manual Entry"
        />
      </View>
    );
  }
}



ModalPopup.defaultProps = {
  visible: false,
};

styles = StyleSheet.create({
  modal: {
    width: '100%',
    top: '33%',
    zIndex: 2,
  },

  header: {
    backgroundColor: '#176fc1',
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text: {
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 6,
    paddingBottom: 3,
  },
  HeaderText: {
    paddingLeft: 80,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 6,
    paddingBottom: 3,
    color: '#ffffff',
    fontSize: 23,
    fontWeight: 'bold'
  },
  textstyle: {
    flexDirection: 'row',
    paddingLeft: 6,
    paddingRight: 10
  },
  textInput: {
    backgroundColor: 'rgba(0,0,0,0.06)',
    paddingLeft: 16,
    paddingTop: 30,
    justifyContent: 'space-around',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    justifyContent: 'center',
    //borderBottomWidth: 2,
    borderColor: '#c2c3c4',
    height: 80,
    width: '95%'
  },
  input: {
    justifyContent: 'space-around',
    borderColor: 'rgba(0,0,0,0.42)',
    borderRadius: 7,
    height: 90,
  },

  iconStyle: {
    flex: 4,
    paddingTop: 6,
    paddingLeft: 10
  },
  error: {
    borderBottomColor: 'red',
    borderWidth: 2
  }
});

export default ModalPopup;











