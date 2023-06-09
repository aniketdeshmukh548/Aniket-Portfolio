import { Fragment } from "react";
import NavBar from "../Navigation/NavBar";


const Layout = (props) => {
    return (
      <Fragment>
        <NavBar />
        <main>{props.children}</main>
        </Fragment>
    );
  };
  
  export default Layout;