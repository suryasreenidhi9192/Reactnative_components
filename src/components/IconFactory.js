import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

/** Place all the icons which gonna be using across the application */
const getIcon = (props) => {
  const { name, size, style } = props;
  let iconType;
  switch (name) {
    case 'checked':
      iconType = (<Icon
        name="done"
        size={size}
        color="#00ff00"
        style={style}
      />);
      break;
    case 'unchecked':
      iconType = (<Icon
        name="done"
        size={size}
        color="#999"
        style={style}
      />);
      break;
    case 'keyboard':
      iconType = (<Icon
        {...props}
        name="keyboard"
      />);
      break;
    case 'more-vert':
      iconType = (<Icon
        {...props}
        name="more-vert"
      />);
      break;
    case 'keyboard-arrow-down':
      iconType = (<Icon
        {...props}
        name="keyboard-arrow-down"
      />);
      break;
    case 'keyboard-arrow-up':
      iconType = (<Icon
        {...props}
        name="keyboard-arrow-up"
      />);
      break;
    default:
      break;
  }
  return iconType;
};

const IconFactory = props => (
  getIcon(props)
);

export default IconFactory;
