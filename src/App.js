import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Homepage from './components/Homepage';
import ReservationList from './components/Reservations/Reservations';
import { fetchUser,fetchReservations } from './redux/Reservations/Reservations';


const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path = useSelector((state) => state.authReducer.path);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  useEffect(() => {
    if (path) navigate(path);
  }, [path]);

  useEffect(() => {
    dispatch(() => fetchReservations());
  }, []);
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
