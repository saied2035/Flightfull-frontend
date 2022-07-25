import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Homepage from './components/Homepage';
import AddItem from './components/AddItem';
import { fetchUser } from './redux/auth/auth';

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path = useSelector((state) => state.authReducer.path);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  useEffect(() => {
    if (path === '/signup') navigate(path);
  }, [path]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AddItem" element={<AddItem />} />
      </Routes>
    </>
  );
};

export default App;
