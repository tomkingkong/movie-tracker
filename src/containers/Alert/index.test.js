import React from 'react';
import { shallow } from 'enzyme';

import { Alert, mapStateToProps } from '.';

describe('Alert', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display an alert message', () => {
    const wrapper = shallow(<Alert alertMsg={'Alert!'} />);
    expect(wrapper.find('h4').text()).toEqual('Alert!');
  });

  describe('mapStateToProps', () => {
    it('should have access to movies and user\'s favorites arrays', () => {
      const mockStore = {
        alertMsg: 'Alert!'
      }
      const expected = {...mockStore}
      const result = mapStateToProps(mockStore);
      expect(result).toEqual(expected);
    });
  })
});
