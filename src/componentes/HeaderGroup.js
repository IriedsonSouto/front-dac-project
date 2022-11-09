import React from "react";
import './HeaderGroup.css';

export default class HeaderGroup extends React.Component{

    render(){
        return(
            <header>
                <img className="icon" src={this.props.icon} alt={this.props.iname}/>
                <h2 className="title" >{this.props.title}</h2>
            </header>
        )
    }
}
