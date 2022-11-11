import React from "react";
import './PagGroup.css';

export default class PagGroup extends React.Component{

    render(){
        return(
            <div className="Pag">
                {this.props.children}
            </div>

        )
    }
}
