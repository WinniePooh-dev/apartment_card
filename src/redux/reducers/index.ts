import {combineReducers} from 'redux';
import apartments from './apartments';
import ui from './ui';

const rootReducer = combineReducers({
  apartments,
  ui
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
