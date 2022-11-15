import React from "react";

export default class CFormGroup extends React.Component{

    render(){
        return(
            <div className="cform-group">
                {this.props.children}
            </div>

        )
    }
}
