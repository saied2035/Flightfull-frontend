const REQUEST_RESERVATIONS = 'REQUEST_RESERVATIONS';
const LOAD_RESERVATIONS = 'LOAD_RESERVATIONS';
const FAILED_RESERVATIONS = 'FAILED_RESERVATIONS';

export const fetchReservations = () => (dispatch) => {
  dispatch({ type: REQUEST_RESERVATIONS, payload: true });
  return fetch('http://127.0.0.1:3001/api/v1/reservations').then((response) => response.json())
    .then((result) => (result.Error
      ? dispatch({ type: FAILED_RESERVATIONS, payload: result })
      : dispatch({ type: LOAD_RESERVATIONS, payload: result })));
};

const initialReservationsState = {
  pending: false,
  reservations: [],
  error: '',
};

const reservationsReducer = (state = initialReservationsState, action = {}) => {
  switch (action.type) {
    case REQUEST_RESERVATIONS:
      return { ...state, pending: action.payload };
    case LOAD_RESERVATIONS:
      return { ...state, reservations: action.payload, pending: false };
    case FAILED_RESERVATIONS:
      return { ...state, error: action.payload, pending: false };
    default:
      return state;
  }
};

export default reservationsReducer;
