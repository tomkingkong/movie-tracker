import React from 'react';
import { shallow } from 'enzyme';

import { LogInUser, mapDispatchToProps } from './LogInUser';
import { loginUser, updateFavorites, alertUser } from '../../actions';


describe('LogInUser', () => {
  describe('LogInUser Component', () => {
    let wrapper;
    let login; 
    let history; 
    let updateFavorites; 
    let alertUser;
    let e;

    beforeEach(() => {
      login = jest.fn(); 
      history = { push: jest.fn().mockImplementation(() => ({location:'/user'}))}
      updateFavorites = jest.fn();
      alertUser = jest.fn();
      e = {preventDefault:jest.fn()}

      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({ json:() => Promise.resolve({data:{id:1}})})
      ))

      wrapper = shallow(
        <LogInUser 
          login={login}
          history={history}
          updateFavorites={updateFavorites}
          alertUser={alertUser}
        />)
    })

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call a reset on alert user on link to sign up', () => {
      wrapper.find('NavLink').simulate('click');
      expect(alertUser).toHaveBeenCalled();
    });

    describe('handleChange', () => {
      it('should set state when invoked', () => {
        const wrapper = shallow(<LogInUser />);
        let e = {target:{value:'foo', name:'email'}}

        wrapper.instance().handleChange(e);
        expect(wrapper.state().email).toEqual('foo');

        e = {target:{value:'foo', name:'password'}}
        wrapper.instance().handleChange(e);
        expect(wrapper.state().password).toEqual('foo');
      });
    });

    describe('handleSubmit', () => {
      beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => (
          Promise.resolve({ json:() => Promise.resolve({data:{id:1}})})
        ))
        login = jest.fn(); 
        history = { push: jest.fn().mockImplementation(() => ({location:'/user'}))}
        updateFavorites = jest.fn();
        alertUser = jest.fn();
        e = {preventDefault:jest.fn()}

        wrapper = shallow(
          <LogInUser 
            login={login}
            history={history}
            updateFavorites={updateFavorites}
            alertUser={alertUser}
          />)
      })

      it('should call alertUser if fetch rejected', async () => {
        window.fetch = jest.fn().mockImplementation(() => {
          Promise.resolve({ json:() => Promise.reject()})
        })
        await wrapper.instance().handleSubmit(e);
        expect(alertUser).toHaveBeenCalled();
      });
  
      it('should fetch user favorites if log in fetch passes', async () =>{
        await wrapper.instance().handleSubmit(e);
        expect(updateFavorites).toHaveBeenCalled();
    });

      it('should log in user if fetch passes', async () =>{
        await wrapper.instance().handleSubmit(e);
        expect(login).toHaveBeenCalled();
      });
    
  });

  describe('mapDispatchToProps', () => {

  });
});