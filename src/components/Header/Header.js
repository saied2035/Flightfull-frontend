import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="flex-ns dn">
    <div className="logo">LOGO</div>
    <ul className="NavLinksList">
      <li className="NavLink">
        <NavLink to="/">
          Home
        </NavLink>
      </li>
      <li className="NavLink">
        <NavLink to="/reservations/add">
          Reserve
        </NavLink>
      </li>
      <li className="NavLink">
        <NavLink to="/reservations">
          My reservations
        </NavLink>
      </li>
      <li className="NavLink">
        <NavLink to="/AddItem">
          Add Flight
        </NavLink>
      </li>
      <li className="NavLink">
        <NavLink to="/DeleteItem">
          Delete Flight
        </NavLink>
      </li>
    </ul>
    <div className="NavFooter">
      <div className="SocialMediaBox">
        <img alt="twitter" src="https://img.icons8.com/small/24/000000/twitter.png" />
        <img alt="facebook" src="https://img.icons8.com/small/24/000000/facebook.png" />
        <img alt="google+" src="https://img.icons8.com/small/24/000000/google-plus.png" />
        <img alt="linkedin" src="https://img.icons8.com/small/24/000000/linkedin.png" />
        <img alt="pinterset" src="https://img.icons8.com/material-outlined/24/000000/pinterest--v1.png" />
      </div>
      <p>copy right</p>
    </div>
  </nav>
);

export default Header;
