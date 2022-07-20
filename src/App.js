import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import ReservationList from './components/Reservations/Reservations';
import { fetchReservations } from './redux/Reservations/Reservations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(() => fetchReservations());
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Hello! This is our root!</h1>} />
        <Route path="/reservations" element={<ReservationList />} />
      </Routes>
    </>
  );
};

export default App;
