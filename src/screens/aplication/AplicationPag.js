import React from 'react';
import './AplicationPag.css';
import iconsyringe from'./iconsyringe.png'

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
        <header>
          <img class="logo" src={iconsyringe} alt="Aplication Image"/>
          <h1>Aplication Tela</h1>
        </header>
        <div class="input-label">
          <div className="form-group">
            <label className="col-form-label mt-4" for="inputDefault">Aplication Mode:</label>
            <input type="text" className="form-control" placeholder="Aplication Mode" id="inputDefault" value = {this.state.aplicationMode} onChange = {(e) => {this.setState({aplicationMode: e.target.value})}}/>
            <br/>

            <label className="col-form-label mt-4" for="inputDefault">Medicine Identification:</label>
            <input type="text" className="form-control" placeholder="Ex: 123" id="inputDefault" value = {this.state.medicineId} onChange = {(e) => {this.setState({medicineId: e.target.value})}}/>
            <br/>

            <label className="col-form-label mt-4" for="inputDefault">Goat Identification:</label>
            <input type="text" className="form-control" placeholder="Ex: 123" id="inputDefault" value = {this.state.goatId} onChange = {(e) => {this.setState({goatId: e.target.value})}}/>
            <br/>

            <label className="col-form-label mt-4" for="inputDefault">Date Aplication:</label>
            <input type="text" className="form-control" placeholder="DD/MM/YYYY" id="inputDefault" value = {this.state.date} onChange = {(e) => {this.setState({date: e.target.value})}}/>
            <br/>

          </div>
          <br/>

          <div class="buttons">
            <button type="button" className="btn btn-outline-success" onClick={this.print}>Create</button>
            <button type="button" className="btn btn-outline-warning" onClick={this.cancel}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}


