import React from 'react';
import './MedicinePag.css';
import iconmedicine from'./iconmedicine.png'

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
        <header>
          <img class="logo" src={iconmedicine} alt="Medicine Image"/>
          <h1>Medicine Tela</h1>
        </header>
        <div class="input-label">
          <div className="form-group">
            <label className="col-form-label mt-4" for="inputDefault">Name:</label>
            <input type="text" className="form-control" placeholder="Medicine name" id="inputDefault" value = {this.state.name} onChange = {(e) => {this.setState({name: e.target.value})}}/>
            <br/>

            <label for="exampleTextarea" className="form-label mt-4">Description:</label>
            <textarea className="form-control" id="exampleTextarea" rows="3" value = {this.state.description} onChange = {(e) => {this.setState({description: e.target.value})}}></textarea>
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


