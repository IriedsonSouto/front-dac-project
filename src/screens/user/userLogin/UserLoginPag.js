import React from 'react';
import '../userRegister/UserRegisterPag.css'
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import HeaderGroup from '../../../componentes/HeaderGroup';
import CFormGroup from '../../../componentes/CFormGroup';
import InputLabel from '../../../componentes/InputLabel';
import ButtonsGroup from '../../../componentes/ButtonsGroup';
import iconuser from '../../../icons/iconuser.png';


class UserLoginPag extends React.Component{

    state = {
        id: "",
        name: "",
        email: "",
        password: ""
    }

    create = () =>{
        this.props.history.push('/userregister');
    }

    cancel = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="row">
                <CFormGroup className="col-lg-5">
                    <HeaderGroup title = "Goat Center" icon ={iconuser} iname="Goat Image"></HeaderGroup>
                    <InputLabel name="Name:">
                    <input type="text" className="form-control" placeholder="User name" id="inputDefault" value = {this.state.name} onChange = {(e) => {this.setState({name: e.target.value})}}/>
                    </InputLabel>
                    <InputLabel name="Email:">
                    <input type="text" className="form-control" placeholder="Email" id="inputDefault" value = {this.state.email} onChange = {(e) => {this.setState({email: e.target.value})}}/>
                    </InputLabel>
                    <InputLabel name="Password:">
                    <input type="text" className="form-control" placeholder="Password" id="inputDefault" value = {this.state.password} onChange = {(e) => {this.setState({password: e.target.value})}}/>
                    </InputLabel>
                    <ButtonsGroup>
                    <button type="button" class="btn btn-info">Login</button>
                    <button type="button" className="btn btn-success" onClick={this.create}>Register</button>
                    <button type="button" className="btn btn-danger" onClick={this.cancel}>Cancel</button>
                    </ButtonsGroup>
                </CFormGroup>
            </div>
        );
    }
}

export default withRouter(UserLoginPag);
