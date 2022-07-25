import PropTypes from 'prop-types';

const Reservation = ({
  id, name, flightNumber, image, price, city, date,
}) => (
  <div className="reservation">
    <p className="dn">{id}</p>
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
  </div>
);

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
