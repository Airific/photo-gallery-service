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
    headInfo: [
      {
        superhost: true, title: 'tahoe', address: '111 hello st', reviews: 3, totalReviews: 200,
      },
    ],
    showModal: false,
    showSlider: false,
    isSaved: false,
    count: 1,
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

  // tests for gallery component

  it('check showModal state change with .saveBtn click', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      isLoad: true,
      count: 1,
      imgList: props.imgList,
      showModal: props.showModal,
      headInfo: props.headInfo,
    });
    const minButton = wrapper.find('button');
    minButton.find('.saveBtn').simulate('click');
    expect(wrapper.state().showModal).toBe(true);
  });

  it('check showSlider state change with .showAll click', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      isLoad: true,
      count: 1,
      imgList: props.imgList,
      showSlider: props.showSlider,
      headInfo: props.headInfo,
    });
    const minButton = wrapper.find('button');
    minButton.find('.showAll').simulate('click');
    expect(wrapper.state().showSlider).toBe(true);
  });

  it('check showSlider state change with image click', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      isLoad: true,
      count: 1,
      imgList: props.imgList,
      showSlider: props.showSlider,
      headInfo: props.headInfo,
    });
    const minButton = wrapper.find('img');
    minButton.find('img').at(4).simulate('click');
    expect(wrapper.state().showSlider).toBe(true);
  });

  it('check isSaved state does not change with .cancel click', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      isLoad: true,
      count: 1,
      imgList: props.imgList,
      isSaved: props.isSaved,
      headInfo: props.headInfo,
    });
    const minButton = wrapper.find('span');
    minButton.find('.cancel').simulate('click');
    expect(wrapper.state().isSaved).toBe(false);
  });

  // tests for slider component

  it('check count state increase by 1 with one .right click', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      isLoad: true, count: 1, imgList: props.imgList, headInfo: props.headInfo,
    });
    const minButton = wrapper.find('button');
    minButton.find('.right').simulate('click');
    expect(wrapper.state().count).toBe(2);
  });

  it('check count state decrease by 1 with one .left click', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      isLoad: true, count: 1, imgList: props.imgList, headInfo: props.headInfo,
    });
    const minButton = wrapper.find('button');
    minButton.find('.left').simulate('click');
    expect(wrapper.state().count).toBe(0);
  });

  // test for modal component

  it('check isSaved state change with list item click', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      isLoad: true,
      count: 1,
      imgList: props.imgList,
      isSaved: props.isSaved,
      headInfo: props.headInfo,
    });
    const minButton = wrapper.find('p');
    minButton.find('.top').at(0).simulate('click');
    expect(wrapper.state().isSaved).toBe(true);
  });
});
