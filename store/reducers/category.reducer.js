import { CATEGORIES } from '../../src/data/categories';
import { SELECT_CATEGORY } from '../actions/category.action';

const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        selected: action.categoryID,
      };

    default:
      return state;
  }
};

export default CategoryReducer;
