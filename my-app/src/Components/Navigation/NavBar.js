import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import img from '../../images/image-aniket.png'
const NavBar = () => {
  return (
    <header className={classes.header}>
      <img src={img} alt="logo" className={classes.photo} />
    <Link to='/'>
      <div className={classes.logo}>Aniket Deshmukh</div>
    </Link>
    <nav>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
            <Link to='/'>About</Link>
        </li>
        <li>
          <Link to='/'>Projects</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link><p className={classes.dash}>/</p><Link to='/signup'>Sign Up</Link>
        </li>
      </ul>
    </nav>
  </header>
  );
};

export default NavBar;
