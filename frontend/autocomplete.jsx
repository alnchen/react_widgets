import React from 'react';

class Autocomplete extends React.Component{
  constructor(props){
    super(props);
    this.state = {inputVal: "", matchedNames: this.props.names};
    this.matches = this.matches.bind(this);
    this.newInput = this.newInput.bind(this);
  }

  newInput(e){

    this.setState({inputVal: e.currentTarget.value});
  }

  matches(){

    if (this.state.inputVal === 0){
      return this.props.names;
    }

    let output = [];
    let allNames = this.props.names;
    allNames.forEach((name) => {
      let length = this.state.inputVal.length;
      if (name.slice(0, length).toLowerCase() === this.state.inputVal.toLowerCase())
      output.push(name);
    });
    return output;
  }

  render(){
    let matches = this.matches().map((name, idx) => {
      return (
        <li className="nameMatches" key={idx}>{name}</li>
      );
    });

    return (
      <div>
        <input className="nameSearch" onChange={this.newInput} value={this.state.inputVal}>
        </input>
        <ul>
          {matches}
        </ul>
      </div>
    );
  }
}




export default Autocomplete;
