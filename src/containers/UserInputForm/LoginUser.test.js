import React from 'react';
import { shallow } from 'enzyme';
import LogInUser from './LogInUser';

describe('LogInUser', () => {
  describe('LogInUser Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<LogInUser />);
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