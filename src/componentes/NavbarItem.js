
import React from 'react';
import './IconGroup.css';
import IconGroup from './IconGroup';

function NavbarItem(props){
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.href}><IconGroup icon={props.icon} iname={props.iname}/></a>
        </li>
    )
}

export default NavbarItem;
