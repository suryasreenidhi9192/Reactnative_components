import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PopupModal from './PopupModal/PopupModal';
import Header from './PopupModal/Header';
import Body from './PopupModal/Body';
import TextInputComponent from './TextInputComponent';


const styles = StyleSheet.create({

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
    paddingTop: 16,
  },
  text: {
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 6,
  },
  HeaderText: {
    paddingLeft: 80,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 6,
    paddingBottom: 3,
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  textstyle: {
    flexDirection: 'row',
    paddingLeft: 6,
    paddingRight: 10,
  },
  textInput: {
    backgroundColor: 'rgba(0,0,0,0.06)',
    paddingLeft: 16,
    paddingTop: 30,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    justifyContent: 'center',
    // borderBottomWidth: 2,
    borderColor: '#c2c3c4',
    height: 80,
    width: '95%',
  },
  input: {
    justifyContent: 'space-around',
    borderColor: 'rgba(0,0,0,0.42)',
    borderRadius: 7,
    height: 90,

  },
  body: {
    marginLeft: 12,
    paddingTop: 10,
  },

  iconStyle: {
    flex: 4,
    paddingTop: 10,
    paddingLeft: 10,
  },
  error: {
    borderBottomColor: 'red',
    borderWidth: 2,
  },
  errorTextStyle: {
    color: 'red',
  },
});

class ManualEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      UPC: '',
      Quantity: '',
      SerialNumber: '',
      QuantityValidate: true,
      UPCValidate: true,
      SerialNumberValidate: true,
      // error: '',

    };
  }

  //   UPCerror() {
  //     this.setState({ error: 'UPC Failed' });
  //   }
  //   Quantityerror() {
  //     this.setState({ error: 'Quantity Failed' });
  //   }
  //   SerialNumbererror() {
  //     this.setState({ error: 'SerialNumber Failed' });
  //   }
    // handleTextChange = (newText) => this.setState({ value: newText });
    handleQuantityChange = (newText) => {
      this.setState({ Quantity: newText });
      // if (this.state.Quantity.length === '' || this.state.Quantity.length < 4) {
      //   this.setState({
      //     QuantityValidate: true,
      //   });
      // } else {
      //   this.setState({
      //     QuantityValidate: false,
      //   });
      // }
    }


    handleUPCChange = (newText) => {
      this.setState({ UPC: newText });
      // if (this.state.UPC.length === '') {
      //   this.setState({
      //     UPCValidate: true,
      //   });
      // } else {
      //   this.setState({
      //     UPCValidate: false,
      //   });
      // }
    }

    handleSerialNumberChange = (newText) => {
      this.setState({ SerialNumber: newText });
      // if (this.state.SerialNumber.length === '') {
      //   this.setState({
      //     SerialNumberValidate: true,
      //   });
      // } else {
      //   this.setState({
      //     SerialNumberValidate: false,
      //   });
      // }
    }


    handlePick = () => {
      const { UPC, Quantity } = this.state;
      Alert(`Pick: ${UPC} password: ${Quantity}`);
    }
    openModal() {
      this.setState({ modalVisible: true });
    }
    closeModal() {
      this.setState({ modalVisible: false });
    }


    render() {
      const { UPC, Quantity } = this.state;
      const isEnabled =
            UPC.length === 4 &&
            Quantity.length === 5;

      return (
        <View style={styles.input}>
          <PopupModal visible={this.state.modalVisible}>
            <Header style={styles.header}>

              <TouchableOpacity
                onPress={() => this.closeModal()}
                title="Close modal"
              >
                <Icon
                  name="times"
                  size={25}
                  color="#fff"
                  style={{
                                    flex: 4,
                                    paddingTop: 10,
                                    paddingLeft: 10,
                                }}
                />
              </TouchableOpacity>
              <Text
                style={styles.HeaderText}
              >
                            Manual Entry
              </Text>

              <TouchableOpacity
                onPress={() => this.handlePick()}
                title="Close modal"
                disabled={!isEnabled}
              >
                <Text style={styles.HeaderText}>
                                PICK
                </Text>
              </TouchableOpacity>

            </Header>

            <Body style={styles.body}>

              <TextInputComponent
                label="UPC"
                value={this.state.UPC}
                onUPCChangeText={this.handleUPCChange}
                style={[styles.textInput,
                            !this.state.UPCValidate ? styles.error : null]}
                keyboardType="numeric"
              />

              <Text style={styles.errorTextStyle}>
                {this.state.UPCerror}
              </Text>


              <TextInputComponent
                label="Quantity"
                value={this.state.Quantity}
                onQuantityChangeText={this.handleQuantityChange}
                style={[styles.textInput,
                            !this.state.QuantityValidate ? styles.error : null]}
                keyboardType="numeric"
              />
              <Text style={styles.errorTextStyle}>
                {this.state.Quantityerror}
              </Text>

              <TextInputComponent
                label="Serial Number"
                value={this.state.SerialNumber}
                onSerialNumberChangeText={this.SerialNumberChange}
                style={[styles.textInput,
                            !this.state.SerialNumberValidate ? styles.error : null]}
                keyboardType="numeric"
              />
              <Text style={styles.errorTextStyle}>
                {this.state.SerialNumbererror}
              </Text>


            </Body>

          </PopupModal>
          <Button
            onPress={() => this.openModal()}
            title="Manual Entry"
          />
        </View>
      );
    }
}

export default ManualEntry;
