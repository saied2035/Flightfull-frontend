import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Proptypes from 'prop-types';
import { get, post } from '../redux/flights/flights';

export function Flight(props) {
  const {
    id, name, flightNumber, image,
  } = props;

  const flights = useSelector((state) => state.flightsReducer);
  const dispatch = useDispatch();

  return (
    <div className="itemsContainer">
      <img className="itemImage" src={image} alt="itemImage" />
      <h2>{name}</h2>
      <h3>{flightNumber}</h3>
      <button type="button" id={id} onClick={() => dispatch(post(flights, id))}>Reserve</button>
    </div>
  );
}

Flight.propTypes = {
  id: Proptypes.number.isRequired,
  name: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  flightNumber: Proptypes.number.isRequired,
};

function Flights() {
  const flights = useSelector((state) => state.flightsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (flights.length === 0) {
      dispatch(get());
    }
  }, []);
  return (
    <>
      <h1>Items list</h1>
      {flights.map((Item) => (
        <Flight
          key={Item.id}
          id={Item.id.toString()}
          name={Item.name}
          image={Item.image}
          flightNumber={Item.flightNumber}
        />
      ))}
    </>
  );
}

export default Flights;
