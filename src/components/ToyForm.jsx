import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: "",
    image: "",
    likes: 0
  }



  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitHandler = (event) => {

    event.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({
      name: "",
      image: "",
      likes: 0
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHandler} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." value={this.state.name} onChange={this.changeHandler} className="input-text"/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." value={this.state.image} onChange={this.changeHandler} className="input-text"/>
          <br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }

}

export default ToyForm;
