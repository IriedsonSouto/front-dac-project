import React from 'react';
import './GoatPag.css';
import icongoat from './icongoat.png'

export default class GoatPag extends React.Component{

  state = {
    nickname: "",
   	gender: "",
	  birthDay: "",
	  description: ""
  }  


  cancel = () => {
    this.setState({nickname: ""})
    this.setState({gender: ""})
    this.setState({birthDay: ""})
    this.setState({description: ""})
  }

  print = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div className="Pag">
        <header>
          <img class="logo" src={icongoat} alt="Goat Image"/>
          <h1>Goat Tela</h1>
        </header>
        <div class="input-label">
          <div className="form-group">
            <label className="col-form-label mt-4" for="inputDefault">Nickname:</label>
            <input type="text" className="form-control" placeholder="Goat name" id="inputDefault" value = {this.state.nickname} onChange = {(e) => {this.setState({nickname: e.target.value})}}/>
            <br/>

            <label className="col-form-label mt-4" for="inputDefault">Gender:</label>
            <input type="text" className="form-control" placeholder="Male or Female" id="inputDefault" value = {this.state.gender} onChange = {(e) => {this.setState({gender: e.target.value})}}/>
            <br/>

            <label className="col-form-label mt-4" for="inputDefault">Birth Day:</label>
            <input type="text" className="form-control" placeholder="DD/MM/YYYY" id="inputDefault" value = {this.state.birthDay} onChange = {(e) => {this.setState({birthDay: e.target.value})}}/>
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


