import React, { Component } from 'react';


export default class Exercise extends Component {

  handleSubmit = () => {

  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>Create new Exercise</label>
        <div className="formField">
          <input placeholder="Exercise Name:"/>
          <input placeholder="Number of Sets:" />
          <input placeholder="Number of Reps:" />
          <button type="submit" >
            Make Exercise
          </button>
        </div>
      </form>
    )
  }
}