import { useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, resetError } from '../../redux/auth/auth';

const Login = () => {
  const path = useSelector((state) => state.authReducer.path);
  const error = useSelector((state) => state.authReducer.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (path === '/') navigate(path);
  }, [path]);
  return (
    <>
      {
      !localStorage.getItem('token') && (
      <main id="login">
        <input className="login-name" type="text" />
        <button
          type="button"
          onClick={() => {
            const name = document.querySelector('.login-name').value;
            dispatch(login(name));
          }}
        >
          Log in
        </button>
        <hr />
        <NavLink onClick={() => dispatch(resetError())} to="/signup">
          Sign up
        </NavLink>
        { error && <p>{error}</p>}
      </main>
      )
      }
    </>
  );
};

export default Login;
