import { API_KEY } from '../key';
import { 
  fetchCurry, 
  fetchHanksMovies, 
  signUpUserFetch, 
  fetchFavorites, 
  logInUserFetch, 
  addFavoriteFetch, 
  removeFavoriteFetch 
} from './fetchApi';
import { mockMovie, hanksCredits, cleanedHanksCredits } from './mockData';

describe('fetchCurry', () => {
  let database;

  beforeEach(() => {
    database = 'http://localhost:3000/api/users/';
  });

  it('should return with data', async () => {
    const mockUser = { email: 'tim@tim', password: 'password' };
    const expectedUserData = { name: 'Tim', email: 'tim@tim', password: 'password', id: 1 };

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve( expectedUserData )
    }));
    const result = await fetchCurry(database)()('POST')(mockUser);
    expect(result).toEqual(expectedUserData);
  });
  
  it('should return false if no data came back', async () => {
    const mockUser = { email: 'tim@tim', password: 'password' };
    const expectedUserData = { name: 'Tim', email: 'tim@tim', password: 'password', id: 1 };
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.reject(expectedUserData)
    }));
    const result = await fetchCurry(database)()('POST')(mockUser);

    expect(result).toEqual(false);
  });

  describe('fetchHanksMovies', () => {
    it('should return Tom Hanks movies', async () => {
      const expected = cleanedHanksCredits;
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve( hanksCredits )
      }));
      const result = await fetchHanksMovies();
      expect(result).toEqual(expected);
    });

    it('should be called with the correct params', async () => {
      const expected = [`https://api.themoviedb.org/3/person/31/movie_credits?api_key=${API_KEY}&language=en-US`, {}];
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve( )
      }));
      await fetchHanksMovies();
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
  });

  describe('signUpUserFetch', () => {
    it('should take new user info and add to database', async () => {
      const mockUser = { 
        name: 'tim',
        email: 'tim@tim',
        password: 'password'
      };
      const mockUrl = "http://localhost:3000/api/users/new";
      const mockPayload = {
        method: 'POST',
        body: JSON.stringify(mockUser),
        headers: {"Content-Type": "application/json"}
      };
      const expected = [mockUrl, mockPayload];
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve( )
      }));
      await signUpUserFetch(mockUser);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
  });

  describe('fetchFavorites', () => {
    it('should take a user id and fetch favorites from database', async () => {
      const mockUrl =  "http://localhost:3000/api/users/13/favorites";
      const mockPayload = {
        method: '',
        body: JSON.stringify({}),
        headers: {"Content-Type": "application/json"}
      };
      const expected = [mockUrl, mockPayload];
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve( )
      }));
      await fetchFavorites(13);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
  });

  describe('logInUserFetch', () => {
    it('should take a user and add to database', async () => {
      const mockUser = {
        email: 'email@email',
        password: 'password'
      };
      const mockUrl =  "http://localhost:3000/api/users/";
      const mockPayload = {
        method: 'POST',
        body: JSON.stringify(mockUser),
        headers: {"Content-Type": "application/json"}
      };
      const expected = [mockUrl, mockPayload];
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve( )
      }));
      await logInUserFetch(mockUser);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
  });

  describe('addFavoriteFetch', () => {
    it('should take a movie and add to database', async () => {
      const mockUrl = "http://localhost:3000/api/users/favorites/new";
      const mockPayload = {
        method: 'POST',
        body: JSON.stringify(mockMovie),
        headers: {"Content-Type": "application/json"}
      };
      const expected = [mockUrl, mockPayload];
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve( )
      }));
      await addFavoriteFetch(mockMovie);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
  });

  describe('removeFavoriteFetch', () => {
    it('should take a user id and movie id and remove favorite from database', async () => {
      const mockUrl = "http://localhost:3000/api/users/1/favorites/13";
      const mockPayload = {
        method: 'DELETE',
        body: JSON.stringify({user_id: 1, movie_id:13}),
        headers: {"Content-Type": "application/json"}
      };
      const expected = [mockUrl, mockPayload];
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve( )
      }));
      await removeFavoriteFetch(1, 13);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
  });
});
