import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes as RNViewPropTypes } from 'react-native';
import Collapsible from './Collapsible';
import LineSeparator from './LineSeparator';

const ViewPropTypes = RNViewPropTypes || View.propTypes;
const ViewProps = Object.keys(ViewPropTypes);
const CollapsibleProps = Object.keys(Collapsible.propTypes);

class Accordion extends Component {
  state = {
    activeSection: -1,
  };
  toggleSection = (key) => {
    let activeSection = key;
    if (this.state.activeSection === key) {
      activeSection = -1;
    }
    this.setState({ activeSection });
    this.props.onChange(activeSection);
  }
  render() {
    const viewProps = {};
    const collapsibleProps = {};
    Object.keys(this.props).forEach((key) => {
      if (CollapsibleProps.indexOf(key) !== -1) {
        collapsibleProps[key] = this.props[key];
      } else if (ViewProps.indexOf(key) !== -1) {
        viewProps[key] = this.props[key];
      }
    });
    return (
      <View key="accordion" {...viewProps}>
        {
          this.props.section.map((section, key) => (
            <View key={`row_${section.title}`}>
              {this.props.renderHeader(key, !(this.state.activeSection === key))}
              <Collapsible
                collapsed={this.state.activeSection !== key}
                {...collapsibleProps}
              >
                {this.props.renderContent(key, !(this.state.activeSection === key))}
              </Collapsible>
              <LineSeparator />
            </View>
          ))
        }
      </View>
    );
  }
}

Accordion.propTypes = {
  section: PropTypes.arrayOf(PropTypes.any).isRequired,
  onChange: PropTypes.func,
  // touchableProps: TouchableHighlight.propTypes,
  renderHeader: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,
};

Accordion.defaultProps = {
  onChange: () => true,
  // touchableProps: {},
};

export default Accordion;
