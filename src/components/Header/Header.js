import { TbMenu } from 'react-icons/tb';
import { IoMdCloseCircle } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/auth/auth';
import DesktopNav from './DesktopNav/DesktopNav';
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
      <DesktopNav />

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
