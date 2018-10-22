import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import headerShadow from './headerShadow';

export default combineReducers({
  todos,
  visibilityFilter,
  headerShadow,
});
