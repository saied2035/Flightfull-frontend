import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './components/Homepage';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </>
);

export default App;
