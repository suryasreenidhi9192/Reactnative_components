import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    padding: 10,
  },
  radio: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default class RadioButton extends Component {
  getRadioStyle() {
    return {
      height: this.context.size,
      width: this.context.size,
      borderRadius: this.context.size / 2,
      borderWidth: this.context.thickness,
      borderColor: this.props.isSelected &&
      this.props.activeColor ? this.props.activeColor : this.context.color,
    };
  }

  getRadioDotStyle() {
    return {
      height: this.context.size / 2,
      width: this.context.size / 2,
      borderRadius: this.context.size / 4,
      backgroundColor: this.props.color || this.props.activeColor,
    };
  }

  isSelected() {
    let selectedView;
    if (this.props.isSelected) {
      selectedView = <View style={this.getRadioDotStyle()} />;
    }
    return selectedView;
  }
  render() {
    const { children } = this.props;
    return (
      <View style={{ opacity: this.props.disabled ? 0.4 : 1 }}>
        <TouchableWithoutFeedback
          disabled={this.props.disabled}
          onPress={() => this.context.onSelect(this.props.index, this.props.value)}
        >
          <View style={[styles.container,
            this.props.style,
            this.props.isSelected ? { backgroundColor: this.context.highlightColor } : null]}
          >
            <View style={[styles.radio, this.getRadioStyle()]}>
              {this.isSelected()}
            </View>
            <View style={styles.item}>
              {children}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

RadioButton.contextTypes = {
  onSelect: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  highlightColor: PropTypes.string,
  style: PropTypes.shape({}),
};

RadioButton.propTypes = {
  isSelected: PropTypes.func,
  children: PropTypes.shape({}),
  index: PropTypes.number,
  value: PropTypes.string,
  style: PropTypes.shape({}),
  activeColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

RadioButton.defaultProps = {
  isSelected: () => true,
  children: {},
  index: 0,
  value: '',
  style: {},
  disabled: false,
};

