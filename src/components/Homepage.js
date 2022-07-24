/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Proptypes from 'prop-types';
import { get } from '../redux/flights/flights';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function Flight(props) {
  const {
    name, flightNumber, image,
  } = props;

  return (
    <div className="itemsContainer">
      <img className="itemImage" src={image} alt="itemImage" />
      <h2>{name}</h2>
      <h3>{flightNumber}</h3>
    </div>
  );
}

Flight.propTypes = {
  name: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  flightNumber: Proptypes.number.isRequired,
};

function Flights() {
  const flights = useSelector((state) => state.flightsReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path = useSelector((state) => state.authReducer.path);
  useEffect(() => {
    if (flights.length === 0) {
      dispatch(get());
    }
  }, []);

  useEffect(() => {
    if (path) navigate(path);
  }, [path]);
  return (
    <>
      <Slider {...settings}>
        {
        flights.map((Item) => (
          <Link to={`Item_detail/${Item.id}`} key={Item.id}>
            <Flight
              name={Item.name}
              image={Item.image}
              flightNumber={Item.flight_number}
            />
          </Link>
        ))
      }
      </Slider>
    </>
  );
}

export default Flights;
