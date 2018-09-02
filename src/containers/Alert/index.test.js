import React from 'react';
import { shallow } from 'enzyme';

import { Alert } from '.';

describe('Alert', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display an alert message', () => {
    const wrapper = shallow(<Alert alertMsg={'Alert!'} />);
    expect(wrapper.find('h4').text()).toEqual('Alert!');
  });
});
