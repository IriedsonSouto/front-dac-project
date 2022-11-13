import React from 'react';
import HeaderGroup from '../../../componentes/HeaderGroup';
import FormGroup from '../../../componentes/FormGroup';
import InputLabel from '../../../componentes/InputLabel';
import ButtonsGroup from '../../../componentes/ButtonsGroup';
import iconsyringe from '../../../icons/iconsyringe.png';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class AplicationPagUpdate extends React.Component{

    state = {
        id: "",
        aplicationMode: "",
        medicineId: "",
        goatId: "",
        date: "",
    }


    cancel = () => {
        this.props.history.push('/aplication');
    }

    update = async () => {
        await axios.put(`http://localhost:8080/api/aplication/${this.state.id}`,
        {
            aplicationMode: this.state.aplicationMode,
            medicineId: this.state.medicineId,
            goatId: this.state.goatId,
            date: this.state.date
        })
        .then(response =>
        {
            console.log(response);
            this.props.history.push('/aplication');
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
            <HeaderGroup title = "aplication Update" icon ={iconsyringe} iname="aplication Image"></HeaderGroup>
            <InputLabel name="ID:">
            <input type="text" className="form-control"  id="inputDefault" value = {this.state.id} onChange = {(e) => {this.setState({id: e.target.value})}}/>
            </InputLabel>
            <InputLabel name="Aplicaion Mode:">
            <input type="text" className="form-control" placeholder="Ex: Subcutaneous" id="inputDefault" value = {this.state.aplicationMode} onChange = {(e) => {this.setState({aplicationMode: e.target.value})}}/>
            </InputLabel>
            <InputLabel name="Medicine Identification:">
            <input type="text" className="form-control" placeholder="Ex: 123" id="inputDefault" value = {this.state.medicineId} onChange = {(e) => {this.setState({medicineId: e.target.value})}}/>
            </InputLabel>
            <InputLabel name="Goat Identification:">
            <input type="text" className="form-control" placeholder="Ex: 123" id="inputDefault" value = {this.state.goatId} onChange = {(e) => {this.setState({goatId: e.target.value})}}/>
            </InputLabel>
            <InputLabel name="Date Aplication:">
            <input type="text" className="form-control" placeholder="DD/MM/YYYY" id="inputDefault" value = {this.state.date} onChange = {(e) => {this.setState({date: e.target.value})}}/>
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

export default withRouter(AplicationPagUpdate);

