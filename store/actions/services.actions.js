export const SELECT_SERVICE = 'SELECT_SERVICE';
export const FILTER_SERVICE = 'FILTER_SERVICE';

// SERVICIO SELECCIONADO
export const selectService = (id) => ({
  type: SELECT_SERVICE,
  serviceID: id,
});

// FILTRO SERVICIO
export const filterService = (id) => ({
  type: FILTER_SERVICE,
  categoryID: id,
});
