import React, { Component } from 'react';


class ToyCard extends Component {

  localDeleteHandler = () => {
    this.props.deleteHandler(this.props, this.props.id)
    console.log(this.props.id)
  }

  localLikeHandler = () => {
    console.log(this.props.likes)
    let likes = this.props.likes
    let id =this.props.id
    this.props.likeHandler(likes, id)
  }

  render() {
    const { toy } = this.props;
    return (
      <div className="card">
        <h2>{toy.name}</h2>
        <img src={toy.image} alt={toy.name} className="toy-avatar" />
        <p>{toy.likes} Likes </p>
        <button onClick={this.localLikeHandler} className="like-btn">Like {'<3'}</button>
        <button onClick={this.localDeleteHandler} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
