import React from 'react';
import './UserRegisterPag.css'
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import HeaderGroup from '../../../componentes/HeaderGroup';
import CFormGroup from '../../../componentes/CFormGroup';
import InputLabel from '../../../componentes/InputLabel';
import ButtonsGroup from '../../../componentes/ButtonsGroup';
import iconuser from '../../../icons/iconuser.png';


class UserRegisterPag extends React.Component{

    state = {
        name: '',
        username: '',
        email: '',
        password:'',
        repassword:''
      }

    create = async () => {
        if (this.state.password == this.state.repassword){
            await axios.post('http://localhost:8080/api/user',
            {
                name: this.state.name,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            })
            .then(response =>
            {
                console.log(response);
                this.cancel();
            })
            .catch(error =>
            {
                console.log(error.response);
            });
        }else{
            console.log('Senhas não conferem');
        }
    }

    cancel = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="row">
                <CFormGroup className="col-lg-5">
                    <HeaderGroup title = "Goat Center" icon ={iconuser} iname="User Image"></HeaderGroup>
                    <InputLabel name="Name:">
                    <input type="text" className="form-control" placeholder="Name" id="inputDefault" value = {this.state.name} onChange = {(e) => {this.setState({name: e.target.value})}}/>
                    </InputLabel>
                    <InputLabel name="User name:">
                    <input type="text" className="form-control" placeholder="User name" id="inputDefault" value = {this.state.username} onChange = {(e) => {this.setState({username: e.target.value})}}/>
                    </InputLabel>
                    <InputLabel name="Email:">
                    <input type="text" className="form-control" placeholder="Email" id="inputDefault" value = {this.state.email} onChange = {(e) => {this.setState({email: e.target.value})}}/>
                    </InputLabel>
                    <InputLabel name="Password:">
                    <input type="text" className="form-control" placeholder="Password" id="inputDefault" value = {this.state.repassword} onChange = {(e) => {this.setState({repassword: e.target.value})}}/>
                    </InputLabel>
                    <InputLabel name="Repete password:">
                    <input type="text" className="form-control" placeholder="Password" id="inputDefault" value = {this.state.password} onChange = {(e) => {this.setState({password: e.target.value})}}/>
                    </InputLabel>
                    <ButtonsGroup>
                    <button type="button" className="btn btn-success" onClick={this.create}>Create</button>
                    <button type="button" className="btn btn-danger" onClick={this.cancel}>Cancel</button>
                    </ButtonsGroup>
                </CFormGroup>
            </div>
        );
    }
}

export default withRouter(UserRegisterPag);
