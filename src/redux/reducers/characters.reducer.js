import {
  FECTH_ALL_CHARACTERS_SUCCESS,
  FECTH_ALL_CHARACTERS_LOADING,
  FECTH_ALL_CHARACTERS_ERROR,
  FECTH_CHARACTER_SUCCESS,
  FECTH_CHARACTER_LOADING,
  FECTH_CHARACTER_ERROR,
} from '../constants/characters.constants';

// 
//  ALL CHARACTERS REDUCERS
// 
const defaultCharacters = {
  characters: [],
  error: false,
}

export const charactersLoading = (state = {loading: true}, action) => {
  switch (action.type) {
    case FECTH_ALL_CHARACTERS_LOADING:
      return {
        ...state,
        loading: action.loading,
      }
    default:
      return state;
  }
};

export const characters = (state = defaultCharacters, action) => {
  switch (action.type) {
    case FECTH_ALL_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.characters,
      };
    case FECTH_ALL_CHARACTERS_ERROR:
      return {
        error: action.error,
      };
    default:
      return state;
  }
};

// 
//  A CHARACTER REDUCERS
// 
const defaultCharacter = {
  characters: {},
  error: false,
}

export const characterLoading = (state = {loading: true}, action) => {
  switch (action.type) {
    case FECTH_CHARACTER_LOADING:
      return {
        ...state,
        loading: action.loading,
      }
    default:
      return state;
  }
};

export const character = (state = defaultCharacter, action) => {
  switch (action.type) {
    case FECTH_CHARACTER_SUCCESS:
      return {
        ...state,
        characters: action.characters,
      };
    case FECTH_CHARACTER_ERROR:
      return {
        error: action.error,
      };
    default:
      return state;
  }
};

// 
//  SEARCH CHARACTERS REDUCERS
// 

const defaultSearchCharacters = {
  characters: [],
  error: false,
}