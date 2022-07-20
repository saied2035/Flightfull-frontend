import PropTypes from 'prop-types';
import Reservation from './Reservation/Reservation';

const ReservationList = ({ reservations }) => (
  reservations.length
    ? reservations.map((reservation) => {
      const {
        id, name, flight_number: flightNumber, image, price, city, date,
      } = reservation;
      return (
        <Reservation
          key={id}
          id={id}
          name={name}
          flightNumber={flightNumber}
          image={image}
          price={price}
          city={city}
          date={date}
        />
      );
    })
    : <p>There are no reservationss yet!</p>
);
ReservationList.propTypes = {
  reservations: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number],
  )).isRequired,
};
export default ReservationList;
