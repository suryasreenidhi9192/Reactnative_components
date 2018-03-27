import React, { Component } from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

class ModalPopup extends Component {
  renderBackground = () => (
    <View style={ModalPopup.styles.backgroundView} />
  );
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
        onRequestClose={() => {}}
      >
        <TouchableWithoutFeedback>
          <View style={ModalPopup.styles.modal}>
            {this.props.children}
          </View>
        </TouchableWithoutFeedback>
        {this.renderBackground()}
      </Modal>
    );
  }
}

ModalPopup.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
};

ModalPopup.defaultProps = {
  visible: false,
};

ModalPopup.styles = StyleSheet.create({
  modal: {
    width: '100%',
    top: '33%',
    zIndex: 2,
  },
  backgroundView: {
    zIndex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ModalPopup;