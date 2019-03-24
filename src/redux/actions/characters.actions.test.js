import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionTypes from '../constants/characters.constants';
import * as ajaxHelpers from '../../helpers/javascripts/ajaxHelpers';
import {
  fetchAllCharacters,
  fetchCharacter,
} from './characters.actions';
import Characters from './fixtures/characters.json';
import Character from './fixtures/character.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('All Characters', () => {
  it('calls get function from ajaxHelpers and dispatches the right actions on success',
  () => {
    const getMock = jest.spyOn(ajaxHelpers, 'get');
    getMock.mockImplementation(() => {
      return Promise.resolve(Characters);
    });

    const expectedActions = [
      { type: actionTypes.FECTH_ALL_CHARACTERS_LOADING, loading: true },
      { type: actionTypes.FECTH_ALL_CHARACTERS_SUCCESS, characters: Characters },
      { type: actionTypes.FECTH_ALL_CHARACTERS_LOADING, loading: false },
    ];
    
    const store = mockStore({
      characters: [],
      error: false,
    });

  return store.dispatch(fetchAllCharacters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);

      getMock.mockRestore();
    });

  })
});

describe('action creators', () => {
  describe('fetch Character', () => {
    it('calls get function from ajaxHelpers and dispatches the right actions on success',
    () => {

      const getMock = jest.spyOn(ajaxHelpers, 'get');
      getMock.mockImplementation(() => {
        return Promise.resolve(Character);
      });

      const expectedActions = [
        { type: actionTypes.FECTH_CHARACTER_LOADING, loading: true },
        { type: actionTypes.FECTH_CHARACTER_SUCCESS, characters: Character },
        { type: actionTypes.FECTH_CHARACTER_LOADING, loading: false },
      ];

      const store = mockStore({
        character: {},
        error: false,
      });

      return store.dispatch(fetchCharacter(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);

        getMock.mockRestore();
      });
    })
  });
});