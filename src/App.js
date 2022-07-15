import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<h1>Hello! This is our root!</h1>} />
    </Routes>
  </>
);

export default App;
