import React from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modalText: {
    marginLeft: '3%',
    marginRight: '3%',
    width: '94%',
    textAlignVertical: 'center',
    color: '#fff',
  },
});

const ModalMessage = props => (
  <Modal
    visible={props.visible}
    transparent
    animationType="fade"
    onRequestClose={() => true}
  >
    <TouchableWithoutFeedback>
      <View style={[
          styles.modal,
          {
            top: props.top,
            height: props.height,
          },
        ]}
      >
        <Text style={styles.modalText}>
          {props.message}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

ModalMessage.propTypes = {
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  top: PropTypes.number,
  height: PropTypes.number,
};

ModalMessage.defaultProps = {
  visible: false,
  top: Dimensions.get('window').height - 50 - getStatusBarHeight(),
  height: 50,
};

export default ModalMessage;
