import { PROFESSIONALS } from '../../src/data/professionals';

const initialState = {
  professionals: PROFESSIONALS,
  selected: null,
  filteredProfessionals: [],
};

const ProfessionalsReducer = (state = initialState, action) => {
  return state;
};

export default ProfessionalsReducer;
