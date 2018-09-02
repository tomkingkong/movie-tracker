import React from 'react';
import { shallow } from 'enzyme';
import { API_KEY } from '../key';
import { discoverMovies, fetchUserFavorites, addUserFavorite } from './fetchApi';
import { mockMovie, hanksCredits } from './mockData';




describe('fetchApi', () => {
  let mockUrl;
  beforeEach(() => {
    mockUrl = 'bingo';
  })
  describe('discoverMovies', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve( hanksCredits )
      }));
    });
    
    it('should be invoked with correct params', async () => {
      const expected = `https://api.themoviedb.org/3/person/31/movie_credits?api_key=${API_KEY}&language=en-US`;

      await discoverMovies();

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it.skip('should return an object if status code ok', async () => {
      const expected = hanksCredits;

      await expect(discoverMovies()).resolves.toEqual(expected)
    })
  });

  describe('fetchUserFavorites', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(hanksCredits)
      }));
    });
    it('should be invoked with correct params', async () => {
      const expected = `http://localhost:3000/api/users/1/favorites`;

      await fetchUserFavorites(1);

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should return an object if status code is ok', async () => {
      await expect(fetchUserFavorites(1)).resolves.toEqual(hanksCredits);
    });

    it('should return an alert object if status code is not ok', async () => {
      const expected = {alert: 'Add to your favorites by selecting movies you like.'}
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.reject(expected)
      }));

       const result = await fetchUserFavorites(1);
       
       await expect(result).toEqual(expected);
    });
  });

  describe('addUserFavorite', () => {
    let mockOptions;
    beforeEach(() => {
      mockOptions = {
        method: 'POST',
        body: JSON.stringify({
          user_id: 1,
          ...mockMovie
        }),
        headers: {'Content-Type': 'application/json'}
      };

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(hanksCredits)
      }));
    });
    it('should be invoked with correct params', () => {
      const mockUrl = "http://localhost:3000/api/users/favorites/new"
      const expected = [mockUrl, mockOptions];

      addUserFavorite(1, mockMovie);
      expect(window.fetch).toHaveBeenCalledWith(...expected)
    });
  });
  describe('userSignUp', () => {
    it('should create a new user', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          id: 14
        })
      }));

      await userSignUp('wil', 'w@w', 'w');
      expect(window.fetch).toHaveBeenCalled();
    });
  });

  describe('userLogIn', () => {
    it('should be called with the correct params', async () => {
      const user = [
        "tman2272@aol.com",
        'password'
      ]
      const expected = ["http://localhost:3000/api/users",
      {
        method: 'POST',
        body: JSON.stringify(...user),
        headers: {
          'Content-Type': 'application/json'
        }
      }];

      await userLogIn(...user);

      expect(window.fetch).toHaveBeenCalledWith(...expected)
    });

    it('should return an alert if there is no user', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject({
        
      }));

      await expect(userLogIn('email', 'password')).resolves.toEqual({
        alert: 'Email and Password do not match.'
      });
  })
});   const result = await userSignUp(mockUser);

      expect(result).toEqual(expected)
    })
  });

  describe('userLogIn', () => {
    it('should be called with the correct params', async () => {
      const user = [
        "tman2272@aol.com",
        'password'
      ]
      const expected = ["http://localhost:3000/api/users",
      {
        method: 'POST',
        body: JSON.stringify(...user),
        headers: {
          'Content-Type': 'application/json'
        }
      }];

      await userLogIn(...user);

      expect(window.fetch).toHaveBeenCalledWith(...expected)
    });

    it('should return an alert if there is no user', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject({
        
      }));

      await expect(userLogIn('email', 'password')).resolves.toEqual({
        alert: 'Email and Password do not match.'
      });
    })
  });
});