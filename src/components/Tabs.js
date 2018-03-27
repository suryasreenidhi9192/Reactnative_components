import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  // Component container
  container: {
    flex: 1, // Take up all available space
  },
  // Tabs row container
  tabsContainer: {
    flexDirection: 'row', // Arrange tabs in a row
    paddingTop: 0, // Top padding
    backgroundColor: '#004C91',
    height: 50,
  },
  // Individual tab container
  tabContainer: {
    flex: 1, // Take up equal amount of space for each tab
    paddingVertical: 15, // Vertical padding
    borderBottomWidth: 3, // Add thick border at the bottom
    borderBottomColor: 'transparent', // Transparent border for inactive tabs
  },
  // Active tab container
  tabContainerActive: {
    borderBottomColor: '#FFC220', // White bottom border for active tabs
  },
  // Tab text
  tabText: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Content container
  contentContainer: {
    flex: 1, // Take up all available space
  },
});

export default class Tabs extends Component {
  // Initialize State
  state = {
    // First tab is active by default
    activeTab: 0,
  }

  renderTitle = (title) => {
    let titleComponent;
    if (typeof title === 'string') {
      titleComponent = (
        <Text style={styles.tabText}>
          {title}
        </Text>
      );
    }
    if (typeof title === 'function') {
      titleComponent = title();
    }
    return titleComponent;
  }

  // Pull children out of props passed from App component
  render({ children } = this.props) {
    return (
      <View style={styles.container}>
        {/* Tabs row */}
        <View style={styles.tabsContainer}>
          {/* Pull props out of children, and pull title out of props */}
          {children.map(({ props: { title } }, index) =>
            (
              <TouchableOpacity
                style={[
                  // Default style for every tab
                  styles.tabContainer,
                  // Merge default style with styles.tabContainerActive for active tab
                  index === this.state.activeTab ? styles.tabContainerActive : [],
                ]}
                // Change active tab
                onPress={() => this.setState({ activeTab: index })}
                // Required key prop for components generated returned by map iterator
                key={`tab_${title}`}
              >
                {this.renderTitle(title)}
              </TouchableOpacity>
            ))
          }
        </View>
        {/* Content */}
        <View style={styles.contentContainer}>
          {children[this.state.activeTab]}
        </View>
      </View>
    );
  }
}
