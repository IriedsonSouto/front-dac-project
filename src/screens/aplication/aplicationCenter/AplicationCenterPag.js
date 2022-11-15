import React from 'react';
import './AplicationCenterPag.css';
import HeaderGroup from '../../../componentes/HeaderGroup';
import FormGroup from '../../../componentes/FormGroup';
import InputLabel from '../../../componentes/InputLabel';
import ButtonsGroup from '../../../componentes/ButtonsGroup';
import AplicationTable from '../../../componentes/AplicationTable';
import axios from 'axios';
import iconsyringe from '../../../icons/iconsyringe.png';
import {withRouter} from 'react-router-dom';

class AplicationCenterPag extends React.Component{

  state = {
    id: "",
    aplicationMode: "",
	medicineId: "",
    goatId: "",
	date: "",
    aplications: []
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

    if(this.state.aplicationMode != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}aplicationMode =${this.state.aplicationMode}`;
    }

    if(this.state.medicineId != ''){
      if(params != '?'){
        params = `${params}&`;
      }
      params = `${params}medicineId =${this.state.medicineId}`;
    }

    if(this.state.goatId != ''){
        if(params != '?'){
          params = `${params}&`;
        }
        params = `${params}goatId =${this.state.goatd}`;
      }

    if(this.state.date != ''){
        if(params != '?'){
          params = `${params}&`;
        }
        params = `${params}date =${this.state.date}`;
      }

    axios.get(`http://localhost:8080/api/aplication${params}`
    ).then(response =>
      {
        const aplications = response.data;
        this.setState({aplications});
        console.log(aplications);
      }).catch(error =>
        {
          console.log(error.response);
        }

      );
}

create = async () => {
    await axios.post('http://localhost:8080/api/aplication',
    {
        aplicationMode: this.state.aplicationMode,
        medicineId: this.state.medicineId,
        goatId: this.state.goatId,
        date: this.state.date,
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
    this.setState({aplicationMode: ""})
    this.setState({medicineId: ""})
    this.setState({goatId: ""})
    this.setState({date: ""})
    this.setState({description: ""})
}


delete = async (aplicationId) => {
    await axios.delete(`http://localhost:8080/api/aplication/${aplicationId}`
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

edit = (aplicationId) => {
    this.props.history.push(`/aplicationupdate/${aplicationId}`);
}

  render() {
    return (
        <div className="row">
            <FormGroup className="col-lg-5">
                <HeaderGroup title = "Aplication Center" icon ={iconsyringe} iname="Aplication Image"></HeaderGroup>
                <InputLabel name="Aplicaion Mode:">
                <input type="text" className="form-control" placeholder="ORAL, SUBCUTANEO OR INTRAMUSCULAR;" id="inputDefault" value = {this.state.aplicationMode} onChange = {(e) => {this.setState({aplicationMode: e.target.value})}}/>
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
                <button type="button" class="btn btn-info" onClick={this.find}>Buscar</button>
                <button type="button" className="btn btn-success" onClick={this.create}>Create</button>
                <button type="button" className="btn btn-danger" onClick={this.cancel}>Cancel</button>
                </ButtonsGroup>
            </FormGroup>
            <div className="col-lg-7">
                <AplicationTable aplications={this.state.aplications} delete={this.delete} edit={this.edit}/>
            </div>
        </div>
    );
  }
}

export default withRouter(AplicationCenterPag);


