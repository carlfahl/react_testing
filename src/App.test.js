import React from 'react';
import {shallow} from 'enzyme';

import App from './App';



test('app returns a div', () => {
  expect(shallow(<App />).is('div')).toBe(true);
});
