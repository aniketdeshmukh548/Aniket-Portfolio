import { Link } from "react-router-dom";
import classes from "./signup.module.css";

const SignUp = () => {
  return (
    <>
      <section className={classes.login}>
      <div className={classes.h1}>
        <h1>Sign Up</h1>
      </div>
        <form>
        <label htmlFor="password" className={classes.lab}>First Name</label>
          <input type="text" placeholder="Please enter first name" className={classes.ip} required></input>
          <label htmlFor="password" className={classes.lab}>Last Name</label>
          <input type="text" placeholder="Please enter last name" className={classes.ip} required></input>
          <label htmlFor="email" className={classes.lab}>Email</label>
          <input
            type="text"
            placeholder="Please enter valid email address" className={classes.ip} required
          ></input>
          <label htmlFor="password" className={classes.lab}>Password</label>
          <input type="text" placeholder="Please enter password" className={classes.ip} required></input>
          <p><Link to='/login'>Already have an account? Login</Link></p>
        </form>
        <button className={classes.button}>SignUp</button>
      </section>
    </>
  );
};

export default SignUp;
