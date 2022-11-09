import React from "react";
import './IconGroup.css';

export default class IconGroup extends React.Component{

    render(){
        return(
            <img className="bar-icon" src={this.props.icon} alt=''/>
        )
    }
}
