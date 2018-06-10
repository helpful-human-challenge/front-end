import { combineReducers } from 'redux';
import colorReducer from './color';

export default combineReducers({
  colors: colorReducer,
});
