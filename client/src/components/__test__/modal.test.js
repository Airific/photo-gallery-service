/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Modal from '../modal';

describe('Modal unit test', () => {
  const props = {
    imgList: [
      { url: 'abc', description: 'testing' },
    ],
  };

  it('renders without crashing', () => {
    const wrapper = render(<Modal imgList={props.imgList} />);
    expect(wrapper).toBeDefined();
  });
});
