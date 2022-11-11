import React from 'react';
import './GoatPagFind.css';
import HeaderGroup from '../../../componentes/HeaderGroup';
import FormGroup from '../../../componentes/FormGroup';
import InputLabel from '../../../componentes/InputLabel';
import ButtonsGroup from '../../../componentes/ButtonsGroup';
import icongoat from '../../../icons/icongoat.png';
import axios from 'axios';
import GoatTable from '../../../componentes/GoatTable';
import {withRouter} from 'react-router-dom';

class GoatPagFind extends React.Component{

    state = {
        nickname: "",
        gender: "",
        birthDay: "",
        description: "",
        goats: []
    }


    cancel = () => {
        this.setState({nickname: ""})
        this.setState({gender: ""})
        this.setState({birthDay: ""})
        this.setState({description: ""})
    }

    create = () => {
        this.props.history.push('/goatfind');
    }


  render() {
    return (
        <div className="Pag">
        <HeaderGroup title = "Goat Center" icon ={icongoat} iname="Goat Image"></HeaderGroup>
        <FormGroup>
            <InputLabel name="Nickname:">
            <input type="text" className="form-control" placeholder="Goat name" id="inputDefault" value = {this.state.nickname} onChange = {(e) => {this.setState({nickname: e.target.value})}}/>
            </InputLabel>
            <InputLabel name="Gender:">
            <input type="text" className="form-control" placeholder="Male or Female" id="inputDefault" value = {this.state.gender} onChange = {(e) => {this.setState({gender: e.target.value})}}/>
            </InputLabel>
            <InputLabel name="Birth Day:">
            <input type="text" className="form-control" placeholder="DD/MM/YYYY" id="inputDefault" value = {this.state.birthDay} onChange = {(e) => {this.setState({birthDay: e.target.value})}}/>
            </InputLabel>
            <InputLabel name="Description:">
            <textarea className="form-control" id="exampleTextarea" rows="3" value = {this.state.description} onChange = {(e) => {this.setState({description: e.target.value})}}></textarea>
            </InputLabel>
        </FormGroup>
        <ButtonsGroup>
            <button type="button" class="btn btn-info">Buscar</button>
            <button type="button" className="btn btn-success" onClick={this.create}>Create</button>
            <button type="button" className="btn btn-danger" onClick={this.cancel}>Cancel</button>
        </ButtonsGroup>
    </div>
    );
  }
}

export default withRouter(GoatPagFind);
