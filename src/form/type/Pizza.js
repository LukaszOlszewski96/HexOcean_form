import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Pizza.css";



class Pizza extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "0"
    };
  }
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
  };
  
  

  render(){
    return (
            <div className="food-image">
                <img src="\image\pizza.png"/>
                <span className="span"></span>
                <p className="tittle-dish">Salami Pizza</p>
                <div className="vertical_form">
                    <p className="text4">Number of slices:</p>
                    <button onClick={this.decrement} className="btn ">-</button>
                    <input  className="number-input" value={this.props.count}></input>
                    <button onClick={this.increment} className="btn ">+</button>
                </div>
                <div className="vertical_form">
                    <p className="text4">Diameter:</p>
                    <input className="slider" type="range" defaultValue={0} min="0" max="50" step="1"></input>
                </div>
            </div>
    );
}
}

const mapStateToProps = state => {
  return {
    count: state.count,
    diameter: state.diameter
  };
};


export default connect(mapStateToProps)(Pizza);

