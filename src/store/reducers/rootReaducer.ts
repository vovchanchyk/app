import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import errorReducer from './errorReducer';
import fetchReducer from './fetchReducer';

const rootReducer = combineReducers({
  bloks: dataReducer,
  error: errorReducer,
  fetch: fetchReducer,
});

export type rootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
