/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../app';

describe('App component unit test', () => {
  const props = {
    imgList: [
      { url: 'abc', description: 'testing' },
      { url: 'abc', description: 'testing' },
      { url: 'abc', description: 'testing' },
      { url: 'abc', description: 'testing' },
      { url: 'abc', description: 'testing' },
    ],
    showModal: false,
    showSlider: false,
    isSaved: false,
    count: 1,
    // handleSavedClick: jest.fn(),
  };

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

  it('check showModal state with .saveBtn click', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      isLoad: true, count: 1, imgList: props.imgList, showModal: props.showModal,
    });
    const minButton = wrapper.find('button');
    minButton.find('.saveBtn').simulate('click');
    expect(wrapper.state().showModal).toBe(true);
  });

  it('check showSlider state with .showAll click', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      isLoad: true, count: 1, imgList: props.imgList, showSlider: props.showSlider,
    });
    const minButton = wrapper.find('button');
    minButton.find('.showAll').simulate('click');
    expect(wrapper.state().showSlider).toBe(true);
  });

  it('check isSaved state with .saveBtn click', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      isLoad: true, count: 1, imgList: props.imgList, isSaved: props.isSaved,
    });
    const minButton = wrapper.find('span');
    minButton.find('.cancel').simulate('click');
    expect(wrapper.state().isSaved).toBe(false);
  });

  it('check count state increase by 1 with .right click', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      isLoad: true, count: 1, imgList: props.imgList,
    });
    const minButton = wrapper.find('button');
    minButton.find('.right').simulate('click');
    expect(wrapper.state().count).toBe(2);
  });

  it('check count state decrease by 1 with .left click', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      isLoad: true, count: 1, imgList: props.imgList,
    });
    const minButton = wrapper.find('button');
    minButton.find('.left').simulate('click');
    expect(wrapper.state().count).toBe(0);
  });
});
