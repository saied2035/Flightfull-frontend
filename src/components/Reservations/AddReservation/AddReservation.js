import { Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createReservation, resetReservation } from '../../../redux/Reservations/Reservations';

const AddReservation = () => {
  const location = useLocation();
  const { state: itemId } = location;
  const success = useSelector((state) => state.reservationsReducer.success);
  const error = useSelector((state) => (state.reservationsReducer.error));
  const [city, setCity] = useState('');
  const [date, setDate] = useState(null);
  const [flightId, setFlightId] = useState(null);
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flightsReducer.flights);
  const user = useSelector((state) => state.authReducer.user);
  useEffect(() => { if (success) dispatch(resetReservation()); }, [success]);
  return (

    <>
      {success && <Navigate to="/reservations" replace />}
      {
        user && (
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
      flights && !itemId && (
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
              city,
              date,
              item_id: itemId ? parseInt(itemId.item_id, 10) : parseInt(flightId, 10),
              user_id: user.id,
            }))}
          >
            Reserve
          </button>
          {error.length > 0 && <p>{error}</p>}
        </main>
        )
      }
    </>
  );
};

export default AddReservation;
