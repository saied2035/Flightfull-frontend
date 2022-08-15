import './Reservations.css';
import { useSelector } from 'react-redux';
import Reservation from './Reservation/Reservation';

const ReservationList = () => {
  const { reservations } = useSelector((state) => state.reservationsReducer.reservations);
  const pending = useSelector((state) => state.reservationsReducer.pending);
  const error = useSelector((state) => (state.reservationsReducer.error
    ? state.reservationsReducer.error : ''));
  return (
    <>
      {reservations && reservations.length === 0 && <p className="w-100 f4 tc mt5">You don&apos;t have any reservations!</p>}
      <div className={`static-ns absolute-m absolute w-90-ns w-100-m w-100 
      ${reservations && reservations.length === 0 ? 'dn' : ''}`}
      >
        <h1 className="tc" style={{ marginRight: '2rem' }}>reservations</h1>
        <section className="flex flex-row-ns flex-wrap flex-column justify-center items-center">
          {pending && <p>Loading...</p>}
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
        </section>
      </div>
    </>
  );
};
export default ReservationList;
