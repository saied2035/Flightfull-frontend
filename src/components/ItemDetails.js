import { useParams, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailsPage = () => {
  const { id } = useParams();
  const createdFlight = useSelector((state) => state.flightsReducer.createdFlight);
  const { state } = useLocation();
  const { item } = state || { item: createdFlight } || { item: null };
  return (
    item && (
    <div className="detailMain">
      <div className="detailPic">
        <img alt="flight-pic" src={item.image} />
        <Link to="/">
          <button
            type="button"
            style={{
              background: '#97BF0F',
              borderRadius: '0 50px 50px 0',
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'center',
              padding: '15px 10px 15px 15px',
              left: '0px',
              zIndex: 50,
              border: 'none',
              position: 'absolute',
            }}
          >
            <img alt="prev" className="w-50" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/36/ffffff/external-Chevron-arrows-tanah-basah-glyph-tanah-basah-4.png" />
          </button>
        </Link>
      </div>
      <div className="cardDetails">
        <ul className="detailsList">
          <li>
            Flight name:
            {' '}
            {item.name}
          </li>
          <li>
            Flight number:
            {' '}
            {item.flight_number}
          </li>
          <li>
            Price:
            {' '}
            $
            {item.price}
          </li>
        </ul>
        <Link to="/add_reservation" state={{ item_id: `${id}` }}>
          <button
            type="button"
            className="reserve-btn"
          >
            Reserve
          </button>
        </Link>
      </div>
    </div>
    )
  );
};

export default DetailsPage;
