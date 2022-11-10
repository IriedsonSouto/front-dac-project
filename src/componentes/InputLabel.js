import React from "react";
import './HeaderGroup.css';

export default class InputLabel extends React.Component{

    render(){
        return(
            <div className="input-label">
            <label className="col-form-label mt-4" for="inputDefault">{this.props.name}</label>
            {this.props.children}
            </div>
        )
    }
}
