import React from 'react';
import { shallow } from 'enzyme';
import { API_KEY } from '../key';
import { discoverMovies, fetchUserFavorites } from './fetchApi';
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
      }))
    })
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
});