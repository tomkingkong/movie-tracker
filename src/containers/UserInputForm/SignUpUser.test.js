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
      it('should set state when invoked', () => {
        const wrapper = shallow(<SignUpUser />);
        let e = {target:{value:'foo', name:'email'}}

        wrapper.instance().handleChange(e);
        expect(wrapper.state().email).toEqual('foo');

        e = {target:{value:'foo', name:'password'}}
        wrapper.instance().handleChange(e);
        expect(wrapper.state().password).toEqual('foo');

        e = {target:{value:'foo', name:'username'}}
        wrapper.instance().handleChange(e);
        expect(wrapper.state().username).toEqual('foo');
      });
    });

    describe('handleSubmit', () => {
      beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => (
          Promise.resolve({ json:() => Promise.resolve({id:1})})
        ))
        login = jest.fn(); 
        history = { push: jest.fn().mockImplementation(() => ({location:'/user'}))}
        alertUser = jest.fn();
        e = {preventDefault:jest.fn()}

        wrapper = shallow(
          <SignUpUser 
            login={login}
            history={history}
            alertUser={alertUser}
          />)
      })

      it('should call alertUser if fetch rejected', async () => {
        window.fetch = jest.fn().mockImplementation(() => (
          Promise.resolve({ json:() => Promise.reject()})
        ))
        await wrapper.instance().handleSubmit(e);
        expect(alertUser).toHaveBeenCalled();
      });

      it('should log in user if fetch passes', async () =>{
        await wrapper.instance().handleSubmit(e);
        expect(login).toHaveBeenCalled();
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