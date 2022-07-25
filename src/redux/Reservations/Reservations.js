const REQUEST_RESERVATIONS = 'REQUEST_RESERVATIONS';
const LOAD_RESERVATIONS = 'LOAD_RESERVATIONS';
const FAILED_RESERVATIONS = 'FAILED_RESERVATIONS';

const SUCCESS_CREATE_RESERVATION = 'SUCCESS_CREATE_RESERVATION';

export const createReservation = (data) => (dispatch) => (
  fetch(`http://127.0.0.1:3001/api/v1/users/${data.user_id}/reservations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: data.item_id, city: data.city, date: data.date }),
  })
    .then((response) => response.json())
    .then((result) => result.success && dispatch({
      type: SUCCESS_CREATE_RESERVATION,
      payload: result.success,
    }))
);

export const fetchReservations = (userId) => (dispatch) => {
  dispatch({ type: REQUEST_RESERVATIONS, payload: true });
  return fetch(`http://127.0.0.1:3001/api/v1/users/${userId}/reservations`)
    .then((response) => response.json())
    .then((result) => (result.Error
      ? dispatch({ type: FAILED_RESERVATIONS, payload: result })
      : dispatch({ type: LOAD_RESERVATIONS, payload: result })));
};

const initialReservationsState = {
  pending: false,
  reservations: [],
  error: '',
  success: false,
};

const reservationsReducer = (state = initialReservationsState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case REQUEST_RESERVATIONS:
      return { ...state, pending: action.payload };
    case LOAD_RESERVATIONS:
      return { ...state, reservations: action.payload, pending: false };
    case FAILED_RESERVATIONS:
      return { ...state, error: action.payload, pending: false };
    case SUCCESS_CREATE_RESERVATION:
      return { ...state, success: true };
    default:
      return state;
  }
};

export default reservationsReducer;
