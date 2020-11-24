import React from 'react';
import SearchForm from './SearchForm';
import ToyCard from './ToyCard'
import ToyForm from './ToyForm'

class ToyContainer extends React.Component {

  state = {
    api: [],
    searchValue: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/toys')
    .then(r => r.json())
    .then(data => this.setState({ api: data }))
  }

  searchHandler = (event) => {
    this.setState({searchValue: event.target.value })
  }

  likeHandler = (likes, id) => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ likes })
    })
    .then(r => r.json())
    .then(newToy => {
      let copiedArray = [...this.state.api]
      let index = copiedArray.findIndex(toy => toy.id === newToy.id)
      newToy.likes+= 1
      copiedArray[index] = newToy
      this.setState({ api: copiedArray})
    })
  }

  deleteHandler = (toyObj, id) => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(data => {
      console.log(this.state.api)
      let newArray = [...this.state.api]
      this.setState({ api: newArray })
    })
    console.log(this.state.api)
  }

  submitHandler = (toyObj) => {

      fetch('http://localhost:3000/toys', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify(toyObj)
      })
      .then(r => r.json())
      .then(newToy => this.setState({ api: [...this.state.api, newToy] }))
      .catch(console.log)
  }

  renderToys = () => {
    let filteredArray = this.state.api.filter(toy => toy.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))

    return filteredArray.map(toyObj => <ToyCard likes={toyObj.likes} likeHandler={this.likeHandler} deleteHandler={this.deleteHandler} id={toyObj.id} key={toyObj.id} toy={toyObj}  />)
  }

  render () {
    return (
      
      <div id="toy-collection">
                <ToyForm submitHandler={this.submitHandler}/>
                <SearchForm changeHandler={this.searchHandler} searchValue={this.state.searchValue}/>
        {this.renderToys()}
      </div>
    );

  }

}

export default ToyContainer;
