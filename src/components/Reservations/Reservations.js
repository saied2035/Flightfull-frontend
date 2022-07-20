import { useSelector } from 'react-redux';
import Reservation from './Reservation/Reservation';

const ReservationList = () => {
  const { reservations } = useSelector((state) => state.reservationsReducer.reservations);
  const pending = useSelector((state) => state.reservationsReducer.pending);
  const error = useSelector((state) => (state.reservationsReducer.error
    ? state.reservationsReducer.error : ''));
  return (
    <>
      {pending && <p>Loading...</p>}
      {!reservations && <p>You don&apos;t have any reservations!</p>}
      {
           reservations
           && reservations.map((reservation) => {
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
        }
      {error.Error && <p>{error}</p>}
    </>
  );
};
export default ReservationList;
