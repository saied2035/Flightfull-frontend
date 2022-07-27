import { Navigate, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, resetError } from '../../redux/auth/auth';

const Login = () => {
  const user = useSelector((state) => state.authReducer.user);
  const error = useSelector((state) => state.authReducer.error);
  const dispatch = useDispatch();

  return (
    <>
      { user && <Navigate to="/" /> }
      {
      !user && (
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
