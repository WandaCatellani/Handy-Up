import { SERVICES } from '../../src/data/services';

const initialState = {
  services: SERVICES,
  selected: null,
  filteredServices: [],
};

const ServiceReducer = (state = initialState, action) => {
  return state;
};

export default ServiceReducer;
