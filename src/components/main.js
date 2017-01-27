import React, { Component } from 'react';
import Workout from './workout';
import Exercise from './exercise';
import ExerciseForm from './exerciseForm';



export default class Main extends Component {
  render() {
    return (
      <div  className="container">
        <ExerciseForm/>
        <Exercise/>
        <Workout/>
      </div>
    )
  }
}