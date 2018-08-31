import React from 'react';
import { shallow } from 'enzyme';
import { SignUpUser, mapStateToProps, mapDispatchToProps } from './SignUpUser';

describe('SignUpUser', () => {
  describe('SignUpUser Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<SignUpUser />);
    });

    it('should match snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot()
    });

    describe('handleChange', () => {
      it('should set state when invoked', () => {
        const mockEvent = {target: { name: 'email', value: 'wil@yahoo.com'}}

        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state().email).toBe('wil@yahoo.com');
      });
    });
  });
});