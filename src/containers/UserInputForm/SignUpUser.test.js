import React from 'react';
import { shallow } from 'enzyme';

import { SignUpUser, mapDispatchToProps } from './SignUpUser';
import { loginUser, alertUser } from '../../actions';


describe('SignUpUser', () => {
  describe('SignUpUser Component', () => {
    let wrapper;
    let login; 
    let history; 
    let alertUser;
    let e;

    beforeEach(() => {
      login = jest.fn(); 
      history = { push: jest.fn().mockImplementation(() => ({location:'/user'}))}
      alertUser = jest.fn();
      e = {preventDefault:jest.fn()}

      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({ json:() => Promise.resolve({id:1})})
      ))

      wrapper = shallow(
        <SignUpUser 
          login={login}
          history={history}
          alertUser={alertUser}
        />)
    })

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

    it('should call a reset on alert user on link to log in', () => {
      wrapper.find('NavLink').simulate('click');
      expect(alertUser).toHaveBeenCalled();
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

    describe.skip('handleSubmit', () => {
      it('should invoke handleSubmit when form is submitted', () => {
        const spy = spyOn(wrapper.instance(), 'handleSubmit');
        const mockEvent = {preventDefault: jest.fn()};
        wrapper.instance().forceUpdate();

        wrapper.find('form').simulate('submit', mockEvent);
        expect(spy).toHaveBeenCalled();
      });

      it('should invoke alertUser if userInfo has alert', () => {
        const mockAlertUser = jest.fn();
        const mockEvent = { preventDefault: jest.fn() }
        wrapper = shallow(<SignUpUser alertUser={mockAlertUser} />);
        wrapper.setState({userInfo: {alert: 'bingo'}});
        wrapper.instance().handleSubmit(mockEvent)

        expect(mockAlertUser).toHaveBeenCalled()
      });
    });
  });
  describe('mapDispatchToProps', () => {
    it.skip('should dispatch loginUser action when login is invoked', () => {
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
    });

    it.skip('should dispatch alertUser action when alertUser is invoked', () => {
      const mockMessage = { alert: 'Email has already been taken.' };
      const mockDispatch = jest.fn();
      const actionToDispatch = alertUser(mockMessage);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.alertUser(mockMessage);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});