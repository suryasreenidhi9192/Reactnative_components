import React, { Component } from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
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

class PopupModal extends Component {
  renderBackground = () => (
    <View style={styles.backgroundView} />
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
        onRequestClose={() => true} >
        <TouchableWithoutFeedback>
          <View style={styles.modal}>
            {this.props.children}
          </View>
        </TouchableWithoutFeedback>
        {this.renderBackground()}
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
