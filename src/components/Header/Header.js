import { TbMenu } from 'react-icons/tb';
import { IoMdCloseCircle } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/auth/auth';
import logo from './logo.png';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <TbMenu
        className={`pointer black ${menu ? 'dn-m dn' : 'db-m db'} dn-ns ma2 b`}
        style={{ zIndex: 50 }}
        onClick={() => setMenu(!menu)}
      />
      <nav
        className="flex-ns flex-column items-start justify-start dn-m dn vh-100"
        style={{ gap: '1rem', borderRight: 'solid rgb(175, 175, 175) 1px', paddingLeft: '8px' }}
      >
        <img alt="logo" src={logo} className="w-50 ml4" />
        <ul className="w-100 tl list flex flex-column">
          <NavLink className="NavLink" to="/">
            Home
          </NavLink>
          <NavLink className="NavLink" to="/add_reservation">
            Reserve
          </NavLink>
          <NavLink className="NavLink" to="/reservations">
            Reservations
          </NavLink>
          <NavLink className="NavLink" to="/AddItem">
            Add Flight
          </NavLink>
          <NavLink className="NavLink" to="/DeleteItem">
            Delete Flight
          </NavLink>
          <NavLink className="NavLink" to="/login" onClick={() => dispatch(signOut())}>
            Sign out
          </NavLink>
          <li className="absolute tc self-center flex justify-center mt2" style={{ gap: '1rem', bottom: '1rem' }}>
            <a href="https://twitter.com/SaiedGaffer" target="_blank" rel="noreferrer">
              <img alt="Twitter" src="https://img.icons8.com/small/24/000000/twitter.png" />
            </a>
            <a href="https://www.linkedin.com/in/saiedgaffer" target="_blank" rel="noreferrer">
              <img alt="Linkedin" src="https://img.icons8.com/small/24/000000/linkedin.png" />
            </a>
            <a href="https://github.com/saied2035" target="_blank" rel="noreferrer">
              <img alt="Github" src="https://img.icons8.com/small/24/000000/github.png" />
            </a>
            <a href="https://angel.co/u/saiedgaffer" target="_blank" rel="noreferrer">
              <img alt="AngelList" src="https://img.icons8.com/24/angelist.png" />
            </a>
          </li>
        </ul>
      </nav>

      <nav
        className={`${menu ? 'flex flex-column items-start vh-100 fixed w-100' : 'dn'}`}
        style={menu ? { left: 0, zIndex: 60, background: 'rgba(150, 191, 1, 0.85)' } : {}}
      >
        <IoMdCloseCircle
          className="absolute"
          style={{ top: '5%', right: '5%' }}
          onClick={() => setMenu(!menu)}
        />
        <ul className="NavLinksList flex-wrap">
          <li className="w-40 logo">
            <img alt="logo" src={logo} className="w-40" />
          </li>
          <li className="NavLink" style={{ margin: 0 }}>
            <NavLink className="NavLink" to="/" onClick={() => setMenu(!menu)}>
              Home
            </NavLink>
          </li>
          <li className="NavLink" style={{ margin: 0 }}>
            <NavLink className="NavLink" to="/reservations/add" onClick={() => setMenu(!menu)}>
              Reserve
            </NavLink>
          </li>
          <li className="NavLink" style={{ margin: 0 }}>
            <NavLink className="NavLink" to="/reservations" onClick={() => setMenu(!menu)}>
              My reservations
            </NavLink>
          </li>
          <li className="NavLink" style={{ margin: 0 }}>
            <NavLink className="NavLink" to="/AddItem" onClick={() => setMenu(!menu)}>
              Add Flight
            </NavLink>
          </li>
          <li className="NavLink" style={{ margin: 0 }}>
            <NavLink className="NavLink" to="/DeleteItem" onClick={() => setMenu(!menu)}>
              Delete Flight
            </NavLink>
          </li>
          <li className="NavLink" style={{ margin: 0 }}>
            <NavLink
              className="NavLink"
              to="/login"
              onClick={() => {
                setMenu(!menu);
                dispatch(signOut());
              }}
            >
              Sign out
            </NavLink>
          </li>
          <li className="NavLink" style={{ margin: 0 }}>
            <img alt="twitter" src="https://img.icons8.com/small/24/000000/twitter.png" />
            <img alt="facebook" src="https://img.icons8.com/small/24/000000/facebook.png" />
            <img alt="google+" src="https://img.icons8.com/small/24/000000/google-plus.png" />
            <img alt="linkedin" src="https://img.icons8.com/small/24/000000/linkedin.png" />
            <img alt="pinterset" src="https://img.icons8.com/material-outlined/24/000000/pinterest--v1.png" />
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
