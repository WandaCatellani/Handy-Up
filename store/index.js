import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import CartReducer from './reducers/cart.reducer';
import CategoryReducer from './reducers/category.reducer';
import Reactotron from '../ReactotronConfig';
import ServiceReducer from './reducers/services.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  services: ServiceReducer,
  cart: CartReducer,
});

export default createStore(
  RootReducer,
  compose(applyMiddleware(thunk), Reactotron.createEnhancer())
);
