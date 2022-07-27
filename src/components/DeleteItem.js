import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserFlights, remove } from '../redux/flights/flights';

const DeleteItem = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const userFlights = useSelector((state) => state.flightsReducer.userFlights);
  useEffect(() => {
    if (user) {
      dispatch(fetchUserFlights(user.id));
    }
  }, [user]);

  return (
    userFlights && (
    <div>
      <h1>Delete Item</h1>
      <ul>
        {userFlights.map((flight) => (
          <li key={flight.id}>
            <p>{flight.name}</p>
            <p>{flight.flight_number}</p>
            <p>{flight.price}</p>
            <p>{flight.image}</p>
            <button type="button" onClick={() => dispatch(remove(flight.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    )
  );
};
export default DeleteItem;
