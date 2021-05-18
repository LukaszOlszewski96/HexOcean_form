import React from 'react';
import { connect } from 'react-redux';

import "./Pizza.css";




class Pizza extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: 0
    };

  }
  diameterUp = () =>{
    this.setState({value: this.state.value + 0.1})
  }
  diameterDw = () =>{
    if(this.state.value > 0.0){
    this.setState({value: this.state.value - 0.1})
  }}
  diameterUp2 = () =>{
    this.setState({value: this.state.value + 10})
  }
  diameterDw2 = () =>{
    if(this.state.value >= 10){
    this.setState({value: this.state.value - 10})
  }}
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
                <div className="form-bottom">
                    <p className="text4">Number of slices:</p>
                    <button type="button" onClick={this.decrement} className="btn ">-</button>
                    <input  className="number-input" value={this.props.count} required></input>
                    <button type="button" onClick={this.increment} className="btn ">+</button>
                </div>
                <div className="form-bottom">
                    <p className="text4">Diameter:</p>
                    <button className="buttonTen1" type="button" onClick={this.diameterDw2}>-10</button>
                    <button className="button" type="button" onClick={this.diameterDw}>-</button>
                    <input  className="number-input2" value={this.state.value} required></input>
                    <button className="button" type="button" onClick={this.diameterUp} >+</button>
                    <button className="buttonTen2" type="button" onClick={this.diameterUp2}>+10</button>
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

