import React from 'react';
import { shallow } from 'enzyme';
import { SignUpUser, mapDispatchToProps } from './SignUpUser';
import { loginUser } from '../../actions';

describe('SignUpUser', () => {
  describe('SignUpUser Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<SignUpUser />);
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

    describe('handleChange', () => {
      it('should be invoked when name is changed', () => {
        const spy = spyOn(wrapper.instance(), 'handleChange');
        wrapper.instance().forceUpdate();
        const mockEvent = {target: { name: 'name', value: 'wil'}};

        wrapper.find('.name-input').simulate('change', mockEvent);
        expect(spy).toHaveBeenCalled();
      });

      it('should be invoked when email is changed', () => {
        const spy = spyOn(wrapper.instance(), 'handleChange');
        wrapper.instance().forceUpdate();
        const mockEvent = {target: { name: 'email', value: 'wil@yahoo.com'}};

        wrapper.find('.email-input').simulate('change', mockEvent);
        expect(spy).toHaveBeenCalled();
      });

      it('should be invoked when password is changed', () => {
        const spy = spyOn(wrapper.instance(), 'handleChange');
        wrapper.instance().forceUpdate();
        const mockEvent = {target: { name: 'password', value: 'bingo'}};

        wrapper.find('.password-input').simulate('change', mockEvent);
        expect(spy).toHaveBeenCalled();
      });

      it('should set state when invoked', () => {
        const mockEvent = {target: { name: 'email', value: 'wil@yahoo.com'}}

        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state().email).toBe('wil@yahoo.com');
      });
    });

    describe('handleSubmit', () => {
      it('should invoke handleSubmit when form is submitted', () => {
        const spy = spyOn(wrapper.instance(), 'handleSubmit');
        const mockEvent = {preventDefault: jest.fn()};
        wrapper.instance().forceUpdate();

        wrapper.find('form').simulate('submit', mockEvent);
        expect(spy).toHaveBeenCalled();
      });
    });
  });
  describe('mapDispatchToProps', () => {
    it('should dispatch loginUser action when login is invoked', () => {
      const mockUser = {
        name: 'wil',
        email: 'a@a',
        password: 'wil'
      };
      const mockDispatch = jest.fn();
      const actionToDispatch = loginUser(mockUser)
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.login(mockUser)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
});