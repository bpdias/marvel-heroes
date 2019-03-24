import * as charactersReducer from './characters.reducer';
import * as actionTypes from '../constants/characters.constants';
import Characters from './fixtures/characters.json';
import Character from './fixtures/character.json';

describe('reducers', () => {
  
  describe('character', () => {
    it('character should return the initial state', () => {
      expect(charactersReducer.character(undefined, {})).toEqual({
        characters: {},
        error: false,
      });
    });

    it('characters should handle FETCH_CHARACTER_SUCCESS', () => {
      expect(charactersReducer.character(Character, {
        type: actionTypes.FETCH_CHARACTER_SUCCESS,
        Character,
      })).toEqual(Character);
    });
  })


  describe('characters', () => {
    it('characters should return the initial state', () => {
      expect(charactersReducer.characters(undefined, {})).toEqual({
        characters: [],
        error: false,
      });
    });

    it('characters should handle FETCH_CHARACTERS_SUCCESS', () => {
      expect(charactersReducer.characters(Characters, {
        type: actionTypes.FETCH_CHARACTERS_SUCCESS,
        Characters,
      })).toEqual(Characters);
    });
  })
});
