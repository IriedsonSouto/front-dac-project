import React from 'react';
import './HomePag.css';
import logogoatmedicine from'./logogoatmedicine.png';
import HeaderGroup from '../../componentes/HeaderGroup';
import iconhome from '../../icons/iconhome.png';

export default class HomePag extends React.Component{

  render() {
    return (
      <div className="Pag">
        <HeaderGroup title = "Home Pag" icon ={iconhome} iname="Home Image"></HeaderGroup>
        <div className="description">
            <img className="logo" src={logogoatmedicine} alt="logo"/>
            <h1>Goate Medicine is an application that aims to control the medicines applied to animals on a property.</h1>
        </div>
      </div>
    );
  }
}


