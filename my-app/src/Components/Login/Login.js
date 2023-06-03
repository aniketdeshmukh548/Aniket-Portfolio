import { Link } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <>
      <section className={classes.login}>
      <div className={classes.h1}>
        <h1>Login</h1>
      </div>
        <form>
          <label htmlFor="email" className={classes.lab}>Email</label>
          <input
            type="text"
            placeholder="Please enter valid email address" className={classes.ip} required
          ></input>
          <label htmlFor="password" className={classes.lab}>Password</label>
          <input type="text" placeholder="Please enter password" className={classes.ip} required></input>
          <p><Link to='/signup'>Don't have account? Signup</Link></p>
        </form>
        <button className={classes.button}>Submit</button>
      </section>
    </>
  );
};

export default Login;
