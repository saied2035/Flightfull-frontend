import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteReservation } from '../../../redux/Reservations/Reservations';

const Reservation = ({
  id, name, image, price, city, date,
}) => {
  const userId = useSelector((state) => state.authReducer.user.id);
  const dispatch = useDispatch();
  return (
    <div className="reservation-container relative flex flex-column justify-center items-center w-20">
      <img alt="flight-pic" className="w-100" src={image} />
      <div className="flex flex-column items-center reservation-info">
        <p className="flex flex-column items-center" style={{ gap: '0.5rem' }}>
          <span className="db">
            Flight name:
            {` ${name}`}
          </span>
          <span className="db">
            Price:
            {` ${price}$`}
          </span>
          <span className="db">
            City:
            {` ${city}`}
          </span>
        </p>
        <p className="flex justify-center">
          Date:
          {' '}
          {date}
        </p>
        <button
          type="button"
          className="pointer pa1 pl2 pr2 mb1 white b--none br3 center"
          style={{ background: '#8fb601' }}
          onClick={() => dispatch(deleteReservation({ id, user_id: userId }))}
        >
          Cancel Reservation
        </button>
      </div>
    </div>
  );
};

Reservation.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default Reservation;
