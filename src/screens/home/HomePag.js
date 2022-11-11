import React from 'react';
import './HomePag.css';
import logogoatmedicine from'../../icons/logogoatmedicine.png';
import {withRouter} from 'react-router-dom';

class HomePag extends React.Component{

  render() {
    return (
      <div className="Pag">
        <div className="description">
            <h1>Goate Medicine is an application that aims to control the medicines applied to animals on a property.</h1>
            <br/>
            <img className="logo" src={logogoatmedicine} alt="logo"/>
        </div>
      </div>
    );
  }
}


export default withRouter(HomePag);
