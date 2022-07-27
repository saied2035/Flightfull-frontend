import { useParams, NavLink, useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { item } = state;
  return (
    item && (
    <div className="reservation">
      <p>
        Flight name:
        {item.name}
      </p>
      <p>
        Flight number:
        {item.flightNumber}
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
