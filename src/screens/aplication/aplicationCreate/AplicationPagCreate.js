import React from 'react';
import './AplicationPagCreate.css';
import HeaderGroup from '../../../componentes/HeaderGroup';
import FormGroup from '../../../componentes/FormGroup';
import InputLabel from '../../../componentes/InputLabel';
import ButtonsGroup from '../../../componentes/ButtonsGroup';
import iconsyringe from '../../../icons/iconsyringe.png';

export default class MedicinePag extends React.Component{

  state = {
    aplicationMode: "",
	medicineId: "",
    goatId: "",
	date: ""
  }


  cancel = () => {
    this.setState({aplicationMode: ""})
    this.setState({medicineId: ""})
    this.setState({goatId: ""})
    this.setState({date: ""})
  }

  print = () => {
    console.log(this.state);
  }

  render() {
    return (
    <div className="Pag">
        <HeaderGroup title = "Aplication Pag" icon ={iconsyringe} iname="Aplication Image"></HeaderGroup>
        <FormGroup>
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
        </FormGroup>
        <ButtonsGroup>
            <button type="button" className="btn btn-success" onClick={this.print}>Create</button>
            <button type="button" className="btn btn-warning" onClick={this.cancel}>Cancel</button>
        </ButtonsGroup>
    </div>
    );
  }
}


