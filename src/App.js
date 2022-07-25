import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './components/Homepage';
import AddItem from './components/AddItem';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/AddItem" element={<AddItem />} />
    </Routes>
  </>
);

export default App;
