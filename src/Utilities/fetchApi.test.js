import React from 'react';
import { shallow } from 'enzyme';
import { API_KEY } from '../key';
import { discoverMovies } from './fetchApi';
import { hanksCredits } from './mockData';



describe('fetchApi', () => {
  let mockUrl;
  beforeEach(() => {
    mockUrl = 'bingo';
  })
  describe('discoverMovies', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve( hanksCredits )
      }))
    })
    
    it('should be invoked with correct params', async () => {
      const expected = `https://api.themoviedb.org/3/person/31/movie_credits?api_key=${API_KEY}&language=en-US`

      await discoverMovies()

      expect(window.fetch).toHaveBeenCalledWith(expected)
    })
  })
})