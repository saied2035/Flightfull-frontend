import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../redux/auth/auth';
import logo from '../logo.png';
import { linksArray, socialLinks } from '../headerConstants';

const DesktopNav = () => {
  const dispatch = useDispatch();

  return (
    <nav
      className="flex-ns flex-column items-start justify-start dn-m dn vh-100"
      style={{ gap: '1rem', borderRight: 'solid rgb(175, 175, 175) 1px' }}
    >

      <img alt="logo" src={logo} className="w-50 self-center" />

      <ul className="w-100 tl list flex flex-column">
        {
          linksArray.map((link) => <NavLink key={link[1]} className="NavLink" to={link[0]}>{link[1]}</NavLink>)
        }
        <NavLink className="NavLink" to="/login" onClick={() => dispatch(signOut())}>
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

export default DesktopNav;
