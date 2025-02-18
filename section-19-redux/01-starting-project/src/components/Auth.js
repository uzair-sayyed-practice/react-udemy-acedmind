import classes from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";

const Auth = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(authActions.login());
  };

  const authenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      {!authenticated && (
        <main className={classes.auth}>
          <section>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
              </div>
              <div className={classes.control}>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' />
              </div>
              <button onClick={handleLogin}>Login</button>
            </form>
          </section>
        </main>
      )}
    </>
  );
};

export default Auth;
