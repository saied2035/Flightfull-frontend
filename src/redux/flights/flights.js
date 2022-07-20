import axios from 'axios';

const itemsURL = 'http://localhost:3000/api/v1/items';

const GET = 'get';
const POST = 'post';
const DELETE = 'delete';

export const get = async () => {
  const res = await axios.get(itemsURL);
  return res;
};

export const post = (data) => async (dispatch) => {
  await axios.post(itemsURL, data)
    .then((response) => {
      dispatch({
        type: POST,
        payload: response,
      });
    });
};

export const remove = (id) => async (dispatch) => {
  await axios.delete(`${itemsURL}/${id}`)
    .then((response) => {
      dispatch({
        type: DELETE,
        payload: response,
      });
    });
};

const flightsReducer = (state = [], action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        flights: action.payload,
      };

    case POST:
      return action.payload;

    case DELETE:
      return {
        ...state,
        flights: state.flights.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default flightsReducer;
