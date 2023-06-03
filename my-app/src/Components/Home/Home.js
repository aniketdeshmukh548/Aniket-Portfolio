import { Link } from 'react-router-dom';
import classes from './Home.module.css'
import example from './resume.txt'

const Home=()=>{
    return (
        <div className={classes.home}>
            <h1 className={classes.body}>HEY, I'M Aniket Deshmukh</h1>
            <h2 className={classes.para}>I'm a Frontend Developer building the responsive Frontend of Websites leading to the growth of the organization/product.</h2>
            <a className={classes.resumelink} href={example} download="AniketDeshmukh–ReactDev–Resume" target='_blank' rel='noreferrer' >
            <button className={classes.button}>GET RESUME</button>
            </a>
            <p className={classes.p}>To Know More ..</p>
            <p className={classes.p}>Please <Link to='/login'><i>Login</i></Link> To Continue...</p>
        </div>
    )
}

export default Home;