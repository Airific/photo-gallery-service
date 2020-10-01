/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'enzyme';
import Slider from '../slider';

describe('Slider unit test', () => {
  const props = {
    imgList: [
      { url: 'abc', description: 'testing' },
      { url: 'abc', description: 'testing' },
      { url: 'abc', description: 'testing' },
      { url: 'abc', description: 'testing' },
      { url: 'abc', description: 'testing' },
    ],
    count: 1,
  };

  it('renders without crashing', () => {
    const wrapper = render(<Slider imgList={props.imgList} count={props.count} />);
    expect(wrapper).toBeDefined();
  });
});
