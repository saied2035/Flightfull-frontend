import Proptypes from 'prop-types';
import { IoMdCloseCircle } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../redux/auth/auth';
import logo from '../logo.png';
import { linksArray, socialLinks } from '../headerConstants';

const MobileNav = ({ menu, setMenu }) => {
  const dispatch = useDispatch();
  return (
    <nav
      className={`${menu ? 'flex flex-m' : 'dn-m dn'} fixed w-100 vh-100 flex-column items-start justify-start dn-ns`}
      style={{ gap: '1rem', background: '#fff', zIndex: '50' }}
    >
      <IoMdCloseCircle
        className="absolute"
        style={{ top: '5%', right: '5%' }}
        onClick={() => setMenu(!menu)}
      />
      <img alt="logo" src={logo} className="w-50 w-20-m self-center" />

      <ul className="w-100 tc list flex flex-column items-center">
        {
          linksArray.map((link) => (
            <NavLink key={link[1]} className="NavLink pa2" to={link[0]} onClick={() => setMenu(!menu)}>
              {link[1]}
            </NavLink>
          ))
        }
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
      </ul>

      <footer className="absolute tc self-center flex justify-center mt2" style={{ gap: '1rem', bottom: '1rem' }}>
        {
          socialLinks.map((socialLink) => (
            <a key={socialLink[1]} href={socialLink[0]} target="_blank" rel="noreferrer">
              <img alt={socialLink[1]} src={socialLink[2]} />
            </a>
          ))
        }
      </footer>
    </nav>
  );
};

MobileNav.propTypes = {
  setMenu: Proptypes.func.isRequired,
  menu: Proptypes.bool.isRequired,
};
export default MobileNav;
