import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing } from 'react-native';

class Collapsible extends Component {
  state = {
    measuring: false,
    measured: false,
    height: new Animated.Value(this.props.collapsedHeight),
    contentHeight: 0,
    animating: false,
  };
  componentWillReceiveProps(nextProps) {
    if (!nextProps.collapsed && this.props.collapsed) {
      this.setState({ measured: false }, () =>
        this.checkForProps(nextProps));
    } else {
      this.checkForProps(nextProps);
    }
  }
  checkForProps(nextProps) {
    if (nextProps.collapsed !== this.props.collapsed) {
      this.toggleCollapsed(nextProps.collapsed);
    } else if (
      nextProps.collapsed &&
      nextProps.collapsedHeight !== this.props.collapsedHeight
    ) {
      this.state.height.setValue(nextProps.collapsedHeight);
    }
  }
  contentHandle = null;
  handleRef = (ref) => {
    this.contentHandle = ref;
  }
  handleLayoutChange = (event) => {
    const contentHeight = event.nativeEvent.layout.height;
    if (
      this.state.animating ||
      this.state.collapsed ||
      this.state.measuring
    ) {
      return;
    }
    this.state.height.setValue(contentHeight);
    this.setState({
      ...this.state,
      contentHeight,
    });
  }
  toggleCollapsed = (collapsed) => {
    if (collapsed) {
      this.transitionToHeight(collapsed, this.props.collapsedHeight);
    } else if (!this.contentHandle) {
      if (this.state.measured) {
        this.transitionToHeight(collapsed, this.state.contentHeight);
      }
    } else {
      this.measureContent(contentHeight =>
        this.transitionToHeight(collapsed, contentHeight));
    }
  }
  measureContent = (callback) => {
    this.setState({
      measuring: true,
    }, () => {
      requestAnimationFrame(() => {
        if (!this.contentHandle) {
          this.setState({
            measuring: false,
          }, () => callback(this.props.collapsedHeight));
        } else {
          this.contentHandle.getNode().measure((x, y, width, height) => {
            this.setState({
              measuring: false,
              measured: true,
              contentHeight: height,
            }, () => callback(height));
          });
        }
      });
    });
  }
  transitionToHeight = (collapsed, height) => {
    const { duration } = this.props;
    if (this.animation) {
      this.animation.stop();
    }
    let easing;
    if (collapsed) {
      easing = Easing.in(Easing.cubic);
    } else {
      easing = Easing.out(Easing.cubic);
    }
    this.setState({ animating: true });
    this.animation = Animated.timing(this.state.height, {
      toValue: height,
      duration,
      easing,
    }).start(() => this.setState({ animating: false }));
  }
  render() {
    const { collapsed } = this.props;
    const {
      height,
      contentHeight,
      measuring,
      measured,
    } = this.state;
    const hasKnownHeight = !measuring && (measured || collapsed);
    const style = hasKnownHeight && {
      overflow: 'hidden',
      height,
    };
    const contentStyle = {};
    if (measuring) {
      contentStyle.position = 'absolute';
      contentStyle.opacity = 0;
    } else if (this.props.align === 'center') {
      contentStyle.transform = [
        {
          translateY: height.interpolate({
            inputRange: [0, contentHeight],
            outputRange: [contentHeight / -2, 0],
          }),
        },
      ];
    } else if (this.props.align === 'bottom') {
      contentStyle.transform = [
        {
          translateY: height.interpolate({
            inputRange: [0, contentHeight],
            outputRange: [-contentHeight, 0],
          }),
        },
      ];
    }
    return (
      <Animated.View style={style} pointerEvents={collapsed ? 'none' : 'auto'}>
        <Animated.View
          ref={this.handleRef}
          style={[this.props.style, contentStyle]}
          onLayout={this.state.animating ? undefined : this.handleLayoutChange}
        >
          {this.props.children}
        </Animated.View>
      </Animated.View>
    );
  }
}

Collapsible.propTypes = {
  collapsed: PropTypes.bool,
  collapsedHeight: PropTypes.number,
  align: PropTypes.oneOf(['top', 'center', 'bottom']),
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  duration: PropTypes.number,
};

Collapsible.defaultProps = {
  collapsed: true,
  collapsedHeight: 0,
  align: 'top',
  style: {},
  duration: 300,
};

export default Collapsible;
