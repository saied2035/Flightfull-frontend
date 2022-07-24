const REQUEST_USER = 'REQUEST_USER';
const LOAD_USER = 'LOAD_USER';
const FAILED_USER = 'FAILED_USER';
const RESET_ERROR = 'RESET_ERROR';

export const resetError = () => ({ type: RESET_ERROR });

export const signup = (name) => (dispatch) => {
  dispatch({ type: REQUEST_USER, payload: true });
  fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.token) localStorage.setItem('token', result.token);
      return result.user ? dispatch({ type: LOAD_USER, payload: result.user, path: '/' })
        : dispatch({ type: FAILED_USER, payload: result.errors, path: '' });
    });
};

export const login = (name) => (dispatch) => {
  dispatch({ type: REQUEST_USER, payload: true });
  fetch('http://localhost:3001/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  })
    .then((response) => response.json())
    .then((result) => {
      localStorage.setItem('token', result.token);
      return dispatch({ type: LOAD_USER, payload: result.user, path: '/' });
    })
    .catch(() => dispatch({ type: FAILED_USER, payload: 'You need to sign up first.', path: '' }));
};

export const fetchUser = () => (dispatch) => {
  dispatch({ type: REQUEST_USER, payload: true });
  fetch('http://localhost:3001/api/v1/auth', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => response.json())
    .then((user) => dispatch({ type: LOAD_USER, payload: user, path: '/' }))
    .catch(() => dispatch({ type: FAILED_USER, payload: '', path: '/signup' }));
};

const initialState = {
  user: null,
  pending: false,
  path: null,
  error: null,
};
const authReducer = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case REQUEST_USER:
      return { ...state, pending: action.payload };
    case LOAD_USER:
      return {
        ...state, user: action.payload, pending: false, path: action.path,
      };
    case FAILED_USER:
      return {
        ...state, path: action.path, error: action.payload, pending: false,
      };
    case RESET_ERROR:
      return {
        ...state, error: '',
      };
    default:
      return state;
  }
};

export default authReducer;
