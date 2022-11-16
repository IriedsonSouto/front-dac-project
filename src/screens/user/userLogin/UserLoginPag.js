import React from 'react';
import '../userRegister/UserRegisterPag.css'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {AuthContext} from '../../../main/SessionProvider';
import HeaderGroup from '../../../componentes/HeaderGroup';
import CFormGroup from '../../../componentes/CFormGroup';
import InputLabel from '../../../componentes/InputLabel';
import ButtonsGroup from '../../../componentes/ButtonsGroup';
import iconuser from '../../../icons/iconuser.png';


class UserLoginPag extends React.Component{

    state = {
        username: '',
        password:'',
    }

    create = () =>{
        this.props.history.push('/userregister');
    }

    cancel = () => {
        this.props.history.push('/');
    }

    login = () =>{
        this.context.login(
          this.state.username,
          this.state.password
        ).then(user =>
          {
            if(user){
             alert(`Bem vindo, ${user.name}`);
              this.props.history.push('/viewUser');
            }else{
              alert('Login inválido');
            }
          }
          ).catch(error =>
            {
              alert('Erro processando autenticação: ', error);
          });
    }


    render() {
        return (
            <div className="row">
                <CFormGroup className="col-lg-5">
                    <HeaderGroup title = "Goat Center" icon ={iconuser} iname="Goat Image"></HeaderGroup>
                    <InputLabel name="Name:">
                    <input type="text" className="form-control" placeholder="User name" id="inputDefault" value = {this.state.username} onChange = {(e) => {this.setState({username: e.target.value})}}/>
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

UserLoginPag.contextType = AuthContext;
export default withRouter(UserLoginPag);
