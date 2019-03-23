import {
  FECTH_ALL_CHARACTERS_SUCCESS,
  FECTH_ALL_CHARACTERS_LOADING,
  FECTH_ALL_CHARACTERS_ERROR,
} from '../constants/characters.constants';

const defaultCharacters = {
  characters: [],
  error: false,
}

export const charactersLoading = (state = true, action) => {
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