import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createReservation } from '../../../redux/Reservations/Reservations';

const AddReservation = () => {
  const success = useSelector((state) => state.reservationsReducer.success);
  const error = useSelector((state) => (state.reservationsReducer.error));
  const [city, setCity] = useState('');
  const [date, setDate] = useState(null);
  const [flightId, setFlightId] = useState(null);
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flightsReducer.flights);
  const user = useSelector((state) => state.authReducer.user);

  return (

    <>
      {success && <Navigate to="/reservations" replace />}
      <main>
        <label htmlFor="city">
          City:
          {' '}
          <input type="text" name="city" onChange={(e) => setCity(e.target.value)} />
        </label>
        <label htmlFor="date">
          Date:
          {' '}
          <input type="date" name="date" onChange={(e) => setDate(e.target.value)} />
        </label>
        {
      flights && (
      <label htmlFor="flight">
        Flight:
        <select name="flight" onChange={(e) => setFlightId(e.target.value)}>
          <option value="" hidden> -- select an option -- </option>
          {flights.map((flight) => (
            <option key={flight.id} value={flight.id}>
              {flight.name}
            </option>
          ))}
        </select>
      </label>
      )
      }
        <button
          type="button"
          onClick={() => dispatch(createReservation({
            city, date, item_id: parseInt(flightId, 10), user_id: user.id,
          }))}
        >
          Reserve
        </button>
        {error.length > 0 && <p>{error}</p>}
      </main>
    </>
  );
};

export default AddReservation;
