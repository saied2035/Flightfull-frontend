import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ReservationList from './components/Reservations/Reservations';

const App = () => {
  const reservations = [];
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Hello! This is our root!</h1>} />
        <Route path="/reservations" element={<ReservationList reservations={reservations} />} />
      </Routes>
    </>
  );
};

export default App;
