import React from 'react';
import './MedicineCenterPag.css';
import HeaderGroup from '../../../componentes/HeaderGroup';
import FormGroup from '../../../componentes/FormGroup';
import InputLabel from '../../../componentes/InputLabel';
import ButtonsGroup from '../../../componentes/ButtonsGroup';
import iconmedicine  from '../../../icons/iconmedicine.png';
import MedicineTable from '../../../componentes/MedicineTable';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class MedicinePagCreate extends React.Component{

    state = {
        id: "",
        name: "",
        description: "",
        medicines: []
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

        if(this.state.name != ''){
          if(params != '?'){
            params = `${params}&`;
          }
          params = `${params}name =${this.state.name}`;
        }
        axios.get(`http://localhost:8080/api/medicine${params}`
        ).then(response =>
          {
            const medicines = response.data;
            this.setState({medicines});
            console.log(medicines);
          }).catch(error =>
            {
              console.log(error.response);
            }

          );
    }

    create = async () => {
        await axios.post('http://localhost:8080/api/medicine',
        {
            name: this.state.name,
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
        this.setState({name: ""})
        this.setState({description: ""})
    }

    delete = async (medicineId) => {
        await axios.delete(`http://localhost:8080/api/medicine/${medicineId}`
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

    edit = (medicineId) => {
        this.props.history.push(`/medicineupdate/${medicineId}`);
    }

  render() {
    return (
        <div className="row">
            <FormGroup className="col-lg-5">
                <HeaderGroup title = "Medicine Center" icon ={iconmedicine} iname="Medicine Image"></HeaderGroup>
                <InputLabel name="Name:">
                <input type="text" className="form-control" placeholder="Medicine name" id="inputDefault" value = {this.state.name} onChange = {(e) => {this.setState({name: e.target.value})}}/>
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
                <MedicineTable medicines={this.state.medicines} delete={this.delete} edit={this.edit}/>
            </div>
        </div>
    );
  }
}

export default withRouter (MedicinePagCreate);
