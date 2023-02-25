import './App.css';
import {
  Routes, Route, useNavigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Homepage from './components/Homepage';
import AddItem from './components/AddItem';
import ReservationList from './components/Reservations/Reservations';
import DeleteItem from './components/DeleteItem';
import DetailsPage from './components/ItemDetails';
import AddReservation from './components/Reservations/AddReservation/AddReservation';
import { fetchUser } from './redux/auth/auth';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    dispatch(fetchUser(navigate));
  }, []);

  return (
    <main className="flex">
      {user && <Header />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      { user
      && (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<ReservationList />} />
        <Route path="/add_reservation" element={<AddReservation />} />
        <Route path="/Item_detail/:id" element={<DetailsPage />} />
        <Route path="/AddItem" element={<AddItem />} />
        <Route path="/DeleteItem" element={<DeleteItem />} />
      </Routes>
      )}
    </main>
  );
};

export default App;
