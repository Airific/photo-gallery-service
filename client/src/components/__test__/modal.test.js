/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'enzyme';
import Modal from '../modal';

describe('Modal unit test', () => {
  const props = {
    imgList: [
      { url: 'abc', description: 'testing' },
      { url: 'abc', description: 'testing' },
      { url: 'abc', description: 'testing' },
      { url: 'abc', description: 'testing' },
      { url: 'abc', description: 'testing' },
    ],
    savedList: [
      { name: 'check'},
      { name: 'check'},
      { name: 'check'},
    ]
  };

  it('renders without crashing', () => {
    const wrapper = render(<Modal imgList={props.imgList} savedList={props.savedList}/>);
    expect(wrapper).toBeDefined();
  });
});
