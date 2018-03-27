import React from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';
// import PropTypes from 'prop-types';


const PopupModal = () => {
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
      onRequestClose={() => true}
    >
      <TouchableOpacity>
        <View >
          {this.props.children}
        </View>
      </TouchableOpacity>

    </Modal>
  );
};

PopupModal.propTypes = {
  // children: PropTypes.node.isRequired,
  // visible: PropTypes.bool,
};

PopupModal.defaultProps = {
  // visible: false,
};

export default PopupModal;
