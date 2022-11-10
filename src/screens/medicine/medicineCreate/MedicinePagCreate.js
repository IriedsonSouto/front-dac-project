import React from 'react';
import './MedicinePagCreate.css';
import HeaderGroup from '../../../componentes/HeaderGroup';
import FormGroup from '../../../componentes/FormGroup';
import InputLabel from '../../../componentes/InputLabel';
import ButtonsGroup from '../../../componentes/ButtonsGroup';
import iconmedicine  from '../../../icons/iconmedicine.png';

export default class MedicinePag extends React.Component{

    state = {
        name: "",
        description: ""
    }


    cancel = () => {
        this.setState({name: ""})
        this.setState({description: ""})
    }

    print = () => {
        console.log(this.state);
    }

  render() {
    return (
      <div className="Pag">
        <HeaderGroup title = "Medicine Pag" icon ={iconmedicine} iname="Medicine Image"></HeaderGroup>
        <FormGroup>
            <InputLabel name="Name:">
            <input type="text" className="form-control" placeholder="Medicine name" id="inputDefault" value = {this.state.name} onChange = {(e) => {this.setState({name: e.target.value})}}/>
            </InputLabel>
            <InputLabel name="Description:">
            <textarea className="form-control" id="exampleTextarea" rows="3" value = {this.state.description} onChange = {(e) => {this.setState({description: e.target.value})}}></textarea>
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


