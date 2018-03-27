import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Body, PopupModal } from './PopupModal';
import TextInputComponent from '../ManualEntry/TextInputComponent';

const styles = StyleSheet.create({

  textInput: {
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    paddingLeft: 16,
    paddingTop: 30,
    fontSize: 16,
    fontFamily: 'Roboto',
    justifyContent: 'center',
    borderBottomWidth: 0.8,
    borderColor: 'rgb(0,0,0);opacity:0.8',
    color: 'rgba(0, 0, 0, 0.82)',
  },
  button: {
    backgroundColor: '#fff',
    paddingLeft: 70,

  },
  buttonText: {
    fontSize: 20,
    padding: 20,
    color: '#377be8',
    fontWeight: '500',
  },
  error: {
    borderBottomColor: '#e62716',
    borderBottomWidth: 2,
  },
  Headerstyle: {
    fontSize: 30,
    color: '#000',
    fontFamily: 'roboto',
    fontWeight: '500',
    paddingLeft: 10,
    paddingTop: 6,
  },
  bodyStyle: {
    fontSize: 20,
    fontFamily: 'roboto',
    color: '#898a8c',
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop: 10,
    fontWeight: '400',
  },
  Input: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  errorButton: {
    paddingLeft: 135,
    fontFamily: 'roboto',
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'left',
    paddingTop: 19,
    paddingRight: 8,
    paddingBottom: 9.5,
    color: '#000',
  },
});

export default class PrinterPopup extends Component {
  constructor() {
    super();

    this.state = {
      PrinterBarcode: '',
      PrinterBarcodevalidate: true,
    };
  }
    PrinterBarcodechange = (newText) => {
      this.setState({ PrinterBarcode: newText });
      // if (this.state.PrinterBarcode.length === '' || this.state.PrinterBarcode.length < 4) {
      //   this.setState({
      //     PrinterBarcodevalidate: true,

      //   });
      // } else {
      //   this.setState({
      //     PrinterBarcodevalidate: false,
      //   });
      // }
    }


    render() {
      const isEnabled = {};

      return (
        <PopupModal visible>
          <Header>
            <Text style={styles.Headerstyle}> Scan Printer </Text>
          </Header>
          <Body>
            <Text style={styles.bodyStyle}>
           Please Connect printer. Activation code(s) will be printed with this order.
            </Text>
            <View style={styles.Input}>
              <TextInputComponent
                label="Printer Barcode"
                value={this.state.PrinterBarcode}
                onChangeText={this.PrinterBarcodechange}
                style={[styles.textInput, !this.state.PrinterBarcodevalidate ? styles.error : null]}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={this.onPressButton}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>CANCEL</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.onPressButton} disabled={!isEnabled}>
                <View style={[styles.button, !isEnabled ? styles.errorButton : null]}>
                  <Text style={styles.buttonText}>ADD</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Body>

        </PopupModal>
      );
    }
}

