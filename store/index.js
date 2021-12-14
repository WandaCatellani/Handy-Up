import { applyMiddleware, combineReducers, createStore } from 'redux';

import CartReducer from './reducers/cart.reducer';
import CategoryReducer from './reducers/category.reducer';
import ServiceReducer from './reducers/services.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  services: ServiceReducer,
  cart: CartReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
