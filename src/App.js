import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Homepage from './components/Homepage';
import AddItem from './components/AddItem';
import ReservationList from './components/Reservations/Reservations';
import AddReservation from './components/Reservations/AddReservation/AddReservation';
import { fetchReservations } from './redux/Reservations/Reservations';
import { fetchUser } from './redux/auth/auth';

const App = () => {
  const path = useSelector((state) => state.authReducer.path);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  useEffect(() => {
    if (path === '/signup') navigate(path);
  }, [path]);
  useEffect(() => {
    if (user) dispatch(fetchReservations(user.id));
  }, [user]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<ReservationList />} />
        <Route path="/reservations/add" element={<AddReservation />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AddItem" element={<AddItem />} />
      </Routes>
    </>
  );
};

export default App;
