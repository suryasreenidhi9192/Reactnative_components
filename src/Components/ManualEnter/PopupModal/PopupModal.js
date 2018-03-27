import React, { Component } from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';


class PopupModal extends Component {
  
  render() {
    const supportedOrientations = [
      'portrait',
      'portrait-upside-down',
      'landscape',
      'landscape-left',
      'landscape-right',
    ];
    return (
      <Modal
        transparent
        animationType="fade"
        visible={this.props.visible}
        supportedOrientations={supportedOrientations}
        onRequestClose={() => true} >
        <TouchableWithoutFeedback>
          <View >
            {this.props.children}
          </View>
        </TouchableWithoutFeedback>
        
      </Modal>
    );
  }
}

PopupModal.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
};

PopupModal.defaultProps = {
  visible: false,
};

export default PopupModal;
