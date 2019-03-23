import * as Endpoints from '../../config/Endpoints';
import Constants from '../../config/Constants';
import { get } from '../../helpers/javascripts/ajaxHelpers';

import {
  FECTH_ALL_CHARACTERS_SUCCESS,
  FECTH_ALL_CHARACTERS_LOADING,
  FECTH_ALL_CHARACTERS_ERROR,
} from '../constants/characters.constants';

const fetchAllCharatersSuccess = characters => ({
  type: FECTH_ALL_CHARACTERS_SUCCESS,
  characters,
});

const fetchAllCharatersError = error => ({
  type: FECTH_ALL_CHARACTERS_ERROR,
  error,
});

const fetchAllCharatersLoading = loading => ({
  type: FECTH_ALL_CHARACTERS_LOADING,
  loading,
});

export const fetchAllCharacters = () => ((dispatch) => {
  dispatch(fetchAllCharatersLoading(true));

  return get(`${Endpoints.CHARACTERS}?${Constants.apiKey}`)
    .then((response) => {
      dispatch(fetchAllCharatersSuccess(response));
      dispatch(fetchAllCharatersLoading(false));
      if(response.code !== 200) {
        dispatch(fetchAllCharatersError(response));  
      }
    })
    .catch((e) => console.log(e));
});