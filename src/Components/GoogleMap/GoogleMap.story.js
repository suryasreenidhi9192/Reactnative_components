import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import GoogleMap from './index';

storiesOf('GoogleMap', module)
  .add('', () => (<GoogleMap>Hello GoogleMap</GoogleMap>));
