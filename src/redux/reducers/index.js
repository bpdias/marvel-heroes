import {
  combineReducers,
} from 'redux';

import {
  characters,
  charactersLoading,
  character,
  characterLoading,
} from './characters.reducer';

export default combineReducers({
  characters,
  charactersLoading,
  character,
  characterLoading
});