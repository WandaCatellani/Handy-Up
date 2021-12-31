import { FILTER_SERVICE, SELECT_SERVICE } from '../actions/services.actions';

import { SERVICES } from '../../src/data/services';

const initialState = {
  services: SERVICES,
  selected: null,
  filteredServices: [],
};

const ServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SERVICE:
      return {
        ...state,
        selected: action.services.find(
          (service) => service.id === action.serviceID
        ),
      };

    case FILTER_SERVICE:
      return {
        ...state,
        filteredServices: state.services.filter(
          (service) => service.id === action.categoryID
        ),
      };
    default:
      return state;
  }
};

export default ServiceReducer;
