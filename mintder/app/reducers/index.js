import { combineReducers } from 'redux';
import DataReducer from './data_reducer';
const rootReducer = combineReducers({
  cards: DataReducer,
});

export default rootReducer;
