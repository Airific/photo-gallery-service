/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import App from '../app';

describe('<App />', () => {
  it('renders one <div>', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div')).toExist();
  });
});
