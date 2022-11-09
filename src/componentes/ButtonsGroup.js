import React from "react";
import './ButtonsGroup.css';

export default class ButtonsGroup extends React.Component{

    render(){
        return(
            <div className="buttons">
                {this.props.children}
            </div>
        )
    }
}
