import { cleanMovieData } from './Cleaner';

describe('cleanMovieData', () => {
  it('should return an a cleaned movie object', () => {
    const dirtyMovie = {
      someOtherStuff: 'aaaahah',
      someOtherStuff2: 'aaaahah',
      someOtherStuff3: 'aaaahah',
      someOtherStuff4: 'aaaahah',
      title: 'title',
      vote_average: 'average',
      poster_path: ``,
      id: 1,
      overview: 'overview',
      release_date: 'release'
    }

    const expected = {
      title: 'title',
      vote_average: 'average',
      poster_path: `https://image.tmdb.org/t/p/w500`,
      movie_id: 1,
      overview: 'overview',
      release_date: 'release'
    }
    
    const result = cleanMovieData(dirtyMovie);
    expect(result).toEqual(expected);
  });
});