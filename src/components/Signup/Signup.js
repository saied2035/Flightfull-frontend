import { Navigate, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signup, resetError } from '../../redux/auth/auth';

const Signup = () => {
  const error = useSelector((state) => state.authReducer.error);
  const dispatch = useDispatch();
  return (
    <>
      { localStorage.token && <Navigate to="/" /> }
      {
      !localStorage.token && (
      <main id="signup">
        <input className="signup-name" type="text" />
        <button
          type="button"
          onClick={() => {
            const name = document.querySelector('.signup-name').value;
            dispatch(signup(name));
          }}
        >
          Sign up
        </button>
        <hr />
        <NavLink onClick={() => dispatch(resetError())} to="/login">
          Login
        </NavLink>
        {error && <p>{error}</p>}
      </main>
      )
     }
    </>
  );
};

export default Signup;
