import React from 'react';
import { shallow } from 'enzyme';
import LoginUser from './LoginUser';

describe('LoginUser', () => {
  describe('LoginUser Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<LoginUser />);
    })

    it('should match snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot()
    });

    describe('handleChange', () => {
      it('should set state when invoked', () => {

      });
    });

    describe('handleSubmit', () => {
      it('should set state when invoked', () => {

      });
    });
  })

  describe('mapStateToProps', () => {
    
  });

  describe('mapDispatchToProps', () => {

  });
});