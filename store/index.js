import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import AuthReducer from './reducers/auth.reducer';
import CartReducer from './reducers/cart.reducer';
import CategoryReducer from './reducers/category.reducer';
import Reactotron from '../ReactotronConfig';
import ServiceReducer from './reducers/services.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  services: ServiceReducer,
  cart: CartReducer,
  auth: AuthReducer,
});

export default createStore(
  RootReducer,
  compose(applyMiddleware(thunk), Reactotron.createEnhancer())
);
