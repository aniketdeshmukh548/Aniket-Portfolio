import classes from './Contact.module.css'
import {FaPhone,FaLocationArrow,FaMailBulk,FaGlobe} from 'react-icons/fa'
const Contact=()=>{
    return(
        <div className={classes.div1}>
        <section className={classes.mainsection}>
        <section className={classes.Contact}>
            <h1 className={classes.h1}>Get In Touch</h1>
            <form className={classes.form}>
                <input className={classes.input} type='text' required placeholder='Name'></input>
                <input className={classes.input} type='text' required placeholder='Email'></input>
                <input className={classes.input} type='text' required placeholder='Subject'></input>
                <input className={classes.input} type='text' required placeholder='Conatct No.'></input>
                <input className={classes.input} type='text' required placeholder='Address'></input>
                <textarea className={classes.text} type='text' cols='30' rows='4' required placeholder='Create a message here'></textarea>
                <button className={classes.button}>Submit</button>
            </form>
            
        </section>
        <section className={classes.get}>
        <h1 className={classes.h1}>Contact us</h1>
            <form className={classes.form}>
                <p>
                <FaLocationArrow />    <span>Address:</span>51,Samarth Jaibhavani Nagar Canal Road Nanded-431605.
                </p>
                <p>
                <FaPhone  /><span>Phone No:</span>7057636455/7020196993.
                </p>
                <p>
                <FaMailBulk name='Email'/>aniketdeshmukh548@gmail.com
                </p>
                <p>
                <FaGlobe />    <span>Website:</span>websaddress.
                </p>
            </form>
        </section>
        </section>
        </div>
        
    )
}
export default Contact;