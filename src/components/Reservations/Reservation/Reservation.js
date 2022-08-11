import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteReservation } from '../../../redux/Reservations/Reservations';

const Reservation = ({
  id, name, image, price, city, date,
}) => {
  const userId = useSelector((state) => state.authReducer.user.id);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-column justify-center items-center w-20">
      <img alt="flight-pic" className="w-100" src={image} />
      <div
        className="flex flex-column items-center absolute"
        style={{ gap: '0.5rem', top: '35%', background: '#e4e5e9' }}
      >
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
          className="pointer w4 b--none br3 pa2 center"
          style={{ background: 'transparent', border: '1px solid #8fb601' }}
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
