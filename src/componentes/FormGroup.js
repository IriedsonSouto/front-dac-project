import React from "react";
import './FormGroup.css';

export default class FormGroup extends React.Component{

    render(){
        return(
            <div className="form-group">
                {this.props.children}
            </div>

        )
    }
}
