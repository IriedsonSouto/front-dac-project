import React from "react";
import './IconGroup.css';

export default class IconGroup extends React.Component{

    render(){
        return(
            <div className="icon-container">
            <img className="bar-icon" src={this.props.icon} alt=''/>
            <h6 className="title" >{this.props.iname}</h6>
            </div>
        )
    }
}
