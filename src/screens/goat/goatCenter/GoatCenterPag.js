import React from 'react';
import './GoatCenterPag.css';
import HeaderGroup from '../../../componentes/HeaderGroup';
import FormGroup from '../../../componentes/FormGroup';
import InputLabel from '../../../componentes/InputLabel';
import ButtonsGroup from '../../../componentes/ButtonsGroup';
import icongoat from '../../../icons/icongoat.png';
import axios from 'axios';
import GoatTable from '../../../componentes/GoatTable';
import {withRouter} from 'react-router-dom';

class GoatCenterPag extends React.Component{

    state = {
        id: "",
        nickname: "",
        gender: "",
        birthDay: "",
        description: "",
        goats: []
    }

    componentDidMount(){
        this.find();
    }

    find = ()=> {

        var params = '?';

        if(this.state.id != ''){
          if(params != '?'){
            params = `${params}&`;
          }
          params = `${params}id =${this.state.id}`;
        }

        if(this.state.nickname != ''){
          if(params != '?'){
            params = `${params}&`;
          }
          params = `${params}nickname =${this.state.nickname}`;
        }

        if(this.state.gender != ''){
          if(params != '?'){
            params = `${params}&`;
          }
          params = `${params}gender =${this.state.gender}`;
        }

        if(this.state.birthDay != ''){
            if(params != '?'){
              params = `${params}&`;
            }
            params = `${params}birthDay =${this.state.birthDay}`;
          }

        axios.get(`http://localhost:8080/api/goat${params}`
        ).then(response =>
          {
            const goats = response.data;
            this.setState({goats});
            console.log(goats);
          }).catch(error =>
            {
              console.log(error.response);
            }

          );
    }

    create = async () => {
        await axios.post('http://localhost:8080/api/goat',
        {
            nickname: this.state.nickname,
            gender: this.state.gender,
            birthDay: this.state.birthDay,
            description: this.state.description,
        })
        .then(response =>
        {
            console.log(response);
            this.find();
            this.cancel();
        })
        .catch(error =>
        {
            console.log(error.response);
        });
    }

    cancel = () => {
        this.setState({nickname: ""})
        this.setState({gender: ""})
        this.setState({birthDay: ""})
        this.setState({description: ""})
    }


    delete = async (goatId) => {
        await axios.delete(`http://localhost:8080/api/goat/${goatId}`
        )
        .then(response =>
        {
            console.log(response);
            this.find();
            this.cancel();
        })
        .catch(error =>
        {
            console.log(error.response);
        });
    }

    edit = (goatId) => {
        this.props.history.push(`/goatupdate/${goatId}`);
    }


  render() {
    return (
        <div className="row">
            <FormGroup className="col-lg-5">
            <HeaderGroup title = "Goat Center" icon ={icongoat} iname="Goat Image"></HeaderGroup>
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
                <button type="button" class="btn btn-info" onClick={this.find}>Buscar</button>
                <button type="button" className="btn btn-success" onClick={this.create}>Create</button>
                <button type="button" className="btn btn-danger" onClick={this.cancel}>Cancel</button>
            </ButtonsGroup>
            </FormGroup>
            <div className="col-lg-7">
                <GoatTable goats={this.state.goats} delete={this.delete} edit={this.edit}/>
            </div>
        </div>
    );
  }
}

export default withRouter(GoatCenterPag);
