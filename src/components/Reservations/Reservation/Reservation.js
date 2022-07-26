import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteReservation } from '../../../redux/Reservations/Reservations';

const Reservation = ({
  id, name, flightNumber, image, price, city, date,
}) => {
  const userId = useSelector((state) => state.authReducer.user.id);
  const dispatch = useDispatch();
  return (
    <div className="reservation">
      <p>
        Flight name:
        {name}
      </p>
      <p>
        Flight number:
        {flightNumber}
      </p>
      <img alt="flight-pic" src={image} />
      <p>
        Price:
        {price}
      </p>
      <p>
        City:
        {city}
      </p>
      <p>
        Date:
        {date}
      </p>
      <button
        type="button"
        onClick={() => dispatch(deleteReservation({ id, user_id: userId }))}
      >
        Cancel Reservation
      </button>
    </div>
  );
};

Reservation.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  flightNumber: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default Reservation;
