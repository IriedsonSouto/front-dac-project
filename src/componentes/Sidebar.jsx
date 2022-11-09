import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import iconhome from '../icons/iconhome.png';
import icongoat from '../icons/icongoat.png';
import iconmedicine from '../icons/iconmedicine.png';
import iconsyringe from '../icons/iconsyringe.png';
import IconGroup from './IconGroup';
import {FaBars} from "react-icons/fa";

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<IconGroup icon ={iconhome}/>
        },
        {
            path:"/goat",
            name:"Goat",
            icon:<IconGroup icon ={icongoat}/>
        },
        {
            path:"/medicine",
            name:"Medicine",
            icon:<IconGroup icon ={iconmedicine}/>
        },
        {
            path:"/aplication",
            name:"Aplication",
            icon:<IconGroup icon ={iconsyringe}/>
        }
    ]


    return(
        <div className="container">
        <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                <div style={{marginLeft: isOpen ? "20px" : "0px"}} className="bars">
                <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
    );
};

export default Sidebar;
