import React from 'react';
import { shallow } from 'enzyme';
import UserInputForm from '.';

describe('UserInputForm', () => {
  describe('UserInputForm Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<UserInputForm />);
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

  
});