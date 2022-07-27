const ITEM_DETAILS = 'ITEM_DETAILS';
const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE';
const initialState = [];

export const fetchItemDetails = (payload) => ({
  type: ITEM_DETAILS,
  payload,
});

export const getItemDetails = (id) => async (dispatch) => {
  try {
    await fetchData(`api/v1/item/${id}`).then((response) => {
      const newItem = response.data;
      dispatch(fetchItemDetails(newItem));
    });
  } catch (error) {
    dispatch({ type: FETCH_ITEM_FAILURE, error });
  }
};

const itemDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_DETAILS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default itemDetailsReducer;
