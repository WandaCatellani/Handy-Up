import { combineReducers, createStore } from 'redux';

import CategoryReducer from './reducers/category.reducer';
import ServiceReducer from './reducers/services.reducer';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  services: ServiceReducer,
});

export default createStore(RootReducer);
