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
            <p>
              Name:
              {flight.name}
            </p>
            <p>
              Flight number:
              {flight.flight_number}
            </p>
            <p>
              Price:
              {flight.price}
            </p>
            <img alt="flight-pic" src={flight.image} />
            <button type="button" onClick={() => dispatch(remove(flight.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    )
  );
};
export default DeleteItem;
