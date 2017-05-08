import React from 'react';


class Clock extends React.Component{

  constructor(props){
    super(props);
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);

  }

  render(){
    let hour = this.state.time.getHours(),
        minutes = this.state.time.getMinutes(),
        seconds = this.state.time.getSeconds(),
        month = this.state.time.getMonth(),
        day = this.state.time.getDate(),
        year = this.state.time.getUTCFullYear();

    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];


    return(
      <div>
      <h3>Clock</h3>

        <div className="calendar">
          <p>
            <span>Time: </span>
            <span>{hour%12}:{minutes}:{seconds} PDT</span>
          </p>
          <p>
            <span>Date: </span>
            <span>{months[month-1]} {day} {year} </span>
          </p>
        </div>

      </div>
    );
  }

  tick(){
    this.setState({time: new Date()});
  }

  componentDidMount(){
    this.intervalID = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalID);
  }

}

export default Clock;
