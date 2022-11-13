import React from 'react';
import HeaderGroup from '../../../componentes/HeaderGroup';
import FormGroup from '../../../componentes/FormGroup';
import InputLabel from '../../../componentes/InputLabel';
import ButtonsGroup from '../../../componentes/ButtonsGroup';
import iconmedicine from '../../../icons/iconmedicine.png';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class MedicinePagUpdate extends React.Component{

    state = {
        id: "",
        name: "",
        description: ""
    }


    cancel = () => {
        this.props.history.push('/medicine');
    }

    update = async () => {
        await axios.put(`http://localhost:8080/api/medicine/${this.state.id}`,
        {
            name: this.state.name,
            description: this.state.description,
        })
        .then(response =>
        {
            console.log(response);
            this.props.history.push('/medicine');
        })
        .catch(error =>
        {
            console.log(error.response);
        });
    }

  render() {
    return (
        <div className="Pag">
        <FormGroup>
            <HeaderGroup title = "medicine Update" icon ={iconmedicine} iname="medicine Image"></HeaderGroup>
            <InputLabel name="ID:">
            <input type="text" className="form-control"  id="inputDefault" value = {this.state.id} onChange = {(e) => {this.setState({id: e.target.value})}}/>
            </InputLabel>
            <InputLabel name="name:">
            <input type="text" className="form-control" placeholder="medicine name" id="inputDefault" value = {this.state.name} onChange = {(e) => {this.setState({name: e.target.value})}}/>
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

export default withRouter(MedicinePagUpdate);

