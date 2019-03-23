import * as Endpoints from '../../config/Endpoints';
import Constants from '../../config/Constants';
import { get } from '../../helpers/javascripts/ajaxHelpers';

import {
  FECTH_ALL_CHARACTERS_SUCCESS,
  FECTH_ALL_CHARACTERS_LOADING,
  FECTH_ALL_CHARACTERS_ERROR,
  FECTH_CHARACTER_SUCCESS,
  FECTH_CHARACTER_LOADING,
  FECTH_CHARACTER_ERROR,
} from '../constants/characters.constants';

// 
//  FETCH ALL CHARACTERS ACTIONS
// 

const fetchAllCharatersSuccess = characters => ({
  type: FECTH_ALL_CHARACTERS_SUCCESS,
  characters,
});

const fetchAllCharatersLoading = loading => ({
  type: FECTH_ALL_CHARACTERS_LOADING,
  loading,
});

const fetchAllCharatersError = error => ({
  type: FECTH_ALL_CHARACTERS_ERROR,
  error,
});

export const fetchAllCharacters = (query) => ((dispatch) => {
  dispatch(fetchAllCharatersLoading(true));
  let search;
  
  query ? search = `&nameStartsWith=${query}` : search = ''
  
  return get(`${Endpoints.CHARACTERS}${Constants.apiKey}${search}`)
    .then((response) => {
      dispatch(fetchAllCharatersSuccess(response));
      if(response.code !== 200) {
        return dispatch(fetchAllCharatersError(response));  
      }
      dispatch(fetchAllCharatersLoading(false));
    })
    .catch((e) => console.log(e));
});

// 
//  FETCH A CHARACTER ACTIONS
// 

const fetchCharaterSuccess = characters => ({
  type: FECTH_CHARACTER_SUCCESS,
  characters,
});

const fetchCharaterLoading = loading => ({
  type: FECTH_CHARACTER_LOADING,
  loading,
});

const fetchCharaterError = error => ({
  type: FECTH_CHARACTER_ERROR,
  error,
});

export const fetchCharacter = id => ((dispatch) => {
  dispatch(fetchCharaterLoading(true));

  return get(`${Endpoints.CHARACTERS}/${id}?${Constants.apiKey}`)
    .then((response) => {
      dispatch(fetchCharaterSuccess(response));
      if(response.code !== 200) {
        return dispatch(fetchCharaterError(response));  
      }
      dispatch(fetchCharaterLoading(false));
    })
    .catch((e) => console.log(e));
});
