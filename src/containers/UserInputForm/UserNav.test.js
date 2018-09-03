import React from 'react';
import { shallow } from 'enzyme';
import { UserNav, mapDispatchToProps, mapStateToProps } from './UserNav';
import { logoutUser, updateFavorites } from '../../actions';

describe('UserNav Component', () => {
  let wrapper;
  let user; 
  let clearFavorites; 
  let logout;

  beforeEach(() => {
    logout = jest.fn(); 
    clearFavorites = jest.fn();
    user = { name:'tim' };

    wrapper = shallow(
      <UserNav 
        logout={logout}
        clearFavorites={clearFavorites}
        user={user}
      />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should logout user and clear favorites on Log Out button click', () => {
    wrapper.find('button').simulate('click');
    expect(logout).toHaveBeenCalled();
    expect(clearFavorites).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {
    it('should return a user object', () => {
      const name = 'Tim';
      const id = 2;
      const email = 'foo@barr';
      const password = 'oops';
      const mockStore = {
        user: {name, id, email, password},
        movies: [],
        favorites: []
      };
      const expected = {
        user: {name, id, email, password}
      };
      const result = mapStateToProps(mockStore);
      expect(result).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should log out a user', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = logoutUser();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.logout();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should clear user\'s favorites on log out', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = updateFavorites([]);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.clearFavorites([]);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});
