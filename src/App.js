import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Homepage from './components/Homepage';
import ReservationList from './components/Reservations/Reservations';
import { fetchReservations } from './redux/Reservations/Reservations';
import { fetchUser } from './redux/auth/auth';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  useEffect(() => {
    if (user) dispatch(fetchReservations(user.id));
  }, [user]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<ReservationList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
