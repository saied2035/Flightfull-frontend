import { get } from '../flights/flights';
import { fetchReservations } from '../Reservations/Reservations';

const REQUEST_USER = 'REQUEST_USER';
const LOAD_USER = 'LOAD_USER';
const FAILED_USER = 'FAILED_USER';
const RESET_ERROR = 'RESET_ERROR';
const SIGN_OUT = 'SIGN_OUT';
export const resetError = () => ({ type: RESET_ERROR });

export const signOut = () => {
  localStorage.removeItem('token');
  return { type: SIGN_OUT };
};

export const signup = (name) => (dispatch) => {
  dispatch({ type: REQUEST_USER, payload: true });
  fetch('https://flightfull-production.up.railway.app/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.token) localStorage.setItem('token', result.token);
      if (result.user) {
        dispatch(get());
        dispatch(fetchReservations(result.user.id));
      }
      return result.user ? dispatch({
        type: LOAD_USER,
        payload: result.user,
        bgRemover: result.bgRemover,
      })
        : dispatch({ type: FAILED_USER, payload: result.errors });
    });
};

export const login = (name) => (dispatch) => {
  dispatch({ type: REQUEST_USER, payload: true });
  fetch('https://flightfull-production.up.railway.app/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.status === 500) return dispatch({ type: FAILED_USER, payload: 'You need to sign up first.' });
      localStorage.setItem('token', result.token);
      if (result.user) {
        dispatch(get());
        dispatch(fetchReservations(result.user.id));
      }
      return dispatch({ type: LOAD_USER, payload: result.user, bgRemover: result.bgRemover });
    })
    .catch(() => dispatch({ type: FAILED_USER, payload: 'You need to sign up first.' }));
};

export const fetchUser = () => (dispatch) => {
  dispatch({ type: REQUEST_USER, payload: true });
  fetch('https://flightfull-production.up.railway.app/api/v1/auth', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.user.id) {
        dispatch({ type: LOAD_USER, payload: data.user, bgRemover: data.bgRemover });
        dispatch(get());
        dispatch(fetchReservations(data.user.id));
      } else {
        dispatch({ type: FAILED_USER, payload: '' });
      }
    })
    .catch(() => dispatch({ type: FAILED_USER, payload: '' }));
};

const initialState = {
  user: null,
  pending: false,
  error: null,
  bgRemover: null,
};
const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_USER:
      return { ...state, pending: action.payload };
    case LOAD_USER:
      return {
        ...state, user: action.payload, pending: false, bgRemover: action.bgRemover,
      };
    case FAILED_USER:
      return {
        ...state, error: action.payload, pending: false,
      };
    case RESET_ERROR:
      return {
        ...state, error: '',
      };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
