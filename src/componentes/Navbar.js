import React from 'react';
import NavbarItem from './NavbarItem';
import './Navbar.css';
import logo from '../icons/logogoatmedicine.png'
import iconhome from '../icons/iconhome.png';
import icongoat from '../icons/icongoat.png';
import iconmedicine from '../icons/iconmedicine.png';
import iconsyringe from '../icons/iconsyringe.png';


function Navbar(props){
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="/" className="navbar-brand"><img className="logoBar" src={logo} alt="logo"/></a>
          <button className="navbar-toggler" type="button"
                  data-toggle="collapse" data-target="#navbarResponsive"
                  aria-controls="navbarResponsive" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
                <NavbarItem className="barItem" href="/goat" label="Goats" icon ={icongoat} iname="Goat" />
                <NavbarItem className="barItem" href="/medicine" label="Medicines" icon ={iconmedicine} iname="Medicine" />
                <NavbarItem className="barItem" href="/aplication" label="Aplication" icon ={iconsyringe} iname="Aplication" />
            </ul>
            </div>
        </div>
      </div>
    )
}

export default Navbar;
