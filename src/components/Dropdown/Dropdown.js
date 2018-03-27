import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import styles from './styles';

class Dropdown extends Component {
  /*
    this.button is the reference to the dropdown button
    this.buttonFrame is the object corresponding to the frame containing the button
      which contains 4 values:-
        x and y are positions of the corner of the button and
        w and h are the width and height of the button frame respectively
  */
  state = {
    showDropdown: false,
  };
  onButtonPress = () => {
    if (this.state.showDropdown) {
      this.hide();
    } else {
      this.show();
    }
  }
  onListItemPress = (data) => {
    this.props.onSelect(data);
    this.hide();
  }
  /*
    getPosition function returns the style such that
      the list of items that gets displayed is exactly below the
      dropdown button
  */
  getPosition = () => {
    const dimensions = Dimensions.get('window');
    const windowWidth = dimensions.width;
    const windowHeight = dimensions.height;
    const dropdownHeight = (this.props.listItemHeight + StyleSheet.hairlineWidth) * this.numItems;
    const bottomSpace = windowHeight - this.buttonFrame.y - this.buttonFrame.h;
    const rightSpace = windowWidth - this.buttonFrame.x;
    const showInBottom = bottomSpace >= dropdownHeight
      || bottomSpace >= this.buttonFrame.y;
    const showInLeft = rightSpace >= this.buttonFrame.x;
    const style = {
      height: dropdownHeight,
      top: showInBottom ? this.buttonFrame.y + this.buttonFrame.h
        : Math.max(0, this.buttonFrame.y - dropdownHeight),
    };
    if (showInLeft) {
      style.left = this.buttonFrame.x;
    } else {
      style.right = rightSpace - this.buttonFrame.w;
    }
    return style;
  }
  numItems = (this.props.options.length > 4) ? 4 : this.props.options.length;
  // updates the value of buttonFrame corresponding to the position of the button
  updatePosition(callback) {
    if (this.button && this.button.measure) {
      this.button.measure((fx, fy, width, height, px, py) => {
        this.buttonFrame = {
          x: px,
          y: py,
          w: width,
          h: height,
        };
        callback();
      });
    }
  }
  show = () => {
    this.updatePosition(() => {
      this.setState({
        showDropdown: true,
      });
    });
  }
  hide = () => {
    this.setState({
      showDropdown: false,
    });
  }
  keyExtractor = data => `row_${data.index}`
  // renders the item in the dropdown list
  renderItem = ({ item: data }) => {
    const highlighted = data.index === this.props.selectedIndex;
    return (
      <TouchableHighlight
        style={[
          this.props.styles.row,
          { height: this.props.listItemHeight },
          highlighted && this.props.styles.highlightedRowText,
          !highlighted && this.props.styles.normalRowText,
        ]}
        onPress={() => this.onListItemPress(data)}
      >
        <Text
          style={this.props.styles.rowText}
        >
          {data.value}
        </Text>
      </TouchableHighlight>
    );
  }
  renderSeparator = () => (
    <View style={this.props.styles.separator} />
  );
  // creates list for the dropdown
  renderDropdown = () => (
    <FlatList
      scrollEnabled
      style={this.props.styles.list}
      data={this.props.options}
      renderItem={this.renderItem}
      ItemSeparatorComponent={this.renderSeparator}
      keyExtractor={this.keyExtractor}
      automaticallyAdjustContentInsets={false}
    />
  )
  renderIcon = () => {
    if (this.state.showDropdown) {
      return <Icon style={this.props.styles.buttonIcon} name="keyboard-arrow-down" />;
    }
    return <Icon style={this.props.styles.buttonIcon} name="keyboard-arrow-up" />;
  }
  // dropdown button
  renderButton = () => (
    <TouchableOpacity
      ref={(button) => {
        this.button = button;
      }}
      accessible
      onPress={this.onButtonPress}
    >
      <View style={[
          this.props.styles.button,
          { height: this.props.listItemHeight },
        ]}
      >
        <Text style={this.props.styles.buttonText}>
          {
            (this.props.selectedIndex === -1) ? this.props.defaultValue :
              this.props.options[this.props.selectedIndex].value
          }
        </Text>
        {this.renderIcon()}
      </View>
    </TouchableOpacity>
  );
  // dropdown list of items
  renderModal = () => {
    if (this.state.showDropdown && this.buttonFrame) {
      const frameStyle = this.getPosition();
      const supportedOrientations = [
        'portrait',
        'portrait-upside-down',
        'landscape',
        'landscape-left',
        'landscape-right',
      ];
      return (
        <Modal
          animationType="fade"
          visible
          transparent
          onRequestClose={() => this.hide()}
          supportedOrientations={supportedOrientations}
        >
          <TouchableWithoutFeedback
            accessible
            onPress={() => this.hide()}
            disabled={!this.state.showDropdown}
          >
            <View style={this.props.styles.modal}>
              <View style={[this.props.styles.dropdown,
                  frameStyle,
                  {
                    height: (this.props.listItemHeight +
                    StyleSheet.hairlineWidth) * this.numItems,
                  },
                ]}
              >
                {this.renderDropdown()}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      );
    }
    return null;
  }
  render() {
    return (
      <View style={this.props.styles.container}>
        {this.renderButton()}
        {this.renderModal()}
      </View>
    );
  }
}

Dropdown.propTypes = {
  // selectedIndex is the index of the default value that should be displayed
  selectedIndex: PropTypes.number,
  // options is the list which makes the dropdown
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  // defaultValue is the value that will be displayed if no value has been selected yet
  defaultValue: PropTypes.string,
  // callback function corresponding to the selection for the item in dropdown list
  onSelect: PropTypes.func.isRequired,
  // listItemHeight is the height that you want to specify for each item of the dropdown
  listItemHeight: PropTypes.number,
  // styling for the dropdown
  styles: PropTypes.objectOf(PropTypes.object),
};

Dropdown.defaultProps = {
  selectedIndex: -1,
  defaultValue: 'Please select...',
  listItemHeight: 40,
  styles,
};

export default Dropdown;
