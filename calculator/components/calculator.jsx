import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: 0
    };
    this.handleNum1 = this.handleNum1.bind(this);
    this.handleNum2 = this.handleNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
  }

  handleNum1(e) {
    e.preventDefault();
    let val = e.currentTarget.value;
    this.setState({num1: val});
  }

  handleNum2(e) {
    e.preventDefault();
    let val = e.currentTarget.value;
    this.setState({num2: val});
  }

  add(e) {
    e.preventDefault();
    this.setState( {result: parseInt(this.state.num1) + parseInt(this.state.num2)});
  }

  subtract(e) {
    e.preventDefault();
    this.setState( {result: parseInt(this.state.num1) - parseInt(this.state.num2)});
  }

  multiply(e) {
    e.preventDefault();
    this.setState( {result: parseInt(this.state.num1) * parseInt(this.state.num2)});
  }

  divide(e) {
    e.preventDefault();
    this.setState( {result: parseFloat(this.state.num1) / parseFloat(this.state.num2)});
  }

  render() {
    return (
      <div>
        <h1>CALCULATOR</h1>
        <div>{this.state.result}</div>
        <br />
        <input onChange={this.handleNum1}></input>
        <input onChange={this.handleNum2}></input>
        <br />
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
        <button onClick={this.multiply}>Multiply</button>
        <button onClick={this.divide}>Divide</button>
      </div>
    );
  }
}

export default Calculator;
