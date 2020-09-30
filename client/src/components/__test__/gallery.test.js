/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Gallery from '../gallery';

describe('Gallery unit test', () => {
  const props = {
    imgList: [
      { url: 'abc', description: 'testing' },
      { url: 'abc', description: 'testing' },
      { url: 'abc', description: 'testing' },
      { url: 'abc', description: 'testing' },
      { url: 'abc', description: 'testing' },
    ],
    showModal: false,
    handleSavedClick: jest.fn(),
  };

  it('renders without crashing', () => {
    const wrapper = render(<Gallery imgList={props.imgList} />);
    expect(wrapper).toBeDefined();
  });
});
