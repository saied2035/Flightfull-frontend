import '../Reservations.css';
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
        <main
          className="add-reservation flex relative flex-column items-center justify-center mt3 mr3 mb0 ml0"
          style={{ zIndex: 5, height: '95vh', gap: '1rem' }}
        >
          <h1 className="ma0">Book your flight now</h1>
          <hr className="white w5 m0" />
          <p />
          <div style={{ zIndex: -1 }} className="background absolute w-100 h-100" />
          <label style={{ flex: 0 }} className="flex items-end w-25" htmlFor="city">
            <span style={{ flex: 0.5 }}>City:</span>
            {' '}
            <input style={{ flex: 1 }} className="w-100" type="text" name="city" onChange={(e) => setCity(e.target.value)} />
          </label>
          <label style={{ flex: 0 }} className="flex items-end w-25" htmlFor="date">
            <span style={{ flex: 0.5 }}>Date:</span>
            {' '}
            <input style={{ flex: 1 }} className="w-100" type="date" name="date" onChange={(e) => setDate(e.target.value)} />
          </label>
          {
      flights && !itemId && (
      <label className="relative flex items-end w-25" htmlFor="flight">
        <span style={{ flex: 0.5 }}>Flight:</span>
        <select style={{ flex: 1 }} name="flight" onChange={(e) => setFlightId(e.target.value)}>
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
            style={{ flex: 0 }}
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
