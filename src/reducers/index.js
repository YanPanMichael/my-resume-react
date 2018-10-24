import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import headerShadow from './headerShadow';

const reducersList = {
  todos,
  visibilityFilter,
  headerShadow,
};

export default combineReducers({
  ...reducersList,
  routing: routerReducer,
});
