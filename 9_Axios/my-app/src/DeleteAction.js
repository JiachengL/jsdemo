import React from "react";
import axios from "axios";

export default class DeleteStudent extends React.Component {
  handleClick = event => {
    console.log(`handle delete click with id ${this.props.id}`);
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <button type="input" onClick={this.handleClick}>
          Delete
        </button>
      </div>
    );
  }
}
