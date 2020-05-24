import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let value1,
    value2,
    value3,
    proposedAnswer;

class App extends Component {
  state = {
   	numCorrect: 0,
    numQuestions: 0
  }

  generateNumbers = () => {
    value1 = Math.floor(Math.random() * 100);
    value2 = Math.floor(Math.random() * 100);
    value3 = Math.floor(Math.random() * 100);
    proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
  }

  componentWillMount() {
    this.generateNumbers();
  }

  onTrueClickHandler = () => {
    if ((value1 + value2 + value3) === proposedAnswer) {
       this.setState(state => ({
         numCorrect: state.numCorrect + 1
       }));
    } else {
       this.setState(state => ({
         numQuestions: state.numQuestions + 1
       }));
    }
    
    this.generateNumbers();
  }

  onFalseClickHandler = () => {
    if ((value1 + value2 + value3) !== proposedAnswer) {
       this.setState(state => ({
         numCorrect: state.numCorrect + 1
       }));
    } else {
       this.setState(state => ({
         numQuestions: state.numQuestions + 1
       }));
    }
    
    this.generateNumbers();
  }
  
  render() {
    const { numCorrect, numQuestions } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={this.onTrueClickHandler}>True</button>
          <button onClick={this.onFalseClickHandler}>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
