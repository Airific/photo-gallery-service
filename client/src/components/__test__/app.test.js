/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../app';

describe('App component unit test', () => {
  it('should render the value of color', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ isLoad: true });
    expect(wrapper.state('isLoad')).toEqual(true);
  });

  it('renders without crashing', () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeDefined();
  });

  it('should have isLoad state', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toHaveState('isLoad');
  });
});
