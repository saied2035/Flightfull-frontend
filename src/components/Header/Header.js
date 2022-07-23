import { NavLink } from 'react-router-dom';

const Header = () => (
  <>
  <NavLink to="/">
    Home
  </NavLink><NavLink to="/addItem">
      Add Item
    </NavLink>
    </>
);

export default Header;
