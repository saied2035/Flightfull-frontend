import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { post } from '../redux/flights/flights';

const AddItem = () => {
  const user = useSelector((state) => state.authReducer.user);
  const item = useSelector((state) => state.flightsReducer.createdFlight);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [price, setPrice] = useState('');
  useEffect(() => {
    if (item.id) {
      navigate(`/Item_detail/${item.id}`);
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(post({
      name, image, flight_number: flightNumber, price, user_id: user.id,
    }));
    setName('');
    setImage('');
    setFlightNumber('');
    setPrice('');
  };

  return (
    <div>
      <h1>Add New Item</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label htmlFor="image">
          Image:
          <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <label htmlFor="flightNumber">
          Flight Number:
          <input type="text" name="flightNumber" value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} />
        </label>
        <label htmlFor="price">
          Price:
          <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddItem;
