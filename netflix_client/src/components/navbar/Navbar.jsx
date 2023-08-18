import React, { useContext, useState } from 'react'
import { Search , Notifications, ArrowDropDown } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import "./navbar.scss";
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const [isScrolled , setIsScrolled] = useState(false);
  const {dispatch} = useContext(AuthContext);

  window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset ===0 ? false : true);
    return ()=> (window.onscroll = null);

  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" alt="" />

          <Link to="/" className="link">
          <span> Homepage </span>
          </Link>
          <Link to="/series" className="link">
        <span className="navbarmainLinks"> Series </span>
          </Link>
          
        <span> New and pooular </span>
        <Link to="/movies" className="link">
        <span className="navbarmainLinks"> Movies </span>
        </Link>
        <span> My List </span>

        </div>
        
        <div className="right">
          <Search className='icon'/>

          <span> KID </span>

          <Notifications className='icon'/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHKsCzREiHXbnUWopKMelZQArxJ9c7FbdINp7qejS&s" alt="My photo" />
          <div className="profile">
        <ArrowDropDown className='icon'/>
        <div className="options">
          <span>settings</span>
          <span onClick={() => dispatch(logout())}>logout</span>
        </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
