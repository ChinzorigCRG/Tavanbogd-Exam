import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class Create extends Component {

  state = {
    name: '',
    major:'',
    age:'',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('name', this.state.name);
    form_data.append('major', this.state.major);
    form_data.append('age', this.state.age);
    let url = 'http://localhost:8000/test/info/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder='Нэр' id='name' value={this.state.name} onChange={this.handleChange} required/>
          </p>
          <p>
            <input type="text" placeholder='Мэргэжил' id='major' value={this.state.major} onChange={this.handleChange} required/>
          </p>
          <p>
            <input type="number" placeholder='Нас' id='age' value={this.state.age} onChange={this.handleChange} required/>
          </p>
          <Button type="submit"> Нэмэх </Button>
        </form>
      </div>
    );
  }
}

export default Create;