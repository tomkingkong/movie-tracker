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
      it('should be invoked when name is changed', () => {
        const spy = spyOn(wrapper.instance(), 'handleChange');
        wrapper.instance().forceUpdate();
        const mockEvent = {target: { name: 'name', value: 'wil'}};

        wrapper.find('.name-input').simulate('change', mockEvent);
        expect(spy).toHaveBeenCalled();
      });
      it('should set state when invoked', () => {
        const mockEvent = {target: { name: 'email', value: 'wil@yahoo.com'}}

        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state().email).toBe('wil@yahoo.com');
      });
    });
  });
});