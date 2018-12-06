import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Shubham', age: 22 },
      { name: 'Max', age: 28 },
      { name: 'Steph', age: 26 }
    ]
  }

switchNameHandler = (newName) => {
  // console.log('Was clicked!')
  // DON'T DO THIS this.state.persons[0].name = 'Shubham Jain';
  this.setState({persons: [
    { name: newName, age: 22 },
    { name: 'Maxi', age: 29 },
    { name: 'Steph', age: 69 }
  ]})
}

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler.bind(this, 'Shubham')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age = {this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'MAx!')}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App.'));
  }
}

export default App;
