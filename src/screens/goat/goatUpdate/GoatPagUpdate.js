import React from 'react';
import HeaderGroup from '../../../componentes/HeaderGroup';
import FormGroup from '../../../componentes/FormGroup';
import InputLabel from '../../../componentes/InputLabel';
import ButtonsGroup from '../../../componentes/ButtonsGroup';
import icongoat from '../../../icons/icongoat.png';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class GoatPagUpdate extends React.Component{

    state = {
        id: "",
        nickname: "",
        gender: "",
        birthDay: "",
        description: ""
    }

    componentDidMount(){
        const params = this.props.match.params;
        const id = params.id;
        this.findById(id);
    }

    cancel = () => {
        this.props.history.push('/goat');
    }

    update = async () => {
        await axios.put(`http://localhost:8080/api/goat/${this.state.id}`,
        {
            nickname: this.state.nickname,
            gender: this.state.gender,
            birthDay: this.state.birthDay,
            description: this.state.description,
        })
        .then(response =>
        {
            console.log(response);
            this.props.history.push('/goat');
        })
        .catch(error =>
        {
            console.log(error.response);
        });
    }

    findById = (id) => {
        axios.get(`http://localhost:8080/api/goat/${id}`)
        .then( response =>
            {
                const goat = response.data;
                const id = goat.id;
                const nickname = goat.nickname;
                const gender = goat.gender;
                const birthDay = goat.birthDay;
                const description = goat.description;

                this.setState({id, nickname, gender, birthDay, description});
            }
        ).catch( error =>
            {
                console.log(error.response);
            }
        );
    }

  render() {
    return (
        <div className="Pag">
        <FormGroup>
            <HeaderGroup title = "Goat Update" icon ={icongoat} iname="Goat Image"></HeaderGroup>
            <InputLabel name="ID:">
            <input type="text" disabled= {true} className="form-control"  id="inputDefault" value = {this.state.id} onChange = {(e) => {this.setState({id: e.target.value})}}/>
            </InputLabel>
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
            <ButtonsGroup>
                <button type="button" className="btn btn-primary" onClick={this.update}>Update</button>
                <button type="button" className="btn btn-warning" onClick={this.cancel}>Cancel</button>
            </ButtonsGroup>
        </FormGroup>
    </div>
    );
  }
}

export default withRouter(GoatPagUpdate);

