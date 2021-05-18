import React from 'react'
import "./Sandwich.css"

function Sandwich() {

    const [count, setCount] = React.useState(0);

    const icrement = () =>{
        setCount(count + 1);
    };
    const decrement = () =>{
        if(count>0){
        setCount(count - 1);
        }
    };

    return (
        <div className="food-image">
            <img src="\image\sandwich.png"/>
            <span className="food-image span"></span>
            <div className="form-bottom">
                    <p className="text4">Slices of bread: </p>
                    <a href="#" className="decrement" onClick={decrement}> - </a>
                    <input className="inputSlices"  type="number" value={count} required></input>
                    <a href="#" className="increment" onClick={icrement}>+</a>
                </div>
        </div>
    )
}

export default Sandwich;