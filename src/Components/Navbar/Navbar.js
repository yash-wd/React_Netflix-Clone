import React from "react";
import "./navbar.css";
import netflix from "../../resource/netflix.png";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import Translation from "../translate/Translation";

const Navbar = () => {
  return (
    <motion.nav initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}} className="navbar">
      <div className="logo">
        <img src={netflix} alt="" />
      </div>

      <div className="nav-element">
        <Translation/>
       
        <div className="signin">
          <Link to="/login">Sign In</Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
