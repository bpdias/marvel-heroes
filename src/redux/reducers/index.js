import {
  combineReducers,
} from 'redux';

import {
  characters,
  charactersLoading,
} from './characters.reducer';

export default combineReducers({
  characters,
  charactersLoading
});