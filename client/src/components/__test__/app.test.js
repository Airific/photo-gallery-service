/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import { Gallery } from '../gallery';

import App from '../app';

describe('<App />', () => {
  it('renders one <div>', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('div')).toExist();
  });
});
