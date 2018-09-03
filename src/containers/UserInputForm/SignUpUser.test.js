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
  
      it('should push user to new browser page of /user if fetch passes', async () =>{
        await wrapper.instance().handleSubmit(e);
        expect(history.push).toHaveBeenCalled();
      });
    });
  });

  describe('mapDispatchToProps', () => {
    it('should log in a new user', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = loginUser({});
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.login({});
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call alert message if email or password incorrect', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = alertUser('');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.alertUser('');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  })
});