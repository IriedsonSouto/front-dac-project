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
            <img className="logo" src={logogoatmedicine} alt="logo Image"/>
        </div>
      </div>
    );
  }
}


