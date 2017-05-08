import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import Weather from "./weather";
import Autocomplete from "./autocomplete";

const Names = [
  "Allen",
  "Arthur",
  "Ben",
  "Edmund",
  "Leilani",
  "Zangief"
];


class Root extends React.Component {

  render(){
    return (
      <div>
        <Clock />
        <Weather />
        <br></br>
        <Autocomplete names={Names}/>
      </div>
    );
  }

}

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(<Root />, document.getElementById("main"));
// });

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById("main"));
});
