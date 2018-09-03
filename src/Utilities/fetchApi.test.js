import { API_KEY } from '../key';
import { fetchCurry, fetchHanksMovies, signUpUserFetch, fetchFavorites, logInUserFetch, addFavoriteFetch, removeFavoriteFetch } from './fetchApi';
import { mockMovie, hanksCredits, cleanedHanksCredits } from './mockData';

describe('fetchCurry', () => {
  let database;

  beforeEach(() => {
    database = 'http://localhost:3000/api/users/';
  })

  it('should return with data', async () => {
    const mockUser = { email: 'tim@tim', password: 'password' };
    const expectedUserData = { name: 'Tim', email: 'tim@tim', password: 'password', id: 1 }

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
      json: () => Promise.resolve( expectedUserData )
      }));
    const result = await fetchCurry(database)()()()('POST')(mockUser);
    expect(result).toEqual(expectedUserData);
    });
    
  it('should return false if no data came back', async () => {
    const mockUser = { email: 'tim@tim', password: 'password' };
    const expectedUserData = { name: 'Tim', email: 'tim@tim', password: 'password', id: 1 }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.reject(expectedUserData)
    }));
    const result = await fetchCurry(database)()()()('POST')(mockUser);

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
  })

  describe('signUpUserFetch', () => {
    it('should take new user info and add to database', async () => {
      const mockUser = { 
        name: 'tim',
        email: 'tim@tim',
        password: 'password'
      }
      const mockUrl = "http://localhost:3000/api/users/new"
      const payload = {
        method: 'POST',
        body: JSON.stringify(mockUser),
        headers: {"Content-Type": "application/json"}
      }
      const expected = [mockUrl, payload];
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve( )
      }));
      await signUpUserFetch(mockUser);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
  })

  describe('fetchFavorites', () => {
    it('should take a user id and fetch favorites from database', async () => {
      const mockUrl =  "http://localhost:3000/api/users/13/favorites";
      const payload = {
        method: '',
        body: JSON.stringify({}),
        headers: {"Content-Type": "application/json"}
      }
      const expected = [mockUrl, payload];
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve( )
      }));
      await fetchFavorites(13);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
  });

    it('should return alert object if email has already been taken', async () => {
      const mockUser = {
        name: 'T',
        email: 'tman2272@aol.com',
        password: 'b'
        }
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false,
        json: () => Promise.reject({})
      }));

      const expected = {alert: 'Email has already been taken.'};

      await expect(userSignUp(mockUser)).resolves.toEqual(expected);
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