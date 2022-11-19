
import React from 'react';
import './IconGroup.css';
import IconGroup from './IconGroup';

function NavbarItem({render, ...props}){
    if(render){
        return(
        <li className="nav-item">
            <a className="nav-link" onClick={props.onClick} href={props.href}><IconGroup icon={props.icon} iname={props.iname}/></a>
        </li>
        )
    } else{
        return false;
    }
}

export default NavbarItem;
