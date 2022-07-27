import { useParams, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailsPage = () => {
  const { id } = useParams();
  const createdFlight = useSelector((state) => state.flightsReducer.createdFlight);
  const { state } = useLocation();
  const { item } = state || { item: createdFlight } || { item: null };
  return (
    item && (
    <div className="reservation">
      <p>
        Flight name:
        {item.name}
      </p>
      <p>
        Flight number:
        {item.flight_number}
      </p>
      <img alt="flight-pic" src={item.image} />
      <p>
        Price:
        {item.price}
      </p>
      <NavLink to="/reservations/add" state={{ item_id: `${id}` }}>
        Reserve
      </NavLink>
    </div>
    )
  );
};

export default DetailsPage;
